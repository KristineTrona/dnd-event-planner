import Game from './entity'
import {Controller, Get} from 'routing-controllers'

@Controller()
export default class MainController {

  @Get('/games')
  allGames() {
    const games = Game.find()
    return { games }
  }

}
