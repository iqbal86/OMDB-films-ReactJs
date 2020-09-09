import React from "react";

// SearchArea functional component for accessing props and returning JSX from.
// Materializecss is used for grid classes.

const SearchArea = (props) => {
	return (
		<div className="container">
			<div className="row">
				<section className="col m12 push-l2 push-m1 input-field search-area">
					{/* onSubmit triggering handleSubmit from props which is a function created in App.js. Handles form submition.  */}
					<form action="" onSubmit={props.handleSubmit}>
						<div className="col s4">
							<input
								placeholder="Search movie"
								type="text"
								// onChange property accessing handleChange function from App.js. Handles change in input field.
								onChange={props.handleChange}
							/>
						</div>
						<div className="col s4 pull-m1">
							<button type="submit" className="btn waves-effect waves-light">
								Search
							</button>
						</div>
						<div className="col s4 pull-m2">
							<select
								defaultValue="Sort"
								className="browser-default btn sort"
								onChange={props.handleSort} // onChange property fire off handleSort from props which is a functhion in App.js.
							>
								<option disabled value="Sort">
									Sort
								</option>
								<option value="Newest">Newest</option>
								<option value="Oldest">Oldest</option>
							</select>
						</div>
					</form>
				</section>
			</div>
		</div>
	);
};

export default SearchArea;
