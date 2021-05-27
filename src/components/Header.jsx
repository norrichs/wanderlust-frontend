import React, { useState } from "react";
import DrawerToggleButton from "../components/buttons/DrawerToggleButton";
import { Link } from "react-router-dom";
// import "../components/styles/Style.css";

const Header = (props) => (
	<header className="Header">
		<nav className="Header__navigation">
			<div className="Header__toggle-button">
				<DrawerToggleButton click={props.drawerClickHandler} />
			</div>
			<div className="Header__logo">
				<img
					src="https://bn1304files.storage.live.com/y4mpKzW6-2QNM2uI6ld0jlkdSsFgdtuiJZt9VayonGVsHIfgjQdE16f9-unyuwJ5nDVX5b1lqEI7X8zkdSoBDNcOCl8XolsCzKaHXGp1YLBqdTDlkaY5M7CX4pVbGuVUUSQiX8gcv6PBi3_hEMqw1tSYuELEAIour4eVbCYmG_wJMjziw9UF0gm4bzg88TOJnfU?width=250&height=250&cropmode=none"
					width="250"
					height="250"
				/>
			</div>
			<div className="spacer" />

			<div className="Header__navigation-items">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>

					<li>
						<Link to="/booking">Booking</Link>
					</li>

					<li>
						<Link to="/users/">Customer Profile</Link>
					</li>
					<li>
						<Link>Popular Trips</Link>
					</li>
					<li>
						<Link>Login</Link>
					</li>
				</ul>
			</div>
		</nav>
	</header>
);
export default Header;
