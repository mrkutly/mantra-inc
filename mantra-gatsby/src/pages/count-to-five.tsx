import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CountToFive from '../components/CountToFive'

const CountToFivePage = () => (
	<Layout>
		<SEO title="count to five" />
		<main>
			<CountToFive />
		</main>
	</Layout>
)

export default CountToFivePage
