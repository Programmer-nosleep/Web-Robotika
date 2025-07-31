import type { Types } from "mongoose";
import jwt from "jsonwebtoken";

type GenerateTokenPayload = {
  _id: Types.ObjectId
}

export const generateToken = ({ _id }: GenerateTokenPayload): string => {
  const secret = process.env.SECRET_KEY

  if (!secret) 
    throw new Error("token is not define.");
    
  return jwt.sign({ _id }, secret, {
    expiresIn: '7d'
  })
}