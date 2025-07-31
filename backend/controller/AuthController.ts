import type { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { generateToken } from '../helper/token'

import { User } from '../model/User'

export const Login = async (req: Request, res: Response) : Promise<void> => {
  const { email, password } = req.body

  try {
   const user = await User.findOne({ email })
   
   if (!user || !user.password) {
    res.status(401).json({ message: 'invalid email or password' })
    return
   }

   const isMatch = await bcrypt.compare(password, user.password)
   if (!isMatch) {
    res.status(401).json({ message: 'invalid email or password' })
    return
   }

   const token = generateToken({ _id: user.id })

   res.status(200).json({ 
    message: 'Login Successfully!',
    user: {
      _id: user.id,
      name: user.name,
      password: user.password,
      role: user.role,
    },
    token
   })
  } catch (error: unknown) {
    if (error instanceof Error) 
      res.status(500).json({ message: 'server an error ', error: error.message })
  }
}

export const Register = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password } = req.body

  try {
    const exist = await User.findOne({ email })

    if (exist)
      res.status(400).json({ message: 'user already exists.' })

    let role: string = 'member'

    const adminSecretHeader = req.headers['x-admin-secret']
    const expectedAdminSecret = process.env.ADMIN_SECRET

    if (adminSecretHeader === expectedAdminSecret)
      role = 'admin'

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    const newUser = await User.create({
      name,
      email,
      password,
      role
    })

    const token = generateToken({ _id: newUser.id })

    res.status(201).json({
      message: 'user registered successfully.',
      user: {
        _id: newUser.id,
        name: newUser.name,
        role: newUser.role,
        token: generateToken(newUser.id)
      },
      token,
    })
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'server an error ', error: error.message })
    } 
  }
}