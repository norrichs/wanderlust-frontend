import React from "react";
import {Link} from 'react-router-dom'
import "../dev/dummyStyle.css";

const TripCard = (props) => {
	console.log(props.trip);
	return (
		<div className="trip-card">
			<Link to={`/trips/${props.trip._id}`}>
				<div>{props.trip.name}</div>
			</Link>
			<div>
				<span>{props.trip.location}</span>
				<span>{`${props.trip.dateStart} - ${props.trip.dateEnd}`}</span>
			</div>
		</div>
	);
};
export default TripCard;
