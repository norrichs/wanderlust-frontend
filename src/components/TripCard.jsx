import React from 'react'
import '../dev/dummyStyle.css'


const TripCard = (props) => {
	console.log(props.trip)
	return (
		<div className='trip-card'>
			<div>{props.trip.name}</div>
			<div><span>{props.trip.location}</span><span>{`${props.trip.dateStart} - ${props.trip.dateEnd}`}</span></div>
		</div>
	)
}
export default TripCard