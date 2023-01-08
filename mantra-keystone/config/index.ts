import { Environment } from "../environment";
import { Env } from "../types";
import { CloudinaryConfig } from "./cloudinary";
import { DBConfig } from "./db";
import { GQLConfig } from "./graphql";
import { ServConfig } from "./server";

const configs = {
  [Env.development]: {
    cloudinary: CloudinaryConfig.development,
    db: DBConfig.development,
    server: ServConfig.development,
    graphql: GQLConfig.development,
  },
  [Env.production]: {
    cloudinary: CloudinaryConfig.production,
    db: DBConfig.production,
    server: ServConfig.production,
    graphql: GQLConfig.production,
  }
}

export const Config = configs[Environment.nodeEnv ?? Env.development] 