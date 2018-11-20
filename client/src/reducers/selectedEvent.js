import {SELECT_EVENT} from '../actions/events'

export default function (state = {}, action={}){
  switch (action.type){
    case SELECT_EVENT:
      return {...state = action.payload}
    default:
      return state
  }
}