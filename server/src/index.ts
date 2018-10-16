import setupDb from './db'
import {createKoaServer} from "routing-controllers"
import GameController from './games/controller'
import UserController from './users/controller';
import LoginController from './logins/controller'

const port = process.env.PORT || 4000

const app = createKoaServer({
  cors: true,
   controllers: [
     GameController,
     UserController,
     LoginController
   ]
})

setupDb()
  .then(_ =>
    app.listen(4000, () => console.log(`Listening on port ${port}`))
  )
  .catch(err => console.error(err))