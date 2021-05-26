import React from "react";
import { Link } from "react-router-dom";

const AgencyCard = (props) => {
	return (
		<Link to={`/agencies/${props._id}`}>
			<div className="agency-card">
				<div>{props.name}</div>
				<img src={props.logo} alt={props.name} />
			</div>
		</Link>
	);
};
export default AgencyCard;
