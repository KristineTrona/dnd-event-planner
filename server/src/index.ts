import setupDb from './db'
import {createKoaServer, Action, BadRequestError} from "routing-controllers"
import { verify } from './jwt';
import EventController from './events/controller'
import UserController from './users/controller';
import LoginController from './logins/controller'

const port = process.env.PORT || 4000

const app = createKoaServer({
  cors: true,
   controllers: [
     EventController,
     UserController,
     LoginController
   ],
   authorizationChecker: (action: Action) => {
    const header: string = action.request.headers.authorization

    if(header && header.startsWith('Bearer ')){
      const [ , token ] = header.split(' ')
      
      try {
       return !!(token && verify(token))
     }
     catch (e) {
       throw new BadRequestError(e)
     }
    }
      return false
  }
})

setupDb()
  .then(_ =>
    app.listen(4000, () => console.log(`Listening on port ${port}`))
  )
  .catch(err => console.error(err))