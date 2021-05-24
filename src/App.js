import "./App.css";
import { Switch, Route } from "react-router-dom";
import AgencyProfile from "./pages/AgencyProfile";
import Booking from "./pages/Booking";
import CustomerProfile from "./pages/CustomerProfile";
import Home from "./pages/Home";
import PopularTrips from "./pages/PopularTrips";
import Trip from "./pages/Trip";

function App() {
	return (
		<div className="App">
			
			{/* <h1>hello world App</h1> */}
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/agencies/:agencyName">
					<AgencyProfile />
				</Route>
        <Route path="/users/:userName">
          <CustomerProfile />
        </Route>
        <Route path="/trips">
          <PopularTrips />
        </Route>
        <Route path="/trips/:trip">
          <Trip />
        </Route>
        <Route path="/booking">
          <Booking />
        </Route>
			</Switch>
		</div>
	);
}

export default App;
