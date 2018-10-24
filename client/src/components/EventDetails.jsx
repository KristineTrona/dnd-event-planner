import React from "react"
// const moment = require("moment")

export const EventDetails = (props) =>{
  return (
    <div className="event-list-wrapper">
      {props.events.map(event => 
        <div className = "event-info" key={event.id}>
          <img className="event-image" src={event.image} alt="artistic visualization of the game"/>
          <div>
            <h4>{event.title}</h4>
            {event.description}
          </div>
          <div className="event-time-place">
            Date: {event.date} <br/>
            Time: {event.time} <br/>
            Place: {event.place}
          </div>
        </div>)}
    </div>
  )
}