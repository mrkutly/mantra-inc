import { Env } from "../types";
import { DBConfig } from "./db";

const configs = {
  [Env.development]: {
    db: DBConfig.development
  },
  [Env.production]: {
    db: DBConfig.production
  }
}

export const Config = configs[process.env.NODE_ENV as Env ?? Env.development] 