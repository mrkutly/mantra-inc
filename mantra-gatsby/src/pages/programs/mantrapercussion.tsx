import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { FullScreenCard, ImageContainer } from '../../components/styles'
import SectionHeading from '../../components/SectionHeading'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { ConcertProgram } from '../../types'
import { ProgramsList } from '../../components/ProgramList'

const PAGE_QUERY = graphql`
	query {
		api {
			programs(where: { group: { equals: "mantra"}}, orderBy: { createdAt: desc }) {
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
			<SEO title="Mantra Percussion" />
			<main>
				<section id="programs">
					<FullScreenCard>
						<SectionHeading>
							<h1>Programs - Mantra Percussion</h1>
						</SectionHeading>
						<GroupContainer>
							<div className="group">
								<h1>Mantra Percussion</h1>
								<WhiteImageContainer width="400px">
									<StaticImage
										src="../../images/mantra-logo.png"
										style={{ filter: 'invert(1)' }}
										alt="mantra logo"
									/>
								</WhiteImageContainer>
								<p>
									Mantra Percussion, Inc. is a future-focused arts organization
									committed to a lasting influence on percussion music,
									developing equitable music communities, fostering high-level
									musicianship for underserved youth, and engaging international
									audiences by challenging the standard concert format through
									evening-length events that look toward a grander artistic
									vision.
								</p>
								<p>
									Our flagship ensemble, Mantra Percussion, founded in 2009, has
									been featured around the world and has commissioned/premiered
									over 70 new works for percussion ensemble. Recap, a quartet of
									alumni from Mantra Youth Percussion, releases their debut
									album “Count To Five” on Innova Recordings this Fall. Mantra
									Youth Percussion, our free tuition youth ensemble has been
									featured at Carnegie Hall and the New Music Gathering and The
									Necessary Noise Festival has programmed over 100 ensembles
									from around the region.
								</p>
							</div>
						</GroupContainer>
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

const GroupContainer = styled.div`
	div.group {
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
