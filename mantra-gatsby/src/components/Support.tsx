import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Image, { FluidObject } from 'gatsby-image'
import { ImageResult } from './About'
import SectionHeading from './SectionHeading'
import DonationButton from './DonationButton'
import { FullScreenCard } from './styles'

type SupportImages = {
	ditson: ImageResult
	amphion: ImageResult
	bac: ImageResult
	cma: ImageResult
	nmusa: ImageResult
	nps: ImageResult
	qac: ImageResult
}

export const SUPPORT_IMAGES_QUERY = graphql`
	query {
		ditson: file(relativePath: { eq: "ditson.jpeg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}

		amphion: file(relativePath: { eq: "amphion.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}

		bac: file(relativePath: { eq: "bac.jpeg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}

		cma: file(relativePath: { eq: "cma.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}

		nmusa: file(relativePath: { eq: "nmusa.jpeg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}

		nps: file(relativePath: { eq: "nps.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}

		qac: file(relativePath: { eq: "qac.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`

const Supporter = ({ fluid, text }: { fluid: FluidObject; text: string }) => (
	<li>
		<div className="image-container">
			<Image fluid={fluid} alt={text} />
		</div>
		<p>{text}</p>
	</li>
)

const Support = () => {
	const images = useStaticQuery<SupportImages>(SUPPORT_IMAGES_QUERY)
	return (
		<section id="support" style={{ fontWeight: 600 }}>
			<FullScreenCard>
				<SectionHeading>
					<h1>Support</h1>
				</SectionHeading>
				<ContentStyles>
					<h2>Donations</h2>
					<p>
						Our programs are made possible through a combination of individual,
						government and foundation support. We hope that you will consider
						helping us to produce future concerts and create new works for
						percussion. Donations of any amount are greatly appreciated.
					</p>
					<p>
						Mantra Percussion is a{' '}
						<strong>501(c)(3) charitable organization</strong>; all donations
						are tax-deductible to the fullest extent of the law.
					</p>
					<DonationButton />
					<hr />
					<h2>Supporting Foundations</h2>
					<p>
						Mantra Percussion is grateful to the following institutions for
						their generous support:
					</p>
					<ul>
						<Supporter
							fluid={images.amphion.childImageSharp.fluid}
							text="Amphion Foundation"
						/>
						
						<Supporter
							fluid={images.nmusa.childImageSharp.fluid}
							text="New Music USA"
						/>

						<Supporter
							fluid={images.cma.childImageSharp.fluid}
							text="Chamber Music America"
						/>

						<Supporter
							fluid={images.bac.childImageSharp.fluid}
							text="Brooklyn Arts Council"
						/>

						<Supporter
							fluid={images.qac.childImageSharp.fluid}
							text="Queens Council on the Arts"
						/>

						<Supporter
							fluid={images.ditson.childImageSharp.fluid}
							text="The Alice M. Ditson Fund"
						/>

						<Supporter
							fluid={images.nps.childImageSharp.fluid}
							text="National Parks Service"
						/>
					</ul>
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

	strong {
		color: lightblue;
	}

	hr {
		background: white;
		margin: 5rem auto;
	}

	ul {
		margin-top: 5rem;
		margin-left: 0;
		list-style: none;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 40px;
		align-items: center;

		li {
			max-width: 300px;

			.image-container {
				padding: 10px 20px;
				margin: 0 50px 50px 0;
				background: white;
				box-shadow: var(--blue-shadows);
			}
		}
	}

	@media screen and (max-width: 1200px) {
		ul {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media screen and (max-width: 700px) {
		ul {
			grid-template-columns: 1fr;
		}
	}
`

export default Support
