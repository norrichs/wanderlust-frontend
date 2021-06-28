import "./App.css";
import { Switch, Route, useHistory } from "react-router-dom";
import React, { useEffect, useState ,createContext} from "react";
import AgencyProfile from "./pages/AgencyProfile";
import Booking from "./pages/Booking";
import CustomerProfile from "./pages/CustomerProfile";
import Home from "./pages/Home";
// import PopularTrips from "./pages/PopularTrips";
import Trip from "./pages/Trip";
import Login from "./pages/Login";
import SignUp from "./pages/signup";
import HeaderLogin from './pages/headerlogin'

export const GlobalCtx = createContext(null)
function App() {
	/// STATE VARIABLES ///
	const url = "https://seir329-wanderlust.herokuapp.com"
	const [activeCustomerId, setActiveCustomerId] = useState(null);
	const [bookingToAdd, setBookingToAdd] = useState(null);
	const [gState,setGState] = useState({url:url});

	let history = useHistory();
	/// DEV VARIABLES ///

	
	const devUserId = "60da4b6c790adc00156ff5e5"; // ben's dev id.  Comment out in other dev environment

	/// OTHER VARIABLES ///

	/// HANDLER FUNCTIONS ///
	const handleSelectCustomer = (_id) => {
		setActiveCustomerId(_id);
		history.push("/users/" + _id);
	};

	const handleAddBooking = (_id) => {
		setBookingToAdd(_id);
		history.push("/booking");
	};

	/// OTHER FUNCTIONS ///


	useEffect(() => {
		setActiveCustomerId(devUserId); // TODO change this to get active user ID from login
	}, []);

	return (
		<GlobalCtx.Provider value={{gState,setGState}}>
		<div className="App">
		<Switch>
				<Route exact path="/">
					<Home
						handleSelectCustomer={handleSelectCustomer}
						activeCustomerId={activeCustomerId}
						url={url}
					/>
				</Route>
				<Route path="/agency/:_id">
					<AgencyProfile url={url}
					activeCustomerId={activeCustomerId} />
				</Route>
				<Route path="/users/:_id">
					<CustomerProfile
						url={url}
						activeCustomerId={activeCustomerId}
						handleAddBooking={handleAddBooking}
					/>
				</Route>
				{/* <Route path="/trips">
					<PopularTrips activeCustomerId={activeCustomerId} />
				</Route> */}
				<Route path='/trips/:id'
					render={(routerProps)=> <Trip {...routerProps}/>}
				/>
				<Route path="/booking">
					<Booking
						bookingToAdd={bookingToAdd}
						activeCustomerId={activeCustomerId}
					/>
				</Route>
				{/* <Route exact path="/">
					<HeaderLogin/>
				</Route>
				<Route path="/login" render={(rp)=><Login {...rp}/> }/>
				<Route path="/signup" render={(rp)=><SignUp {...rp}/> }/> */}
			</Switch>
		</div>
		</GlobalCtx.Provider>
	);
}

export default App;

