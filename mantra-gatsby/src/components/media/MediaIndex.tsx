import React from 'react'
import styled from 'styled-components'
import AlbumPlayer from './AlbumPlayer'
import VideoPlayer from './VideoPlayer'
import { Album, MediaTypes, Video } from '../../types'

interface MediaProps {
	videos: Video[]
	albums: Album[]
	type: MediaTypes
}

const MediaIndex = ({ albums, videos, type }: MediaProps) => {
	const mappedVideos = videos.map((video, i) => (
		<div className="card">
			<VideoPlayer key={`${video}-${i}`} video={video} />
			<p>{video.title}</p>
		</div>
	))
	const mappedAlbums = albums.map((album, i) => (
		<div className="card">
			<AlbumPlayer key={`${album}-${i}`} album={album} />
			<p>{album.title}</p>
		</div>
	))

	return (
		<Index type={type}>
			{type === MediaTypes.ALBUMS && mappedAlbums}
			{type === MediaTypes.VIDEOS && mappedVideos}
		</Index>
	)
}

const Index = styled.div<{ type: MediaTypes }>`
	margin: 48px;
	display: grid;
	align-items: center;
	justify-content: center;
	grid-template-columns: 1fr 1fr;
	grid-gap: 80px;

	.card p {
		text-align: center;
		color: #ffffff;
		font-weight: 600;
		font-size: 2rem;
		font-family: 'Bebas Neue';
		margin-top: 60px;
	}

	@media screen and (max-width: 1300px) {
		grid-template-columns: 1fr;
	}
`

export default MediaIndex
