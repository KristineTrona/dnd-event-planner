import React from 'react'

export const EventDetails = (props) =>{
  return (
    <div className="event-list-wrapper">
      {props.events.map(event => 
        <div className = "event-info">
          <img className="event-image" src={event.image} alt="game-image"/>
          {event.title}
        </div>)}
    </div>
  )
}