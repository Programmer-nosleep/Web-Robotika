import multer, { type FileFilterCallback } from 'multer'
import path from 'path'
import fs from 'fs'
import type { Request, Response } from 'express'

const uploadDir: string = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir))
  fs.mkdirSync(uploadDir, { recursive: true })

const storage = multer.diskStorage({
  destination: function ( req, file, cb) {
    cb(null, uploadDir)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + " - " + Math.round(Math.random() * 1e9)
    cb(null, uniqueSuffix + path.extname(file.originalname))
  }
})

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback,
) : void => {
  const allowedTypes = ['images/jpeg', 'image/png', 'image/jpg'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true)
  }

  cb(new Error('only .jpeg .jpg and .png formats are allowed'))
}

export const Upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 4 * 1024 * 1024
  }
})