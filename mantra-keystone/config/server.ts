import { BaseKeystoneTypeInfo, ServerConfig } from "@keystone-6/core/types";
import { Env } from "../types";

export const ServConfig: Record<Env, ServerConfig<BaseKeystoneTypeInfo>> = {
  development: {},
  production: {
    cors: { origin: ['*'] }
  },
}
