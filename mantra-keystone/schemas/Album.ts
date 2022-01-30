import { list } from '@keystone-6/core';

import {
  text,
  timestamp,
  select,
} from '@keystone-6/core/fields';

import { AlbumHost, Group } from '../types';

export const AlbumSchema = list({
  fields: {
    createdAt: timestamp({ isOrderable: true, db: { map: 'created_at' }, defaultValue: { kind: 'now' } }),
    group: select({
      validation: { isRequired: true },
      isFilterable: true,
      isIndexed: true,
      options: [{
        value: Group.Mantra,
        label: 'Mantra',
      }, {
        value: Group.Recap,
        label: 'Recap',
      }, {
        value: Group.MantraYouth,
        label: 'Mantra Youth'
      }]
    }),
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
        match: {
          regex: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
          explanation: 'Must be a valid url',
        }
      }
    }),
    link: text({
      validation: {
        isRequired: true,
        match: {
          regex: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
          explanation: 'Must be a valid url',
        }
      }
    }),
  }
})