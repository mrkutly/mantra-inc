import {
  text,
  timestamp,
  select,
} from '@keystone-6/core/fields';

import { AlbumHost } from '../types';
import { groupSelect } from './helpers/fields';
import { urlMatch } from './helpers/matchers';
import { readonlyList } from './helpers/readonlyList';

export const AlbumSchema = readonlyList({
  fields: {
    createdAt: timestamp({ isOrderable: true, db: { map: 'created_at' }, defaultValue: { kind: 'now' } }),
    group: groupSelect,
    title: text({ validation: { isRequired: true } }),
    host: select({
      validation: { isRequired: true },
      options: [{
        value: AlbumHost.Bandcamp,
        label: 'Bandcamp',
      }, {
        value: AlbumHost.Spotify,
        label: 'Spotify'
      }, {
        value: AlbumHost.Apple,
        label: 'Apple Music'
      }]
    }),
    embed: text({
      validation: {
        isRequired: true,
        match: urlMatch,
      }
    }),
    link: text({
      validation: {
        isRequired: true,
        match: urlMatch,
      }
    }),
  }
})