/* eslint-disable react/no-this-in-sfc */
/* eslint-disable lines-between-class-members */
import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { ImageResult } from './About'

export const LOGO_QUERY = graphql`
	query {
		logo: file(relativePath: { eq: "mantra-logo.png" }) {
			childImageSharp {
				fluid(maxWidth: 1200) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`

const BackgroudImage = () => {
	const { logo } = useStaticQuery<{ logo: ImageResult }>(LOGO_QUERY)
	return (
		<BackgroundStyles>
			<Image fluid={logo.childImageSharp.fluid} />
		</BackgroundStyles>
	)
}

const BackgroundStyles = styled.div`
	position: fixed;
	max-width: 550px;
	width: 70vw;
	translate: -50% -50%;
	top: 50%;
	left: 50%;
	z-index: -1;
`

export default BackgroudImage
