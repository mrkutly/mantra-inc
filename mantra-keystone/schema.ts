import { Lists } from '.keystone/types';
import { AlbumSchema } from './schemas/Album';
import { ArticleSchema } from './schemas/Article';
import { ConcertSchema, LocationSchema, PieceSchema } from './schemas/Concert';
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
  Concert: ConcertSchema,
  Piece: PieceSchema,
  Location: LocationSchema
};
