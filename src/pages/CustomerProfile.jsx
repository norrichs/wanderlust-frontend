import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import dummyDataTrips from "../dev/dummyDataTrips";
const CustomerProfile = (props) => {
	console.log("user profile props:", props);
	const user = props.activeCustomer;
	console.log(user);
	console.log(user.firstName);


	/// Get the trips ///
	// SHOW with _id



	return (
		<main className="customer-profile">
			<header>
				<button>back</button>
				<h1>My Profile</h1>
				<button>set</button>
			</header>
			<section className="user-info">
				<img className="user-avi" src={user.avatar} />
				<h2>{user.firstName + " " + user.lastName}</h2>
				<div className="user-socials">
					<a href="#">
						<div className="user-social">f</div>
					</a>
					<a href="#">
						<div className="user-social">i</div>
					</a>
					<a href="#">
						<div className="user-social">L</div>
					</a>
				</div>

				<header className="user-tabs active">
					<div className="tab">
						Favorites<div className="tab"></div>
					</div>
					<div className="tab">
						Wallet<div className="tab"></div>
					</div>
					<div className="tab">
						About<div className="tab"></div>
					</div>
				</header>
				<section></section>
			</section>
			<section className="user-trips"></section>
			{/* <section>{tripList.length > 0 ? loadedTrips() : loading()}</section> */}
		</main>
	);
};
export default CustomerProfile;
