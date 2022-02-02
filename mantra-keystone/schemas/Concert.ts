import {
  relationship,
  text,
  timestamp,
} from '@keystone-6/core/fields';

import { groupSelect } from './helpers/fields';
import { readonlyList } from './helpers/readonlyList';

export const LocationSchema = readonlyList({
  fields: {
    venue: text(),
    city: text(),
    support: text()
  },
  ui: {
    labelField: 'venue',
    listView: {
      initialColumns: ['venue', 'city']
    }
  }
})

export const PieceSchema = readonlyList({
  fields: {
    composer: text(),
    title: text(),
    description: text(),
    support: text()
  },
  ui: {
    listView: {
      initialColumns: ['title', 'composer', 'description']
    }
  }
})

export const ConcertSchema = readonlyList({
  fields: {
    createdAt: timestamp({ isOrderable: true, db: { map: 'created_at' }, defaultValue: { kind: 'now' } }),
    dateFrom: timestamp({ isOrderable: true, isFilterable: true, isIndexed: true }),
    dateTo: timestamp({ isOrderable: true, isFilterable: true, isIndexed: true }),
    group: groupSelect,
    location: relationship({ ref: 'Location', many: false }),
    program: relationship({ ref: 'Piece', many: true }),
  },
  ui: {
    listView: {
      initialColumns: ['dateFrom', 'dateTo', 'group', 'location', 'program'],
      initialSort: { field: 'dateFrom', direction: 'DESC' }
    }
  }
})