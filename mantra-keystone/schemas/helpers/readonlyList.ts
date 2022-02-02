import { list, ListConfig } from '@keystone-6/core';
import { BaseFields, BaseListTypeInfo } from '@keystone-6/core/types';

const isLoggedIn = ({ session }: { session: any }) => session?.data;

export const readonlyList = (opts: ListConfig<BaseListTypeInfo, BaseFields<BaseListTypeInfo>>) => {
  const access = {
    operation: {
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