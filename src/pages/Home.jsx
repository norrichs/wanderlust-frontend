import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import TripCard from "../components/TripCard";
import AgencyCard from "../components/AgencyCard";
import Carousel from "../components/Carousel";

const Home = ({ handleSelectCustomer ,activeCustomerId}, props) => {
	const [trips, setTrips] = useState([]);
	const [agency, setAgency] = useState([]);
	const url = "https://travel-app-dg.herokuapp.com";

	const getTrips = () => {
		fetch(url + "/trip")
			.then((res) => res.json())
			.then((data) => {
				setTrips(
					data.data.map((item, index) => {
						return (
							<TripCard
								key={index}
								name={item.location.name}
								_id={item._id}
								desc={item.description}
							/>
						);
					})
				);
			});
	};
	useEffect(() => {
		getTrips();
	}, []);

	const getAgency = () => {
		fetch(url + "/agency")
			.then((res) => res.json())
			.then((data) => {
				console.log(data.data);
				setAgency(
					data.data.map((item, index) => {
						return (
							<AgencyCard
								key={index}
								name={item.name}
								_id={item._id}
								logo={item.logo}
							/>
						);
					})
				);
			});
	};
	useEffect(() => {
		getAgency();
	}, []);

	const loaded = () => {
		return (
			<main>
				<Header activeCustomerId={activeCustomerId}/>
				<section className="home-content">
					<Carousel id="trip-carousel">{trips}</Carousel>
					<Carousel id="agency-carousel">{agency}</Carousel>
				</section>
				<button
					onClick={() => {
						handleSelectCustomer(activeCustomerId);
					}}
				>
					Test Login
				</button>
			</main>
		);
	};

	const loading = () => {
		return <div>Loading</div>;
	};

	if (trips.length > 0 && agency.length > 0) {
		return loaded();
	} else {
		return loading();
	}
};
export default Home;