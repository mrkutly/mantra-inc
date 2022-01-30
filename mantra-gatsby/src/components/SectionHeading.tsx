import React from 'react'
import styled from 'styled-components'
import HeaderMenu from './HeaderMenu'

interface SectionHeadingProps {
	children?: React.ReactNode
	color?: string
}

const SectionHeading = ({ children, color }: SectionHeadingProps) => (
	<Heading>
		{children}
		<HeaderMenu color={color} />
	</Heading>
)

const Heading = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;

	a {
		font-weight: 600;
	}
`
export default SectionHeading
