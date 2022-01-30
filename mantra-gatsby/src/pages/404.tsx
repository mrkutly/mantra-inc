import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageLink } from "../components/styles"

const NotFoundPage = () => (
	<Layout>
		<SEO />
		<h1>NOT FOUND</h1>
		<p>
			Hmm there is nothing here. Try going <PageLink to="/">here</PageLink>
		</p>
	</Layout>
)

export default NotFoundPage
