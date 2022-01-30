import { BaseKeystoneTypeInfo, DatabaseConfig } from "@keystone-6/core/types";
import { seedDb } from "../seeds";
import { Env } from "../types";

export const DBConfig: Record<Env, DatabaseConfig<BaseKeystoneTypeInfo>> = {
  development: {
    provider: 'postgresql' as const,
    url: 'postgres://postgres:postgres@localhost:5432/mantra',
    enableLogging: true,
    useMigrations: true,
    onConnect: seedDb,
    idField: { kind: 'uuid' as const },
  },
  production: {
    provider: 'postgresql' as const,
    url: process.env.DATABASE_URL!,
    enableLogging: true,
    useMigrations: true,
    onConnect: seedDb,
    idField: { kind: 'uuid' as const },
  },
}
