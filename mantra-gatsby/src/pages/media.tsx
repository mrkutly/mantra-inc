import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Media from '../components/Media'

const MediaPage = () => (
	<Layout>
		<SEO title="media" />
		<main>
			<Media />
		</main>
	</Layout>
)

export default MediaPage
