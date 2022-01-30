import { Lists } from '.keystone/types';
import { AlbumSchema } from './schemas/Album';
import { UserSchema } from './schemas/User';

export const lists: Lists = {
  User: UserSchema,
  Album: AlbumSchema
};
