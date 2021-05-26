import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import dummyDataTrips from "../dev/dummyDataTrips";
const CustomerProfile = (props) => {
	console.log("user profile props:", props);

	const user = props.activeCustomer;

	return (
		<main>
			<h1>Welcome, {user.username} </h1>
			<header></header>
			<section className="user-info">
				<img className="user-avi" src={user.avatar} />
			</section>
			<section className="user-trips"></section>
			{/* <section>{tripList.length > 0 ? loadedTrips() : loading()}</section> */}
		</main>
	);
};
export default CustomerProfile;
