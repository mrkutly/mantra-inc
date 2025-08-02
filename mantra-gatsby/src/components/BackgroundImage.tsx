/* eslint-disable react/no-this-in-sfc */
/* eslint-disable lines-between-class-members */
import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'


const BackgroudImage = () => {
	return (
		<BackgroundStyles>
			<StaticImage layout="fullWidth" alt="mantra logo" src="../images/mantra-logo.png" />
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
