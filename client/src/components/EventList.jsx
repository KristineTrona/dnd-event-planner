import React from "react"
import {Link} from 'react-router-dom'
const Moment = require('moment')

export const EventList = (props) =>{
  return (
    <div id="eventList">
      <div className="container">
        <div className="row">
          {props.events.map(event => 
            <Link to={`/events/${event.id}`} className=" my-4 col-lg-4 col-md-6" style={{textDecoration: "none", color: "inherit"}} key={event.id}>
              <div className="card">
                <img className="img-fluid card-img-top" src={event.image} alt="artistic visualization of the game"/>
                <div className="card-body">
                  <h4 className="card-title">{event.title}</h4>
                  <p className="card-text">{event.description}</p>
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
              </div>
            </Link>)}
          </div>
      </div>
    </div>
  )
}
