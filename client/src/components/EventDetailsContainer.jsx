import React, {Component} from 'react'
import {connect} from 'react-redux'
import {EventDetails} from './EventDetails'
import {getUsers} from '../actions/users'
import {getEvents, getEventDetails} from '../actions/events'

class EventDetailsContainer extends Component{

  componentDidMount(){
    if (this.props.authenticated) {
      if (this.props.users === null)
        this.props.getUsers()
    }
    if (this.props.events.length === 0)
      this.props.getEvents()

    this.props.getEventDetails(this.props.match.params.id)
  }

  render(){
    return (
      <EventDetails event={this.props.selectedEvent} users={this.props.users}/>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    events: state.events,
    authenticated: state.currentUser !== null,
    users: state.users,
    selectedEvent: state.selectedEvent
  }
}

const mapDispatchToProps = {
  getUsers,
  getEvents,
  getEventDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailsContainer)