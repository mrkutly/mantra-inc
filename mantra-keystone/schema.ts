import { Lists } from '.keystone/types';
import { AlbumSchema } from './schemas/Album';
import { ArticleSchema } from './schemas/Article';
import { UserSchema } from './schemas/User';

export const lists: Lists = {
  User: UserSchema,
  Album: AlbumSchema,
  Article: ArticleSchema,
};
