import * as request from 'superagent'
import {baseUrl} from '../constants'

export const LOAD_EVENTS = 'LOAD_EVENTS'
export const SELECT_EVENT = 'SELECT_EVENT'

const loadEvents = (events) => ({
  type: LOAD_EVENTS,
  payload: events.events
})

const selectEvent = (event) => ({
  type: SELECT_EVENT,
  payload: event
})

export const getEvents = () => (dispatch) => {
  request
  .get(`${baseUrl}/events`)
  .then(result => dispatch(loadEvents(result.body)))
  .catch(err => console.log(err))
}

export const getEventDetails = (eventId) => (dispatch) => {
  request
    .get(`${baseUrl}/events/${eventId}`)
    .then(result => dispatch(selectEvent(result.body)))
    .catch(err => console.error(err))
}