import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const Trip = (props) => {
	const id = props.match.params.id
	console.log(id)
	const url = "https://travel-app-dg.herokuapp.com";
	const [trip, setTrip] = useState(null)

	const findOneTrip = () => {
		fetch(url + "/trip/" + id)
		.then((res) => res.json())
		.then((data) => {
			setTrip(data.data)
		})
	}

	useEffect(() => {
		findOneTrip()
	}, [])

	const loaded = () => {
		return (
			<div>
				<Link to="/">
					<h1 id="home-link">Back to Home</h1>
				</Link>
			<h1>{trip.location.name}</h1>
			<section id="trip-gallery">
			<img src={trip.photos[0]} alt="" className="trip-pic"/>
			<img src={trip.photos[1]} alt="" className="trip-pic"/>
			<img src={trip.photos[2]} alt="" className="trip-pic"/>
			<img src={trip.photos[3]} alt="" className="trip-pic"/>
			<img src={trip.photos[4]} alt="" className="trip-pic"/>
			<img src={trip.photos[5]} alt="" className="trip-pic"/>
			<img src={trip.photos[6]} alt="" className="trip-pic"/>
			<img src={trip.photos[7]} alt="" className="trip-pic"/>
			</section>
			<p>{`Activities include ${trip.activities[0]}, ${trip.activities[1]}, ${trip.activities[2]}, and ${trip.activities[3]}`}</p>
			<h2>Agency</h2>
			<hr />
			<h3>{trip.agency}</h3>
			<h3>{trip.agencies_ref.contact.address}</h3>
			<h3>{trip.agencies_ref.contact.phone}</h3>
			<h3>{trip.agencies_ref.contact.email}</h3>
			<h3>{trip.agencies_ref.contact.url}</h3>
			<hr />
			<h2>Reviews</h2>
			<h3>Name: {trip.reviews_ref[0].author}</h3>
			<h3>Rating: {trip.reviews_ref[0].stars}/5</h3>
			<h3>{trip.reviews_ref[0].body}</h3>
			</div>
		)
	}

	const loading = () => {
		return <h1>Loading...</h1>
	}


	return trip ? loaded() : loading()
}
export default Trip