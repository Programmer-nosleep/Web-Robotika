import mongoose from 'mongoose'

const conn = async (): Promise<void> => {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error('mongodb uri is not defined.')
    }

    await mongoose.connect(process.env.DATABASE_URL)    
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(`server an mongodb is error. cannot have access for smth? checking again for your connection db.`)
    }
    process.exit(1)
  }
}

export default conn