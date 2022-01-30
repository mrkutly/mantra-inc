import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Contact from '../components/Contact'

const ContactPage = () => (
	<Layout>
		<SEO title="contact" />
		<main>
			<Contact />
		</main>
	</Layout>
)

export default ContactPage
