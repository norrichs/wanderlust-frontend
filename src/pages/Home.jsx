import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TripCard from "../components/TripCard";
import AgencyCard from "../components/AgencyCard"
import Carousel from "../components/Carousel";

// TODO remove following 2 imports
import dummyDataTrips from "../dev/dummyDataTrips";
import dummyDataAgencies from "../dev/dummyDataAgencies";

const Home = (props) => {
	// STATE variables
	const [tripList, setTripList] = useState([]);
	const [agencyList, setAgencyList] = useState([]);

	// Data INDEX functions
	// TODO change to production versions when data sources are online and populated
	const getTrips = () => {
		setTripList([...dummyDataTrips]);
	};
	const getAgencies = () => {
		setAgencyList([...dummyDataAgencies]);
	};


	// Initialize Data on load
	useEffect(() => {
		getTrips();
		getAgencies();
	}, []);

	const loadedTrips = () => {
		return tripList.map((trip, i) => {
			console.log("loadedTrips", trip);
			return <TripCard trip={trip} key={i} />;
		});
	};
	const loadedAgencies = () => {
		return agencyList.map((agency, i) => {
			console.log("loadedAgencies", agency);
			return <AgencyCard agency={agency} key={i} />
		})
	}
	const loading = () => {
		return <div>Loading</div>;
	};
	return (
		<>
			<div>hello world Home</div>
			<Carousel id="trip-carousel">
				{tripList.length > 0 ? loadedTrips() : loading()}
			</Carousel>
			<Carousel id="agency-carousel">
				{tripList.length > 0 ? loadedAgencies() : loading()}
			</Carousel>
		</>
	);
};
export default Home;
