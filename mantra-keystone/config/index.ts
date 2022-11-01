import { Env } from "../types";
import { DBConfig } from "./db";
import { GQLConfig } from "./graphql";
import { ServConfig } from "./server";


const configs = {
  [Env.development]: {
    db: DBConfig.development,
    server: ServConfig.development,
    graphql: GQLConfig.development,
  },
  [Env.production]: {
    db: DBConfig.production,
    server: ServConfig.production,
    graphql: GQLConfig.production,
  }
}

export const Config = configs[process.env.NODE_ENV as Env ?? Env.production] 