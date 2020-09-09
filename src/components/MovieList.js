import React from "react";
import Movie from "./Movie";
// MovieList a functional component to render out individual Movie components.
const MovieList = (props) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col s12">
					{props.movies.map((movie, i) => {
						// for every movie object that we map through from our movies prop we`re going to return a Movie component
						return (
							<Movie // on a Movie component we pass in a prop to render out a list
								key={i} // key prop passed in with id property.
								viewMovieInfo={props.viewMovieInfo}
								movieId={movie.imdbID}
								image={movie.Poster} // image prop passed in with Poster property.
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default MovieList;
