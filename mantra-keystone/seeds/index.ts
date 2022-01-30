import { BaseKeystoneTypeInfo, KeystoneContext } from "@keystone-6/core/types";
import { albumsSeeds } from "./data/albums";

const seedAlbums = async (context: KeystoneContext<BaseKeystoneTypeInfo>) => {
  const albums = await context.db.Album.findMany()
  if (albums.length === 0) {
    await context.db.Album.createMany({ data: albumsSeeds })
  }
}

export const seedDb = async (context: KeystoneContext<BaseKeystoneTypeInfo>) => {
  await Promise.all([
    seedAlbums(context),
  ])
}