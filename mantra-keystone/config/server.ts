import { BaseKeystoneTypeInfo, ServerConfig } from "@keystone-6/core/types";
import { Envar } from "../environment";
import { Env } from "../types";

const PORT = Number(Envar.port ?? 3000)

export const ServConfig: Record<Env, ServerConfig<BaseKeystoneTypeInfo>> = {
  development: { port: 3000 },
  production: {
    cors: { origin: ['*'] },
    port: PORT
  }
}

