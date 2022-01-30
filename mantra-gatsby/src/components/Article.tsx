import React from 'react'
import styled from 'styled-components'
import { colorChange } from './styles/animations'

const ArticleListItem = styled.li`
	list-style-type: circle;
	padding: 0 0 3vh 2em;
`

const ArticleLink = styled.a`
	color: white;
	text-decoration: none;
	display: block;
	transition: letter-spacing 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

	h2 {
		line-height: 2em;
	}

	:focus,
	:hover {
		animation: ${colorChange} 7s linear infinite;
		letter-spacing: 4px;
		text-shadow: 1px 1px black;
	}
`

const Article = ({
	article: { publication, title, pullQuote, url, author },
}) => (
	<ArticleLink href={url} target="_blank" rel="noopener noreferrer">
		<ArticleListItem>
			<h1>{publication}</h1>
			<h2>{title}</h2>
			<p>"{pullQuote}"</p>
			<p>{author}</p>
		</ArticleListItem>
		<hr />
	</ArticleLink>
)

export default Article
