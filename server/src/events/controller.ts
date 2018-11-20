import {Event as EventEntity} from './entity'
import {Controller, Get, Param} from 'routing-controllers'

@Controller()
export default class EventController {

  @Get('/events')
  async allEvents() {
    const events =  await EventEntity.find()
    return { events }
  }

  @Get('/events/:id')
  getEvent(
      @Param('id') id: number
  ) {
      return EventEntity.findOne(id)
  }

}
