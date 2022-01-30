import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import message from './message'

const Layout = ({ children }) => {
	useEffect(() => console.log(message), [])

	return (
		<div
			style={{
				margin: `0 auto`,
				paddingTop: 0,
				maxWidth: '1400px',
			}}
		>
			{children}
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
