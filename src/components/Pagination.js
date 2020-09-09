import React from "react";
// Pagination a functional component pass in props
const Pagination = (props) => {
	const pageLinks = []; // pageLinks array holds all li tags for the paritcular page number.
	{
		/* loop through the number of pages from pages props and create li tag with the correct number
		associated with pageNumber.
*/
	}
	for (let i = 1; i <= props.pages + 1; i++) {
		let active = props.currentPage === i ? "active" : "";

		// add currentPage with id to pageLinks array.
		pageLinks.push(
			<li
				className={`paginationColor ${active}`}
				key={i}
				onClick={() => props.nextPage(i)}
			>
				<a href="#">{i}</a>
			</li>
		);
	}

	return (
		<div className="container">
			<div className="row">
				<ul className="paginationColor">
					{props.currentPage > 1 ? ( // render out to the previous page link.
						<li onClick={() => props.nextPage(props.currentPage - 1)}>
							<a href="#">Prev</a>
						</li>
					) : (
						""
					)}

					{pageLinks}

					{props.currentPage < props.pages + 1 ? ( // render out to the next page link.
						<li onClick={() => props.nextPage(props.currentPage + 1)}>
							<a href="#">Next</a>
						</li>
					) : (
						""
					)}
				</ul>
			</div>
			<p>
				Designed & Developed by{" "}
				<a href="https://www.iqbal86.com" target="_blank">
					Muhammad Iqbal
				</a>
			</p>
		</div>
	);
};

export default Pagination;
