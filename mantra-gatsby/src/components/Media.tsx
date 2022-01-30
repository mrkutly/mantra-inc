import React, { useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { FullScreenCard } from './styles'
import SectionHeading from './SectionHeading'
import MediaIndex from './media/MediaIndex'
import { Album, MediaTypes, Video } from '../types'

export const MEDIA_QUERY = graphql`
	query {
		 api {
			albums(orderBy: { createdAt: desc }) {
				title
				link
				embed
				host
			}

			videos(orderBy: { createdAt: desc}) {
				title
				embed
			}
		}
	}
`

interface MediaResult {
	api: {
		albums: Album[]
		videos: Video[]
	}
}

const Media = () => {
	const [active, setActive] = useState<MediaTypes>(MediaTypes.VIDEOS)
	const { albums, videos } = useStaticQuery<MediaResult>(MEDIA_QUERY).api

	return (
		<section id="media">
			<FullScreenCard color="white">
				<SectionHeading>
					<div>
						{[MediaTypes.VIDEOS, MediaTypes.ALBUMS].map(opt => (
							<MediaOption
								className={active === opt ? 'active' : null}
								key={opt}
								onClick={() => setActive(opt)}
								onKeyPress={({ key }) => key === 'Enter' && setActive(opt)}
								role="button"
								tabIndex={0}
							>
								{opt}
							</MediaOption>
						))}
					</div>
				</SectionHeading>
				<MediaIndex videos={videos} albums={albums} type={active} />
			</FullScreenCard>
		</section>
	)
}

const MediaOption = styled.span`
	--rotate: -4deg;
	--scale: 1;
	display: inline-block;
	transform: rotate(var(--rotate)) scale(var(--scale));
	color: #ffffff;
	cursor: pointer;
	margin-right: 20px;
	font-family: 'Bebas Neue', Arial, Helvetica, sans-serif;
	text-rendering: optimizeLegibility;
	text-align: center;
	font-size: 3rem;
	line-height: 1.1;

	&.active {
		color: #000000;
		background-color: #ffffff;
	}
`

export default Media
