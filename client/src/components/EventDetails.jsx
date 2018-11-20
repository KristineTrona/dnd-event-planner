import React from "react"

export const EventDetails = ({event, users}) =>{
  return (
    <div id="eventDetails">
      <div className="container">
        <h2>{event.title}</h2>
        <div className="row">
          <div className="col-md-3">
            <img src={event.image} className="img-fluid" alt="artistic visualisation of the event"/>
          </div>
          <div className="col-md-6">
          </div>
          <div className="col-md-3">
          {event.time}
          {event.date}
          {event.place}
          { event.players && users &&
            event.players.map(player => player.id).find(id => id === users.id )}
          </div>
        </div>
      </div>
    </div>
  )
}