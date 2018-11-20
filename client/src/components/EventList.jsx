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
                { event.image !== null &&
                  <img className="img-fluid card-img-top" src={event.image} alt="artistic visualization of the game"/>
                }
                <div className="card-body">
                  <h4 className="card-title">{event.title}</h4>
                  <p className="card-text">{event.description}</p>
                  <hr/>
                  <div className="event-time-place">
                    <div>
                      <strong> <i className="fas fa-users"></i> Players:</strong> {event.players.length}
                    </div>
                    <div>
                      <strong> <i className="fas fa-calendar-alt"></i> Date:</strong> {Moment(event.date).format('MMM Do YYYY')}
                    </div>
                    <div>
                      <strong> <i className="fas fa-clock"></i> Time:</strong> {event.time}
                    </div>
                    <div>
                      <strong> <i className="fas fa-map-marker-alt"></i> Place:</strong> {event.place}
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
