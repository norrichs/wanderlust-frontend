import React from "react";
import { Link } from "react-router-dom";
import "../dev/dummyStyle.css";

// Placeholder Component to handle dummy data
// TODO replace this entire component
const AgencyCard = (props) => {
	console.log(props.agency);
	return (
		<div className="agency-card">
			<div>
				<img src={props.agency.logoUrl} />
				<Link to={`/agencies/${props.agency._id}`}>
					<span>{props.agency.name}</span>
				</Link>
			</div>

			<div>
				<span>{props.agency.starRating}</span>
				<span>{props.agency.reviews.length}</span>
			</div>
		</div>
	);
};
export default AgencyCard;
