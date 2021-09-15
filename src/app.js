import express from 'express'
import './db/mongoose.js'
import ticketRouter from './router/ticketRouter.js'

// app config
const app = express()

// middleware: not allowed DELETE Method
app.use((req, res, next) => {
  if (req.method === 'DELETE') {
    return res.status(405).send('DELETE Method is not allowed!')
  }

  next()
})

// convert JSON incoming data from server to an object.
// Therefore, we can use it from req.body.
app.use(express.json())
app.use(ticketRouter)

export default app
