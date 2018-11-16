import React, {Component} from 'react'
import {connect} from 'react-redux'
import {userId} from '../jwt'
import {EventDetails} from './EventDetails'
import {getUsers} from '../actions/users'
import {getEvents} from '../actions/events'

class EventDetailsContainer extends Component{

  componentDidMount(){
    if (this.props.authenticated) {
      if (this.props.users === null)
        this.props.getUsers()
    }
    if (this.props.events.length === 0)
      this.props.getEvents()
  }

  render(){
    return (
      <EventDetails/>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    events: state.events,
    authenticated: state.currentUser !== null,
    users: state.users,
    userId: state.currentUser && userId(state.currentUser.jwt)
  }
}

const mapDispatchToProps = {
  getUsers,
  getEvents
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailsContainer)