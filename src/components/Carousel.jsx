import React from 'react'

const Carousel = (props) => {

	return (
		<section className="carousel-container">
			<div className="section-title">Popular Trips</div>
			<div className="carousel">{props.children}</div>
		</section>
	)
}
export default Carousel