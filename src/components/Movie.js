import React from "react";
// Movie a functional component returning value of image and movieId props.
const Movie = (props) => {
	return (
		<div className="col s12 m6 l3">
			<div className="card">
				<div className="card-image waves-effect waves-block waves-light">
					{props.image === "N/A" ? ( // set up a default image.
						<img
							src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
							alt="card image"
							style={{ width: "100%", height: 360 }}
						/>
					) : (
						<img
							src={props.image}
							alt="card image"
							style={{ width: "100%", height: 360 }}
						/>
					)}
				</div>
				<div className="card-content">
					<p>
						{" "}
						{/* view movie details that matches its id */}
						<a href="#" onClick={() => props.viewMovieInfo(props.movieId)}>
							View Details
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Movie;
