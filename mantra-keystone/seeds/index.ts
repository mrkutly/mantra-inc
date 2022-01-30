import { BaseKeystoneTypeInfo, KeystoneContext } from "@keystone-6/core/types";
import { albumSeeds } from "./data/albums";
import { articleSeeds } from "./data/articles";

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

export const seedDb = async (context: KeystoneContext<BaseKeystoneTypeInfo>) => {
  await Promise.all([
    seedAlbums(context),
    seedArticles(context),
  ])
}