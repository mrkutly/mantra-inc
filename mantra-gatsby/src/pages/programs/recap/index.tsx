import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import {
	FullScreenCard,
	ImageContainer,
	PageLink,
} from '../../../components/styles'
import { ConcertProgram } from '../../../types'
import SectionHeading from '../../../components/SectionHeading'
import { ImageResult } from '../../../components/About'
import Layout from '../../../components/layout'
import SEO from '../../../components/seo'
import { ProgramsList } from '../../../components/ProgramList'

const QUERY = graphql`
	query {
		recap: file(relativePath: { eq: "recap-flags.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		
		api {
			programs(where: { group: { equals: "recap"}}) {
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

type Result = {
	recap: ImageResult
	api: { programs: ConcertProgram[] }
}

const Contact = () => {
	const { recap, api: { programs } } = useStaticQuery<Result>(QUERY)

	return (
		<Layout>
			<SEO title="Recap" />
			<main>
				<section id="programs">
					<FullScreenCard>
						<SectionHeading>
							<h1>Programs - Recap</h1>
						</SectionHeading>
						<Container>
							<div className="program">
								<h1>Recap</h1>
								<WhiteImageContainer width="600px">
									<Image fluid={recap.childImageSharp.fluid} />
								</WhiteImageContainer>
								<h2>
									<PageLink
										to="/programs/recap/count-to-five"
										style={{ color: 'var(--lightpink)' }}
									>
										Debut Album "Count to Five" out on Innova Records
									</PageLink>
								</h2>
								<p>
									Recap is a new percussion quartet from a new generation of
									musicians dedicated to music reflecting the diverse society we
									live in today. Arlene Acevedo, Alexis Carter, Tiahna Sterling
									and Aline Vasquez, four musicians from Rahway, NJ, forms Recap
									through music, friendship and a desire to share their unique
									story. As recent alumni of Mantra Youth Percussion, the
									free-tuition teenage ensemble of Mantra Percussion, Inc., the
									members of Recap worked closely for several years with
									different music creators, performing both in their community
									as well as nationally, learning skills that would provide the
									groundwork for establishing their own group.
								</p>
								<p>
									Now as a newly-formed professional ensemble, Recap headlines
									the 2021 New Music Gathering in Minneapolis, MN and releases
									their debut album “Count to Five” on Innova Recordings with
									premiere recordings of music by Angelica Negron, Allison
									Loggins-Hull, Ellen Reid, Lesley Flanigan, Mary Kouyoumdjian,
									and Caroline Shaw. Recap will showcase select pieces from the
									album at the Percussive Arts Society International Convention
									in Indianapolis, IN in November 2021, continuing with winter
									and spring 2022 dates across the country.
								</p>
								<p>
									In July 2022, Recap will embark on a tour in the Kenai
									Peninsula and Alaskan Beringia regions to perform a work
									created through interdisciplinary artistic collaborations with
									indigineous artists that address the cultural, economic, and
									environmental challenges faced by the Alaskan Beringia region
									while celebrating its incredible cultural and biological
									diversity and natural beauty. This project is in collaboration
									with Bang on a Can’s Found Sound Nation, The Wildshore
									Festival for New Music, with financial support provided by the
									National Parks Service.
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
	}
	h1 {
		font-size: 3.5rem;
		color: lightblue;
	}
`

export default Contact
