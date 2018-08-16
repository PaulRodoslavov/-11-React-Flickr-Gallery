import React from 'react';

// returns not found message
const NotFound = () => {
	return (
	<div className="container">
		<li className="not-found">
			<h3>No Results Found</h3>
			<p>Error 404 Your search did not return any results. Please try again.</p>
		</li>
	</div>
	)
}


export default NotFound;
