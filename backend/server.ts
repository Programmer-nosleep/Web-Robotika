import express, { type Application } from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import conn from './config/db';

import AuthRouter from './routes/AuthRoutes';

dotenv.config();

const app: Application = express();

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(express.json());

// Static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
const routes: [string, express.Router][] = [['/api/auth', AuthRouter]];
routes.forEach(([routePath, handler]) => {
  app.use(routePath, handler);
});

// Start server only after DB connected
const PORT = process.env.PORT || 8080;

async function startServer() {
  try {
    await conn();
    app.listen(PORT, () => {
      console.log(`✅ Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to connect to the database:', error);
    process.exit(1);
  }
}

startServer();
