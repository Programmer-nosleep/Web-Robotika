import { Router, type RequestHandler } from 'express'

// Middleware
import { Protect } from '../middleware/AuthMiddleware'
import { Upload } from '../middleware/UploadMiddleware'

// Controllers
import { Login, Register } from '../controller/AuthController'


const router = Router()

interface RouteConfig {
  method: 'get' | 'post' | 'put' | 'delete'
  path: string
  protect?: RequestHandler
  handler: RequestHandler | RequestHandler[]
}

const combineHandler = (
  middlewares: RequestHandler[] = [],
  handler: RequestHandler
) : RequestHandler[] => [...middlewares, handler]

const routes: RouteConfig[] = [
  {
    method: 'post',
    path: '/login',
    handler: Login,
  }
  {
    method: 'post',
    path: '/register',
    handler: Register
  }
]

routes.forEach((
  { 
    method,
    path,
    protect,
    handler    
  }
) => {
  if (Array.isArray(handler)) {
    if (protect) {
      router[method](path, protect, ...handler)
    } else {
      router[method](path, ...handler)
    }
  } else {
    if (protect) {
      router[method](path, protect, handler)
    } else {
      router[method](path, handler)
    }
  }
}) 

export default router