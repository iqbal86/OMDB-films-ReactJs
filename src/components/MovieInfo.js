import React from "react";

// MovieInfo a functional component that displays the overview of particular movie.
const MovieInfo = (props) => {
	return (
		<div className="container">
			<div
				className="row"
				onClick={props.closeMovieInfo}
				style={{ cursor: "pointer", paddingTop: 50 }}
			>
				<i className="fas fa-arrow-left"></i>
				<span style={{ marginLeft: 10 }}>Go back</span>
			</div>
			<div className="row">
				<div className="col s12 m4">
					{props.currentMovie.Poster === "N/A" ? (
						<img // if the movie doesnt have Poster. set up defualt image.
							src={
								"https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"
							}
							alt="Card image"
						/>
					) : (
						// render out currentMoive image.
						<img src={props.currentMovie.Poster} alt="Card image" />
					)}
				</div>
				<div className="col s12 m8">
					<div className="info-container">
						<p>{props.currentMovie.Title}</p>
						<p>{props.currentMovie.Year}</p>
						<p>{props.currentMovie.Type}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieInfo;
