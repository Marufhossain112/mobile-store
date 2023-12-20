import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'
import ApiError from './errors/ApiError'
const app: Application = express()
// use cors
app.use(cors())
// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1/users', UserRoutes)

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World!')
  next('I am errrorrr')
  // throw new ApiError(400, 'I am groot')
})
app.use(globalErrorHandler)
export default app
