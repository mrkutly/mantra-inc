import {
  relationship,
  text,
  timestamp,
} from '@keystone-6/core/fields';
import { readonlyList } from './helpers/readonlyList';

export const TeamMemberRoleSchema = readonlyList({
  fields: {
    title: text({ validation: { isRequired: true } }),
  },
})

export const TeamMemberSchema = readonlyList({
  fields: {
    name: text({ validation: { isRequired: true } }),
    team: relationship({ ref: 'Team.members', many: false }),
    roles: relationship({ ref: 'TeamMemberRole', many: true })
  },
})

export const TeamSchema = readonlyList({
  fields: {
    createdAt: timestamp({ isOrderable: true, db: { map: 'created_at' }, defaultValue: { kind: 'now' } }),
    title: text({ validation: { isRequired: true } }),
    members: relationship({ ref: 'TeamMember.team', many: true })
  },
})