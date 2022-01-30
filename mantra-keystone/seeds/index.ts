import { BaseKeystoneTypeInfo, KeystoneContext } from "@keystone-6/core/types";
import { chain } from 'lodash';
import { Group } from "../types";
import { albumSeeds } from "./data/albums";
import { articleSeeds } from "./data/articles";
import { concertSeeds } from "./data/concerts";
import { locationSeeds } from "./data/locations";
import { pieceSeeds } from "./data/pieces";
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

const seedLocations = async (context: KeystoneContext<BaseKeystoneTypeInfo>) => {
  const locations = await context.db.Location.findMany()
  if (locations.length === 0) {
    await context.db.Location.createMany({ data: locationSeeds })
  }
}

const seedPieces = async (context: KeystoneContext<BaseKeystoneTypeInfo>) => {
  const pieces = await context.db.Piece.findMany()
  if (pieces.length === 0) {
    await context.db.Piece.createMany({ data: pieceSeeds })
  }
}


const getProgramPieces = async (context: KeystoneContext<BaseKeystoneTypeInfo>, program: any[]) => {
  const promises = program.map(
    async (p) => {
      const [piece] = await context.db.Piece.findMany({
        where: {
          OR: [
            { title: { equals: p.title }, composer: { equals: p.composer } },
            { description: { equals: p.description } }
          ]
        }
      })
      return { id: piece.id }
    }
  )
  return Promise.all(promises)
}

const seedConcertYear = (context: KeystoneContext<BaseKeystoneTypeInfo>, group: string) => async ({ year, concerts }: { year: string, concerts: any[] }) => {
  Promise.all(concerts.map(async ({ date, location, program }) => {
    const concertDate = new Date(`${date}, ${year}`).toISOString()
    const pieces = await getProgramPieces(context, program)
    const [concertLocation] = await context.db.Location.findMany({ where: { venue: { equals: location.venue } } })
    const locationInput = concertLocation ? { connect: { id: concertLocation.id } } : { create: location }
    context.db.Concert.createOne({ data: { group, date: concertDate, program: { connect: pieces }, location: locationInput } })
  }))
}

const seedConcerts = async (context: KeystoneContext<BaseKeystoneTypeInfo>) => {
  const concerts = await context.db.Concert.findMany()
  if (concerts.length) return

  return chain(concertSeeds)
    .map((years, group) => years.map(seedConcertYear(context, group)))
    .flattenDeep()
    .value()
}


export const seedDb = async (context: KeystoneContext<BaseKeystoneTypeInfo>) => {
  await Promise.all([
    seedAlbums(context),
    seedArticles(context),
    seedVideos(context),
    seedTeams(context),
    seedLocations(context),
    seedPieces(context),
  ])
  await seedConcerts(context)
}