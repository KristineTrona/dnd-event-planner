import * as request from 'superagent'
import {baseUrl} from '../constants'

export const LOAD_EVENTS = 'LOAD_EVENTS'

const loadEvents = (events) => ({
  type: LOAD_EVENTS,
  payload: events.events
})

export const getEvents = () => (dispatch) => {
  request
  .get(`${baseUrl}/events`)
  .then(result => dispatch(loadEvents(result.body)))
  .catch(err => console.log(err))
}