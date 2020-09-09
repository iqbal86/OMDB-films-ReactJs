import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import SearchArea from "./SearchArea";
import MovieList from "./MovieList";
import Pagination from "./Pagination";
import MovieInfo from "./MovieInfo";

class App extends Component {
	constructor() {
		super();

		// state contains an array of movie objects.
		// searchTerm property with search query from SearchArea component.
		// totalResults property keep track of number fetched data results per page.
		// currentPage property keep track of what page we are on.

		this.state = {
			movies: [],
			searchTerm: "",
			totalResults: 0,
			currentPage: 1,
			currentMovie: null,
			sort: "",
		};
	}

	handleSubmit = (e) => {
		// handle form submition from searchbox.
		e.preventDefault();
		//
		fetch(`http://www.omdbapi.com/?apikey=5b63bb9f&s=${this.state.searchTerm}`)
			.then((data) => data.json())
			.then((data) => {
				console.log(data);
				this.setState({
					movies: [...data.Search],
					totalResults: data.totalResults,
				});
			});
	};

	handleChange = (e) => {
		this.setState({ searchTerm: e.target.value });
	};

	// nextPage method will fire off when clicked on pagination link. creates a new page.
	nextPage = (pageNumber) => {
		fetch(
			// fetch request with page parameter.
			`http://www.omdbapi.com/?apikey=5b63bb9f&s=${this.state.searchTerm}&page=${pageNumber}`
		)
			.then((data) => data.json())
			.then((data) => {
				console.log(data);
				this.setState({ movies: [...data.Search], currentPage: pageNumber }); // when we get the data back from API set the state of movies and currentPage.
			});
	};

	// display the overview of current movie object.
	viewMovieInfo = (id) => {
		const filteredMovie = this.state.movies.filter(
			// filter the movie that matches the id passed in to the method.
			(movie) => movie.imdbID == id
		);
		// an array of one movie object.
		const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
		// if the movie id is passed in to the array then set that as a currentMovie.
		this.setState({ currentMovie: newCurrentMovie });
	};

	// remove the overview display for currentMovie. Go back arrow key.
	closeMovieInfo = () => {
		this.setState({ currentMovie: null });
	};

	// method sets the state of the sort property with the value from select tag.
	handleSort = (e) => {
		this.setState({ sort: e.target.value });
	};

	render() {
		// run the sort method on movies array.
		const sortedMovies = this.state.movies.sort((a, b) => {
			if (this.state.sort == "Newest") {
				// sorting by the Newest first.
				return (
					// grab the substring of the Year wraped in parseInt method to convert the string into integer.
					parseInt(b.Year.substring(0, 4)) - parseInt(a.Year.substring(0, 4))
				);
			} else if (this.state.sort == "Oldest") {
				// sorting the Oldest first.
				return (
					parseInt(a.Year.substring(0, 4)) - parseInt(b.Year.substring(0, 4))
				);
			}
			return;
		});
		// numberPages variable set to total 10 number of results per page.
		const numberPages = Math.floor(this.state.totalResults / 10);

		return (
			<div className="App">
				<Nav />
				<header className="App-header"></header>
				{this.state.currentMovie == null ? ( // if currentMovie is null then add the below components.
					<div>
						<SearchArea // add functions as props to the SearchArea component.
							handleSubmit={this.handleSubmit}
							handleChange={this.handleChange}
							handleSort={this.handleSort}
						/>
						<MovieList // MovieList component render out a list of individual Movie components, to do that we need to pass in the movie data as a prop to a MovieList component.
							viewMovieInfo={this.viewMovieInfo} // pass viewMovieInfo method as a prop to the MovieList component and then down to the Movie component for View Details anchor tag.
							movies={sortedMovies} // pass sortedMovies variable to the MovieList component as a prop.
						/>
					</div>
				) : (
					// else pass in currentMovie and closeMovieInfo methods as props to the MovieInfo component.
					<MovieInfo
						currentMovie={this.state.currentMovie}
						closeMovieInfo={this.closeMovieInfo}
					/>
				)}
				{/* if totalResults is greater than 10 then render out and display the Pagination component else display nothing. */}
				{this.state.totalResults > 10 && this.state.currentMovie == null ? (
					<Pagination // pass in variable, function and property as a prop to the Pagination component.
						pages={numberPages}
						nextPage={this.nextPage}
						currentPage={this.state.currentPage}
					/>
				) : (
					""
				)}
			</div>
		);
	}
}
export default App;
