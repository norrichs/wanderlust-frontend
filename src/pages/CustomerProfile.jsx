import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import dummyDataTrips from "../dev/dummyDataTrips";
const CustomerProfile = (props) => {
	console.log("user profile props:", props);
	let user = props.activeCustomer;

	// const [tripList, setTripList] = useState([]);

	// // Three tabs can be displayed: "favorites", "wallet", "about"
	// const [tabSelected, setTabSelected] = useState("favorites")

	// const getTrips = () => {

	// 	setTripList([...dummyDataTrips.filter((trip)=>{

	// 	})]);
	// };

	// const loadedTrips = () => {
	// 	return tripList.map((trip, i) => {
	// 		console.log("loadedTrips", trip);
	// 		return <TripCard trip={trip} key={i} />;
	// 	});
	// };
	// useEffect(() => {
	// 	getTrips();
	// }, []);

	return (
		<main>
			<h1>Welcome, {user.username} </h1>
			<header></header>
			<section></section>
			{/* <section>{tripList.length > 0 ? loadedTrips() : loading()}</section> */}
		</main>
	);
};
export default CustomerProfile;
