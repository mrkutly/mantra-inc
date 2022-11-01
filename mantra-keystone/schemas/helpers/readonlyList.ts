import { list } from '@keystone-6/core';

const isLoggedIn = ({ session }: { session: any }) => !!session?.data;

type First<T extends unknown[]> = T extends [infer U, ...any] ? U : T

export const readonlyList = (opts: Omit<First<Parameters<typeof list>>, 'access'>) => {
  const access = {
    operation: {
      query: () => true,
      create: isLoggedIn,
      update: isLoggedIn,
      delete: isLoggedIn,
    }
  }

  return list({
    ...opts,
    access,
  })
}