import { Env } from "./types";

require('dotenv').config();

export const Envar = {
  databaseUrl: process.env.DATABASE_URL,
  nodeEnv: process.env.NODE_ENV as Env,
  port: 3000,
  sessionSecret: process.env.SESSION_SECRET,
}