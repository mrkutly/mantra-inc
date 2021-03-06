import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image, { FluidObject } from 'gatsby-image'
import styled from 'styled-components'
import SectionHeading from './SectionHeading'
import { ImageContainer, FullScreenCard } from './styles'

const ABOUT_QUERY = graphql`
	query {
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
	api: {
		admin: Team[]
		otherTeams: Team[]
	}
}

const randomOrder = () => [-1, 0, 1][Math.floor(Math.random() * 3)]

const About = () => {
	const data = useStaticQuery<Bios>(ABOUT_QUERY)
	const { admin, otherTeams } = data.api

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
						Mantra Percussion, Inc. is a NYC-based, 501(c)(3) non-profit
						percussion collective committed to honoring the past and expanding
						the future of percussion music.
					</p>

					<p>
						As an organization we strive to engage international audiences by
						challenging what it means to communicate music through percussion
						instruments, and to foster high-level musicianship for underserved
						and underrepresented youth in new music, developing unique and
						equitable music communities.
					</p>
					<p>
						Our aim is to bring to life new works for percussion by living
						composers and creators from across the social spectrum ???
						establishing long-lasting relationships with our collaborators. From
						our inception we have almost exclusively performed works written for
						the group. We travel around our block and the world as ambassadors
						of our repertoire, giving dozens of performances of the works we
						commission.
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
		</section>
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

export default About
