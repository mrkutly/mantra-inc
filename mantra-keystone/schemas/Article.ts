import {
  text,
  timestamp,
} from '@keystone-6/core/fields';

import { groupSelect } from './helpers/fields';
import { urlMatch } from './helpers/matchers';
import { readonlyList } from './helpers/readonlyList';

export const ArticleSchema = readonlyList({
  fields: {
    createdAt: timestamp({ isOrderable: true, db: { map: 'created_at' }, defaultValue: { kind: 'now' } }),
    group: groupSelect,
    title: text({ validation: { isRequired: true } }),
    publication: text({ validation: { isRequired: true } }),
    pullQuote: text({ validation: { isRequired: true }, db: { map: 'pull_quote' } }),
    author: text({ validation: { isRequired: true } }),
    link: text({
      validation: {
        isRequired: true,
        match: urlMatch,
      }
    }),
  },
})