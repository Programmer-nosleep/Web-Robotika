import moongose, { Schema, Document, model } from "mongoose";

interface IPost extends Document {
  title: string
  content: string
  role: 'admin' | 'user'
  createAt: Date
  updatedAt: Date
}

const PostSchema: Schema = new Schema<IPost>(
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      // default: 'user'
    }
  }
)

export const Post = model<IPost>('admin', PostSchema)