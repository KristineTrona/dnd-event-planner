import {LOAD_EVENTS} from '../actions/events'

export default function (state = [], action={}){
  switch (action.type){
    case LOAD_EVENTS:
      return [...state = action.payload]
    default:
      return state
  }
}