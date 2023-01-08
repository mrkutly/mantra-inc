import { AlbumSchema } from './schemas/Album';
import { ArticleSchema } from './schemas/Article';
import { ConcertSchema, LocationSchema, PieceSchema } from './schemas/Concert';
import { TeamMemberRoleSchema, TeamMemberSchema, TeamSchema } from './schemas/Team';
import { UserSchema } from './schemas/User';
import { VideoSchema } from './schemas/Video';
import { MissionStatementSchema } from './schemas/MissionStatement'
import { ProgramSchema, InstrumentationSchema, CollaboratorRoleSchema, CollaboratorSchema } from './schemas/Program';
import { ImageSchema } from './schemas/Image';

export const lists = {
  Image: ImageSchema,
  User: UserSchema,
  Album: AlbumSchema,
  Article: ArticleSchema,
  Video: VideoSchema,
  Team: TeamSchema,
  TeamMember: TeamMemberSchema,
  TeamMemberRole: TeamMemberRoleSchema,
  Concert: ConcertSchema,
  Piece: PieceSchema,
  Location: LocationSchema,
  MissionStatement: MissionStatementSchema,
  Program: ProgramSchema,
  Instrumentation: InstrumentationSchema,
  CollaboratorRole: CollaboratorRoleSchema,
  Collaborator: CollaboratorSchema,
};
