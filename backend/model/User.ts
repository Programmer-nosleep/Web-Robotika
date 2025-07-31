import mongoose, { Document, Schema, Types, model } from "mongoose";
import { v4 as uudiv4 } from 'uuid'

interface IUser extends Document {
  _id: Types.ObjectId
  name: string
  email: string
  password: string
  role: 'admin' | 'user'
  createAt: Date
  updatedAt: Date
}

const UserSchema: Schema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      default: uudiv4,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user'
    }, 
  },
  {
    timestamps: true,
  }
)

export const  User = model<IUser>('User', UserSchema); 
