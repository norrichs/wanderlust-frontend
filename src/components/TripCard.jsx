import React from "react";
import {Link} from 'react-router-dom'
import "../dev/dummyStyle.css";

const TripCard = (props) => {
	return (
		<Link to={`/trips/${props._id}`}>
			<div className="trip-card">
				<div>{props.name}</div>
				<p>{props.desc}</p>
			</div>
		</Link>
	);
};
export default TripCard;
