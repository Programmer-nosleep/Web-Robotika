import express, { type Application } from 'express'
import path from 'path'
import cors from 'cors'
import conn from './config/db'

import AuthRouter from './routes/AuthRoutes'

const app: Application = express()

app.use(
  cors({
    origin: process.env.CLIENT_URL || '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
)

app.use(express.json())

conn()

const routes: [string, express.Router][] = [
  ['/api/auth', AuthRouter],
]

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

routes.forEach(([path, handler]) => {
  app.use(path, handler)
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on url: http://localhost:${PORT}`)
})