/* eslint-disable react/jsx-filename-extension */
import './src/global.css'
import React from 'react'
import BackgroundImage from './src/components/BackgroundImage'

export const wrapPageElement = ({ element }) => (
	<>
		<BackgroundImage />
		{element}
	</>
)
