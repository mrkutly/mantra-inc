import { document } from '@keystone-6/fields-document';
import { groupSelect } from './helpers/fields';
import { readonlyList } from './helpers/readonlyList';

export const MissionStatementSchema = readonlyList({
  fields: {
    content: document({
      formatting: true,
      dividers: true,
      links: true,
    }),
    group: groupSelect,
  }
})