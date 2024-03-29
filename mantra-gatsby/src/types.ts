export interface Album {
	title: string
	link: string
	embed: string
	host: string
}

export interface Article {
	id: string
	author: string
	publication: string
	pullQuote: string
	title: string
	link: string
}

export interface CalendarNode {
	node: {
		concerts: Concert[]
		year: number
	}
}

export interface Concert {
	dateFrom: string
	dateTo: string
	location: {
		city: string
		support: string
		venue: string
	}
	program: Array<{
		composer: string
		description: string
		title: string
	}>
}

export enum MediaTypes {
	ALBUMS = 'AUDIO',
	VIDEOS = 'VIDEO',
}

export interface SiteLink {
	id: number
	href: string
	display: string
	partial: boolean
	isHash: boolean
}

export interface Video {
	title: string
	embed: string
}

export type Group = 'mantra' | 'recap' | 'mantraYouth'

export interface Instrumentation {
	instruments: string
}

export interface Collaborator {
	name: string
	role: {
		title: string
	}
}

export interface ConcertProgram {
	id: string
	title: string
	durationInMinutes: number
	instrumentations: Instrumentation[]
	description: string
	collaborators: Collaborator[]
	link: string
}