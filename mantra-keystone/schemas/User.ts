import { list } from '@keystone-6/core';

import {
  text,
  password,
} from '@keystone-6/core/fields';

export const UserSchema = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
      isFilterable: true,
    }),
    password: password({ validation: { isRequired: true } }),
  },
})
