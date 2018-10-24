import React from "react"
import {Link} from 'react-router-dom'
const Moment = require('moment')

export const EventList = (props) =>{
  return (
    <div className="event-list-wrapper">
      {props.events.map(event => 
        <Link to={`/events/${event.id}`} style={{textDecoration: "none", color: "inherit"}} key={event.id}>
        <div className = "event-info">
          <img className="event-image" src={event.image} alt="artistic visualization of the game"/>
          <div className="event-title-description">
            <h4 className="event-title">{event.title}</h4>
            {event.description}
          </div>
          <div className="event-time-place">
            <div>
              <strong>Players:</strong> {event.players.length}
            </div>
            <div>
              <strong>Date:</strong> {Moment(event.date).format('MMM Do YYYY')}
            </div>
            <div>
              <strong>Time:</strong> {event.time}
            </div>
            <div>
              <strong>Place:</strong> {event.place}
            </div>
          </div>
        </div>
        </Link>)}
    </div>
  )
}