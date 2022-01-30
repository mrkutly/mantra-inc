import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { FullScreenCard } from './styles'
import SectionHeading from './SectionHeading'
import Article from './Article'
import { Article as ArticleType } from '../types'

const PRESS_QUERY = graphql`
	query {
		articles: allArticlesJson {
			nodes {
				id
				author
				publication
				pullQuote
				title
				url
			}
		}
	}
`

interface PressResult {
	articles: {
		nodes: ArticleType[]
	}
}

const Press = () => {
	const { articles } = useStaticQuery<PressResult>(PRESS_QUERY)
	const mappedArticles = articles.nodes.map(article => (
		<Article article={article} key={article.id} />
	))

	return (
		<section id="press">
			<FullScreenCard color="white">
				<SectionHeading>
					<h1>Press</h1>
				</SectionHeading>
				<PressList>{mappedArticles}</PressList>
			</FullScreenCard>
		</section>
	)
}

const PressList = styled.ul`
	margin-top: 4%;
	margin-left: 1%;
`

export default Press
