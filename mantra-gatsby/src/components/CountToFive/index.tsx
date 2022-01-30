import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { FullScreenCard, Link } from '../styles'
import SectionHeading from '../SectionHeading'
import LinerCredits from './LinerCredits'
import { ImageResult } from '../About'
import TrackList from './TrackList'
import AlbumNotes from './AlbumNotes'
import RecapBio from './RecapBio'
import ComposerBios from './ComposerBios'
import GuestArtistBios from './GuestArtistBios'

const ContentStyles = styled.div`
	h2 {
		font-size: 3.5rem;
		color: lightblue;
	}

	section {
		clear: both;
		margin: 4rem 0;
	}
`

const IMAGE_QUERY = graphql`
	query {
		recap: file(relativePath: { eq: "recap.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		countToFive: file(relativePath: { eq: "count-to-five.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`

interface ImageQueryData {
	recap: ImageResult
	countToFive: ImageResult
}

const CountToFive = () => {
	const data = useStaticQuery<ImageQueryData>(IMAGE_QUERY)
	return (
		<section id="count-to-five">
			<FullScreenCard>
				<SectionHeading>
					<h1>Count to Five </h1>
				</SectionHeading>
				<ContentStyles>
					<Link
						href="https://www.innova.mu/albums/recap/count-five"
						style={{ color: 'var(--lightpink)' }}
					>
						Out on Innova Records
					</Link>
					<AlbumNotes image={data.countToFive.childImageSharp.fluid} />
					<br />
					<br />
					<br />
					<br />
					<RecapBio image={data.recap.childImageSharp.fluid} />

					<section id="album-notes">
						<h2>Album Info & Credits</h2>
						<TrackList />
						<LinerCredits />
					</section>

					<ComposerBios />
					<GuestArtistBios />

					<section id="thanks">
						<h2>Special Thanks</h2>
						<p>
							Miguel Bolivar, Joseph Brown, Taylor Furman, James Bogert, Jessica
							Bergen, Jazmine Andes, Michael McCurdy, Albert Cerulo, Christopher
							Graham, Mark Utley & Mika Godbole
						</p>

						<p>
							We are grateful for the overwhelming support we’ve received during
							the creation of this album. Thank you to all the guest musicians,
							composers, friends, family, colleagues, organizations and
							supporters of Recap!
						</p>
					</section>
				</ContentStyles>
			</FullScreenCard>
		</section>
	)
}

export default CountToFive
