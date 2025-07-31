import express, { type Application } from 'express'
import path from 'path'
import cors from 'cors'
import conn from './config/db'

const app: Application = express()

