import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image, { FluidObject } from 'gatsby-image'
import styled from 'styled-components'
import SectionHeading from './SectionHeading'
import { ImageContainer, FullScreenCard, PageLink } from './styles'
import colors from './styles/colors'

const ABOUT_QUERY = graphql`
	query {
		site {
			siteMetadata {
				programLinks {
					id
					display
					href
				}
			}
		}

		bandImage: file(relativePath: { eq: "timber-cool.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}

		api {
			admin: teams(where: { title: { equals: "Administration" }}) {
				title
				members(orderBy: { name: asc }) {
					name
					roles {
						title
					}
				}
			}

			otherTeams: teams(where: { NOT: { title: { equals: "Administration" }}}) {
				title
				members(orderBy: { name: asc }) {
					name
					roles {
						title
					}
				}
			}
		}
	}
`

export interface ImageResult {
	childImageSharp: {
		fluid: FluidObject
	}
}

type TeamMember = {
	name: string
	roles: { title: string }[]
}

type Team = {
	title: string
	members: TeamMember[]
}

type Bios = {
	bandImage: ImageResult
	site: {
		siteMetadata: {
			programLinks: { display: string; href: string; id: number; }[]
		}
	}
	api: {
		admin: Team[]
		otherTeams: Team[]
	}
}

const randomOrder = () => [-1, 0, 1][Math.floor(Math.random() * 3)]


const About = () => {
	const data = useStaticQuery<Bios>(ABOUT_QUERY)
	const { admin, otherTeams } = data.api
	const [mantraLink, recapLink, nnfLink, mypLink] = [...data.site.siteMetadata.programLinks].sort((a, b) => a.id - b.id)

	return (
		<section id="about" style={{ fontWeight: 600 }}>
			<FullScreenCard>
				<SectionHeading>
					<h1>About</h1>
				</SectionHeading>
				<ContentStyles>
					<h2>Mantra Percussion Inc.</h2>
					<ImageContainer width="400px">
						<Image fluid={data.bandImage.childImageSharp.fluid} />
					</ImageContainer>
					<p>
						Mantra Percussion, Inc. is a future-focused organization committed to a lasting influence on percussion music through the{' '}
						creation of new works by living composers and creators from across the social spectrum — establishing lasting relationships with our collaborators;{' '}
						by developing equitable music communities through collaboration, support, and concert presenting; by mentoring new generations of diverse artists{' '}
						to significantly reshape the classical music landscape; and by engaging audiences through immersive, evening-length events that convey a grander{' '}
						artistic vision.
					</p>

					<p>

						Since forming in 2009, Mantra Percussion&apos;s ensembles have been featured throughout North America, Europe and Asia, including BAM&apos;s Next Wave{' '}
						Festival, the Bang on a Can Marathon, Sacrum Profanum Festival (Poland), Now Music Festival (South Korea), the GAIDA festival (Lithuania), Duke{' '}
						Performances, National Public Radio, the Drogheda Festival (Ireland), the Ecstatic Music Festival, Mass MoCA and more. Over the past 14 years{' '}
						we have commissioned and/or premiered over 100 new works for percussion ensemble.
					</p>

					<p>
						Across our organization we&apos;ve developed 4 distinct creative outlets.{' '}
					</p>
					<p>
						<ProgramLink to={mantraLink.href}>{mantraLink.display}</ProgramLink>:{' '}
						Our flagship sextet collaborates with artists from diverse{' '}
						backgrounds and redefines the landscape of percussion concerts and events.{' '}
					</p>
					<p>
						<ProgramLink to={recapLink.href}>{recapLink.display}</ProgramLink>:{' '}
						a professional percussion quartet of BIPOC women, all alumni of Mantra Youth{' '}
						Percussion. Recap reevaluates the white, male-dominated world of percussion amplifying a message of representation, community, and equity.{' '}
					</p>
					<p>
						<ProgramLink to={nnfLink.href}>{nnfLink.display}</ProgramLink>:{' '}
						our annual music festival is the largest percussion event on the east coast, bringing together scholastic, collegiate, and professional musicians to share a wide spectrum{' '}
						of styles, while promoting percussion to the greater community.{' '}
					</p>
					<p>
						<ProgramLink to={mypLink.href}>{mypLink.display}</ProgramLink>:{' '}
						our tuition-free youth ensemble offers under-represented students unique, percussion{' '}
						music mentorship and high-level performance opportunities, giving students the tools to realize their own potential, while fostering artistic excellence and inclusiveness.
					</p>

				</ContentStyles>

				<ContentStyles>
					<h2>Who are we?</h2>
					<div className="grid">
						{admin.map(({ title, members }) => (
							<div key={`${title}-members`}>
								<h3>{title}</h3>
								<ul>
									{members.map(({ name, roles }) => (
										<li key={`${title}-${name}`}>
											<p>{name}</p>
											{roles && (
												<ul className="small">
													{roles.map((role, idx) => (
														<li key={`${name}-${role}-${idx}`}>{role.title}</li>
													))}
												</ul>
											)}
										</li>
									))}
								</ul>
							</div>
						))}
						<div className="sub-grid">
							{otherTeams.sort(randomOrder).map(({ title, members }) => (
								<div key={`${title}-staff`}>
									<h3>{title}</h3>
									<ul>
										{members.map(({ name, roles }) => (
											<li key={`${title}-${name}`}>
												<p>{name}</p>
												{roles && (
													<ul className="small">
														{roles.map((role, idx) => (
															<li key={`${name}-${role}-${idx}`}>{role.title}</li>
														))}
													</ul>
												)}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</ContentStyles>
			</FullScreenCard>
		</section >
	)
}

const ContentStyles = styled.div`
	min-height: 400px;
	margin: 2rem auto 5rem;
	h2 {
		font-size: 3.5rem;
		color: lightblue;
	}

	.grid {
		display: grid;
		grid-gap: 4rem;
		grid-template-columns: 1fr 1fr;

		.small {
			font-size: 0.7em;
		}
	}

	@media screen and (max-width: 740px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}

	.sub-grid {
		display: grid;
		grid-gap: 4rem;
	}
`


const ProgramLink = styled(PageLink)`
	color: ${colors.lightpink};	
	border-bottom: none;
`

export default About
