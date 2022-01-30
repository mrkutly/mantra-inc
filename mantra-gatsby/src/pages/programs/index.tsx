import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Programs from '../../components/Programs'

const ProgramsPage = () => (
	<Layout>
		<SEO title="programs" />
		<main>
			<Programs />
		</main>
	</Layout>
)

export default ProgramsPage
