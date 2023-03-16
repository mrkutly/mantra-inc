import {
  relationship,
  text,
  timestamp,
  integer,
} from '@keystone-6/core/fields';
import { Envar } from '../environment';
import { Env } from '../types';

import { groupSelect } from './helpers/fields';
import { urlMatch } from './helpers/matchers';
import { readonlyList } from './helpers/readonlyList';

export const CollaboratorRoleSchema = readonlyList({
  fields: {
    title: text({ validation: { isRequired: true } })
  }
})

export const CollaboratorSchema = readonlyList({
  fields: {
    name: text({ validation: { isRequired: true } }),
    role: relationship({ ref: 'CollaboratorRole', many: false }),
  }
})

export const InstrumentationSchema = readonlyList({
  fields: {
    instruments: text({ validation: { isRequired: true }, }),
  },
  ui: {
    labelField: 'instruments'
  }
})

export const ProgramSchema = readonlyList({
  fields: {
    createdAt: timestamp({ isOrderable: true, db: { map: 'created_at' }, defaultValue: { kind: 'now' } }),
    group: groupSelect,
    title: text({ validation: { isRequired: true } }),
    durationInMinutes: integer(),
    instrumentations: relationship({ ref: 'Instrumentation', many: true }),
    description: text({ validation: { isRequired: true } }),
    collaborators: relationship({ ref: 'Collaborator', many: true }),
    link: text({
      validation: {
        match: Envar.nodeEnv === Env.production ? urlMatch : undefined,
      }
    }),
  },
})