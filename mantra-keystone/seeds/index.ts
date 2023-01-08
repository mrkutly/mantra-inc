import { BaseKeystoneTypeInfo, KeystoneContext, } from "@keystone-6/core/types";
import { chain } from 'lodash';
import { Group } from "../types";
import { albumSeeds } from "./data/albums";
import { articleSeeds } from "./data/articles";
import { concertSeeds } from "./data/concerts";
import { locationSeeds } from "./data/locations";
import { pieceSeeds } from "./data/pieces";
import { programSeeds } from './data/programs';
import { teamSeeds } from "./data/teams";
import { videoSeeds } from "./data/videos";

const seedCollection = <T>(collection: string, seeds: T[]) => async (context: KeystoneContext<BaseKeystoneTypeInfo>) => {
  const values = await context.db[collection].findMany()

  if (values.length === 0) {
    const datedSeeds = seeds.map((seed, idx) => {
      const createdAt = new Date(Date.now() - (idx * 100000)).toISOString()
      return {
        ...seed,
        createdAt,
      }
    })

    await context.db[collection].createMany({ data: datedSeeds })
  }
}

const seedAlbums = seedCollection('Album', albumSeeds)
const seedArticles = seedCollection('Article', articleSeeds)
const seedVideos = seedCollection('Video', videoSeeds)
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

const getConcertDates = (date: string, year: string) => {
  if (date.includes('-')) {
    const [month, dayRange] = date.split(' ')
    const [from, to] = dayRange.split('-')
    return [
      new Date(`$${month} ${from}, ${year}`).toISOString(),
      new Date(`$${month} ${to}, ${year}`).toISOString()
    ]
  }
  const dateString = new Date(`${date}, ${year}`).toISOString()
  return [dateString, dateString]
}

const seedConcertYear = (context: KeystoneContext<BaseKeystoneTypeInfo>, group: string) => async ({ year, concerts }: { year: string, concerts: any[] }) => {
  Promise.all(concerts.map(async ({ date, location, program }) => {
    const [dateFrom, dateTo] = getConcertDates(date, year)

    const pieces = await getProgramPieces(context, program)
    const [concertLocation] = await context.db.Location.findMany({ where: { venue: { equals: location.venue } } })
    const locationInput = concertLocation ? { connect: { id: concertLocation.id } } : { create: location }
    context.db.Concert.createOne({ data: { group, dateFrom, dateTo, program: { connect: pieces }, location: locationInput } })
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

const seedPrograms = async (context: KeystoneContext<BaseKeystoneTypeInfo>) => {
  const programs = await context.db.Program.findMany()
  if (programs.length) return

  const collaborators = programSeeds.flatMap((program) => program.collaborators);
  const collabRoles = collaborators.flatMap((collab) => ({ title: collab.role }));
  const roles = await context.db.CollaboratorRole.createMany({ data: collabRoles })
  const collabInputs = collaborators.map((collab) => ({
    ...collab,
    role: {
      connect: {
        id: roles.find(r => r.title === collab.role)!.id,
      }
    }
  }))
  const collaboratorRecords = await context.db.Collaborator.createMany({ data: collabInputs })


  await Promise.all(programSeeds.map(async (program) => {
    await context.db.Program.createOne({
      data: {
        group: Group.Mantra,
        description: program.description,
        durationInMinutes: program.duration,
        link: 'https://mantrapercussion.org',
        title: program.title,
        instrumentations: {
          create: program.instrumentations.map((instruments) => ({ instruments })),
        },
        collaborators: {
          connect: program.collaborators.map((collab) => ({
            id: collaboratorRecords.find(c => collab.name === c.name)!.id,
          }))
        }
      }
    })
  }))
}

export const seedDb = async (context: KeystoneContext<BaseKeystoneTypeInfo>) => {
  context.session = { data: { id: 'db-seed' } };
  await Promise.all([
    seedAlbums(context),
    seedArticles(context),
    seedVideos(context),
    seedTeams(context),
    seedLocations(context),
    seedPieces(context),
    seedPrograms(context),
  ])
  await seedConcerts(context)
}