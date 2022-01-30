import { Lists } from '.keystone/types';
import { AlbumSchema } from './schemas/Album';
import { ArticleSchema } from './schemas/Article';
import { TeamMemberRoleSchema, TeamMemberSchema, TeamSchema } from './schemas/Team';
import { UserSchema } from './schemas/User';
import { VideoSchema } from './schemas/Video';

export const lists: Lists = {
  User: UserSchema,
  Album: AlbumSchema,
  Article: ArticleSchema,
  Video: VideoSchema,
  Team: TeamSchema,
  TeamMember: TeamMemberSchema,
  TeamMemberRole: TeamMemberRoleSchema,
};
