import React, { useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { FullScreenCard } from './styles'
import SectionHeading from './SectionHeading'
import Article from './Article'
import { Article as ArticleType, Group } from '../types'
import { GroupButtons } from './GroupButtons'

const PRESS_QUERY = graphql`
	query {
		api {
			mantra: articles(where: { group: { equals: "mantra" } }, orderBy: { createdAt: desc }) {
				id
				author
				publication
				pullQuote
				title
				link
			}

			recap: articles(where: { group: { equals: "recap" } }, orderBy: { createdAt: desc }) {
				id
				author
				publication
				pullQuote
				title
				link
			}
		}
	}
`

interface PressResult {
	api: {
		mantra: ArticleType[]
		recap: ArticleType[]
	}
}

const Press = () => {
	const articles = useStaticQuery<PressResult>(PRESS_QUERY).api
	const [group, setGroup] = useState<Group>('mantra')
	const mappedArticles = articles[group].map((article: ArticleType) => (
		<Article article={article} key={article.id} />
	))

	return (
		<section id="press">
			<FullScreenCard color="white">
				<SectionHeading>
					<h1>Press</h1>
				</SectionHeading>
				<GroupButtons
					groups={[{ key: 'mantra' }, { key: 'recap' }]}
					onSelectGroup={setGroup}
					activeGroup={group} />
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
