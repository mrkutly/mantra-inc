import * as dotenv from 'dotenv'
import { Env } from './types';

dotenv.config();

export const Environment = {
  databaseUrl: process.env.DATABASE_URL,
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY!,
  cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET!,
  cloudinaryApiFolder: process.env.CLOUDINARY_API_FOLDER!,
  nodeEnv: process.env.NODE_ENV as Env ?? Env.development,
} as const