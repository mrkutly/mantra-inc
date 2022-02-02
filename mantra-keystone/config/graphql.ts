import { GraphQLConfig } from "@keystone-6/core/types";
import { Env } from "../types";

export const GQLConfig: Record<Env, GraphQLConfig> = {
  [Env.development]: {},
  [Env.production]: {
    playground: true,
    apolloConfig: { introspection: true },
  }
}

