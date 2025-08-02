import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import SectionHeading from './SectionHeading'
import DonationButton from './DonationButton'
import { FullScreenCard } from './styles'

const Support = () => {
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
						<li>
							<div className="image-container">
								<StaticImage
									layout="fullWidth" src="../images/amphion.png" alt="amphion foundation" />
							</div>
							<p>Amphion Foundation</p>
						</li>

						<li>
							<div className="image-container">
								<StaticImage
									layout="fullWidth" src="../images/nmusa.jpeg" alt="new music usa" />
							</div>
							<p>New Music USA</p>
						</li>

						<li>
							<div className="image-container">
								<StaticImage
									layout="fullWidth" src="../images/cma.png" alt="Chamber Music America" />
							</div>
							<p>Chamber Music America</p>
						</li>

						<li>
							<div className="image-container">
								<StaticImage
									layout="fullWidth" src="../images/bac.jpeg" alt="Brooklyn Arts Council" />
							</div>
							<p>Brooklyn Arts Council</p>
						</li>

						<li>
							<div className="image-container">
								<StaticImage
									layout="fullWidth" src="../images/qac.png" alt="Queens Council on the Arts" />
							</div>
							<p>Queens Council on the Arts</p>
						</li>


						<li>
							<div className="image-container">
								<StaticImage
									layout="fullWidth" src="../images/ditson.jpeg" alt="The Alice M. Ditson Fund" />
							</div>
							<p>The Alice M. Ditson Fund</p>
						</li>


						<li>
							<div className="image-container">
								<StaticImage
									layout="fullWidth" src="../images/nps.png" alt="National Parks Service" />
							</div>
							<p>National Parks Service</p>
						</li>


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
