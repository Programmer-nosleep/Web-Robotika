import crypto from 'crypto'
import type { Request } from 'express'

const CSRF_TOKEN_SECRET: string = process.env.CSRF_TOKEN_SECRET || 'defaut_secret'
