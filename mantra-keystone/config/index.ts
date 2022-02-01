import { Env } from "../types";
import { DBConfig } from "./db";
import { ServConfig } from "./server";


const configs = {
  [Env.development]: {
    db: DBConfig.development,
    server: ServConfig.development,
  },
  [Env.production]: {
    db: DBConfig.production,
    server: ServConfig.production,
  }
}

export const Config = configs[process.env.NODE_ENV as Env ?? Env.development] 