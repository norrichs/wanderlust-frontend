import React, {useState} from 'react'
import DrawerToggleButton from "../components/buttons/DrawerToggleButton"
// import "../components/styles/Style.css";

const Header = props => (

	<header className="Header">
		<nav className="Header__navigation">
			<div className="Header__toggle-button">
				<DrawerToggleButton click={props.drawerClickHandler} />
			</div>
			<div className="Header__logo"><img src="https://bn1304files.storage.live.com/y4mpKzW6-2QNM2uI6ld0jlkdSsFgdtuiJZt9VayonGVsHIfgjQdE16f9-unyuwJ5nDVX5b1lqEI7X8zkdSoBDNcOCl8XolsCzKaHXGp1YLBqdTDlkaY5M7CX4pVbGuVUUSQiX8gcv6PBi3_hEMqw1tSYuELEAIour4eVbCYmG_wJMjziw9UF0gm4bzg88TOJnfU?width=250&height=250&cropmode=none" width="250" height="250" />
			</div>
			<div className="spacer" />
			
			<div className="Header__navigation-items">
				<ul>
					<li> <a href="/"></a>Home</li>
					{/* <li> <a href="/agencies/:agencyName"></a>Agency Profile</li>
					<li> <a href="/"></a>Booking</li>
					<li> <a href="/"></a>Agency Profile</li>
					<li> <a href="/"></a>Customer Profile</li>
					<li> <a href="/"></a>Popuar Trips</li> */}
					
				</ul>
			</div>

			
		</nav>
	</header>
)
export default Header;
