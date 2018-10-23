import EventEntity from './entity'
import {Controller, Get} from 'routing-controllers'

@Controller()
export default class EventController {

  @Get('/events')
  async allEvents() {
    const events =  await EventEntity.find()
    return { events }
  }

}
