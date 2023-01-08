import { document } from '@keystone-6/fields-document';
import { componentBlocks } from '../component-blocks';
import { groupSelect } from './helpers/fields';
import { readonlyList } from './helpers/readonlyList';

export const MissionStatementSchema = readonlyList({
  fields: {
    content: document({
      formatting: true,
      dividers: true,
      links: true,
      componentBlocks,
      ui: {
        views: './component-blocks',
      }
    }),
    group: groupSelect,
  }
})