import React, { useState } from "react";
import { Link } from "react-router-dom";

const CustomerProfile = (props) => {

	return (
		<main>
			<header>
				<button>Back</button>
				<h3>My Profile</h3>
				<button>Settings</button>
			</header>
			<section>
				<img src={props.customer.photo}/>
				
			</section>
			
		</main>
	);
};
export default CustomerProfile;
