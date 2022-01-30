import { BaseKeystoneTypeInfo, KeystoneContext } from "@keystone-6/core/types";
import { albumSeeds } from "./data/albums";
import { articleSeeds } from "./data/articles";
import { teamSeeds } from "./data/teams";
import { videoSeeds } from "./data/videos";

const seedAlbums = async (context: KeystoneContext<BaseKeystoneTypeInfo>) => {
  const albums = await context.db.Album.findMany()
  if (albums.length === 0) {
    await context.db.Album.createMany({ data: albumSeeds })
  }
}

const seedArticles = async (context: KeystoneContext<BaseKeystoneTypeInfo>) => {
  const articles = await context.db.Article.findMany()
  if (articles.length === 0) {
    await context.db.Article.createMany({ data: articleSeeds })
  }
}

const seedVideos = async (context: KeystoneContext<BaseKeystoneTypeInfo>) => {
  const videos = await context.db.Video.findMany()
  if (videos.length === 0) {
    await context.db.Video.createMany({ data: videoSeeds })
  }
}

const seedTeams = async (context: KeystoneContext<BaseKeystoneTypeInfo>) => {
  const teams = await context.db.Team.findMany()
  if (teams.length === 0) {
    await context.db.Team.createMany({ data: teamSeeds })
  }
}

export const seedDb = async (context: KeystoneContext<BaseKeystoneTypeInfo>) => {
  await Promise.all([
    seedAlbums(context),
    seedArticles(context),
    seedVideos(context),
    seedTeams(context),
  ])
}