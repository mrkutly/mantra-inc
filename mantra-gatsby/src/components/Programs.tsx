import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Image, { FixedObject } from 'gatsby-image'
import { FullScreenCard, PageLink } from './styles'
import SectionHeading from './SectionHeading'

const IMAGES_QUERY = graphql`
	query {
		mantra: file(relativePath: { eq: "mantra-logo.png" }) {
			childImageSharp {
				fixed(width: 260) {
					...GatsbyImageSharpFixed
				}
			}
		}

		mantraYouth: file(relativePath: { eq: "mantra-youth-logo.png" }) {
			childImageSharp {
				fixed(width: 260) {
					...GatsbyImageSharpFixed
				}
			}
		}

		nnf: file(relativePath: { eq: "nnf-logo.png" }) {
			childImageSharp {
				fixed(width: 260) {
					...GatsbyImageSharpFixed
				}
			}
		}

		recap: file(relativePath: { eq: "recap-logo.jpg" }) {
			childImageSharp {
				fixed(width: 260) {
					...GatsbyImageSharpFixed
				}
			}
		}
	}
`

type FixedImageResult = {
	childImageSharp: {
		fixed: FixedObject
	}
}

type Images = {
	mantra: FixedImageResult
	mantraYouth: FixedImageResult
	nnf: FixedImageResult
	recap: FixedImageResult
}

const Programs = () => {
	const { mantra, mantraYouth, nnf, recap } = useStaticQuery<Images>(
		IMAGES_QUERY
	)

	return (
		<section id="programs">
			<FullScreenCard>
				<SectionHeading>
					<h1>Programs</h1>
				</SectionHeading>
				<Container>
					<div className="program">
						<SectionLink to="/programs/mantrapercussion">
							Mantra Percussion
							<WhiteImageContainer>
								<div className="centered">
									<Image
										fixed={mantra.childImageSharp.fixed}
										style={{ filter: 'invert(1)' }}
									/>
								</div>
							</WhiteImageContainer>
						</SectionLink>
					</div>

					<div className="program">
						<SectionLink to="/programs/recap">
							Recap
							<WhiteImageContainer>
								<div className="centered">
									<Image fixed={recap.childImageSharp.fixed} />
								</div>
							</WhiteImageContainer>
						</SectionLink>
					</div>

					<div className="program">
						<SectionLink to="/programs/mantrayouth">
							Mantra Youth Percussion
							<WhiteImageContainer>
								<div className="centered">
									<Image fixed={mantraYouth.childImageSharp.fixed} />
								</div>
							</WhiteImageContainer>
						</SectionLink>
					</div>

					<div className="program">
						<SectionLink to="/programs/nnf">
							Necessary Noise Festival
							<WhiteImageContainer>
								<div className="centered">
									<Image fixed={nnf.childImageSharp.fixed} />
								</div>
							</WhiteImageContainer>
						</SectionLink>
					</div>
				</Container>
			</FullScreenCard>
		</section>
	)
}

const WhiteImageContainer = styled.div`
	background: white;
	display: grid;
	padding: 20px;
	box-shadow: var(--blue-shadows);

	div.centered {
		margin: auto;
	}
`

const SectionLink = styled(PageLink)`
	font-size: 3.5rem;
	color: lightblue;
	border-bottom: none;
	font-family: 'Bebas Neue', Arial, Helvetica, sans-serif;
`

const Container = styled.div`
	display: grid;
	grid-gap: 40px;
	grid-template-columns: 1fr 1fr;

	div.program {
		text-align: center;
		min-height: 300px;
		margin: 2rem auto 7rem;
		font-weight: 600;
	}

	@media (max-width: 700px) {
		grid-template-columns: 1fr;
		grid-gap: 0;
	}
`

export default Programs
