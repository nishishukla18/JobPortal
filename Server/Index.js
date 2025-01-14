import express from 'express'
import './Config/instrument.js'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './Config/db.js'
import * as Sentry from "@sentry/node";
import { clerkWebHooks } from './Controllers/WebHooks.js'

const app = express()

//Connect to database
const startServer = async () => {
  await connectDB()

  //Middlewares
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  //Routes
  app.get('/', (req, res) => res.send('API Working'))
  app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
  });
  app.post('/webhooks',clerkWebHooks)
  //Port
  const PORT = process.env.PORT || 5000
  Sentry.setupExpressErrorHandler(app)
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}

startServer()