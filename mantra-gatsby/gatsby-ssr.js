/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import BackgroundImage from './src/components/BackgroundImage'

export const wrapPageElement = ({ element }) => (
	<>
		<BackgroundImage />
		{element}
	</>
)
