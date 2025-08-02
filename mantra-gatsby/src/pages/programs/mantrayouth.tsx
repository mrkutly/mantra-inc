import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { FullScreenCard, ImageContainer } from '../../components/styles'
import SectionHeading from '../../components/SectionHeading'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { ProgramsList } from '../../components/ProgramList'
import { ConcertProgram } from '../../types'

const PAGE_QUERY = graphql`
	query {

		api {
			programs(where: { group: { equals: "mantrayouth"}}) {
				id
				title
				description
				link
				durationInMinutes
				instrumentations {
					instruments
				}
				collaborators {
					name
					role {
						title
					}
				}
			}
		}
	}
`

type PageResult = {
	api: { programs: ConcertProgram[] }
}

const Contact = () => {
	const { api: { programs } } = useStaticQuery<PageResult>(PAGE_QUERY)

	return (
		<Layout>
			<SEO title="Mantra Youth" />
			<main>
				<section id="programs">
					<FullScreenCard>
						<SectionHeading>
							<h1>Programs - Mantra Youth</h1>
						</SectionHeading>
						<Container>
							<div className="program">
								<h1>Mantra Youth Percussion</h1>
								<WhiteImageContainer width="400px">
									<StaticImage layout="fullWidth" alt="mantra youth logo" src="../../images/mantra-youth-logo.png" />
								</WhiteImageContainer>
								<p>
									Established in 2014, our tuition-free youth ensemble offers
									underrepresented students unique percussion music education
									and high-level performance opportunities, giving students the
									tools to realize their own potential, and fostering artistic
									excellence and inclusiveness.
								</p>
								<p>
									MYP focuses exclusively on performing and commissioning music
									by living composers. The group has performed at Carnegie Hall,
									National Sawdust, Juilliard, NYU, The New Music Gathering,
									Princeton Unruly Sounds Festival, the NJ Day of Percussion,
									the Cell, Roulette, MYCincinnati, Times Square, the Necessary
									Noise Festival, and on the Make Music NY Festival which the NY
									Times praised for their "ear-opening" performance.
								</p>
								<p>
									Over these past seven years, MYP has either commissioned or
									premiered new works by more than 25 living composers.
								</p>
							</div>
						</Container>
						<ProgramsList programs={programs} />
					</FullScreenCard>
				</section>
			</main>
		</Layout>
	)
}

const WhiteImageContainer = styled(ImageContainer)`
	background: white;
	padding: 20px;
`

const Container = styled.div`
	div.program {
		min-height: 300px;
		margin: 2rem auto 7rem;
		font-weight: 600;

		h1 {
			font-size: 3.5rem;
			color: lightblue;
		}
	}
`

export default Contact
