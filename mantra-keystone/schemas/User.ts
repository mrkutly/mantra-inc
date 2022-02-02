import {
  text,
  password,
} from '@keystone-6/core/fields';
import { readonlyList } from './helpers/readonlyList';

export const UserSchema = readonlyList({
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
