import React from 'react'
import styled from 'styled-components'
import { StaticImage as Image } from 'gatsby-plugin-image'
import { FullScreenCard, PageLink } from './styles'
import SectionHeading from './SectionHeading'


const Programs = () => {
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
										alt="mantra logo"
										layout="fixed"
										width={260}
										src="../images/mantra-logo.png"
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
									<Image
										alt="recap logo"
										layout="fixed"
										width={260}
										src="../images/recap-logo.jpg"
									/>
								</div>
							</WhiteImageContainer>
						</SectionLink>
					</div>

					<div className="program">
						<SectionLink to="/programs/mantrayouth">
							Mantra Youth Percussion
							<WhiteImageContainer>
								<div className="centered">
									<Image
										alt="mantra youth logo"
										layout="fixed"
										width={260}
										src="../images/mantra-youth-logo.png"
									/>
								</div>
							</WhiteImageContainer>
						</SectionLink>
					</div>

					<div className="program">
						<SectionLink to="/programs/nnf">
							Necessary Noise Festival
							<WhiteImageContainer>
								<div className="centered">
									<Image
										alt="necessary noise festival logo"
										layout="fixed"
										width={260}
										src="../images/nnf-logo.png"
									/>
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
