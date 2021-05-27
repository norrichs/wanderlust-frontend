import React from "react";
import {Link} from 'react-router-dom'
// import "../dev/dummyStyle.css";

const TripCard = (props) => {
	const altImg = "https://source.unsplash.com/QVElk1sgzY4/640x426"
	return (
		<Link to={`/trips/${props._id}`}>
			<div className="trip-card">
				<img src={props.photo ? props.photo : altImg}/>
				<h2>{props.name}</h2>
				<p>{props.desc}</p>
			</div>
		</Link>
	);
};
export default TripCard;
