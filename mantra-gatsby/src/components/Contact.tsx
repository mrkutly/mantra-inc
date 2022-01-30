import React from 'react'
import styled from 'styled-components'
import { FullScreenCard } from './styles'
import SectionHeading from './SectionHeading'
import { colorChange } from './styles/animations'

const Contact = () => (
	<section id="contact">
		<FullScreenCard>
			<SectionHeading>
				<h1>Contact</h1>
			</SectionHeading>
			<Container>
				<p>
					For booking and all other inquiries, reach out to us at{' '}
					<a href="mailto:info@mantrapercussion.org">
						info@mantrapercussion.org
					</a>
				</p>
			</Container>
		</FullScreenCard>
	</section>
)

const Container = styled.div`
	text-align: center;
	margin: 20vh auto;
	max-width: 1200px;

	p {
		font-size: 2rem;
		font-weight: 600;
	}

	a {
		color: var(--lightblue);
		transition: letter-spacing 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

		:hover,
		:focus {
			animation: ${colorChange} 7s linear infinite;
			text-shadow: 1px 1px black;
			letter-spacing: 2px;
		}
	}
`

export default Contact
