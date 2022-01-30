import React from 'react'
import styled from 'styled-components'
import { Concert as ConcertType } from '../types'

function mapProgram(program) {
	const i = 0

	return program.map(piece => {
		if (piece.composer && piece.title) {
			return (
				<li key={`${piece.composer}-${piece.title}-${i}`}>
					<h4>
						{piece.composer} - {piece.title}
					</h4>
				</li>
			)
		}
		return (
			<li key={`${piece}-${i}`}>
				<h4>{piece.description}</h4>
			</li>
		)
	})
}

interface ConcertProps {
	concert: ConcertType
}

const Concert = ({ concert }: ConcertProps) => {
	const { date, location, program } = concert

	return (
		<ConcertStyles>
			<h2>
				<span className="key">Date:</span> {date}
			</h2>
			<h2>
				<span className="key">Venue:</span> {location.venue} | {location.city}
			</h2>
			{program.length > 0 && (
				<>
					<h2 className="key">Program:</h2>
					<ul>{mapProgram(program)}</ul>
				</>
			)}
			<hr />
		</ConcertStyles>
	)
}

const ConcertStyles = styled.div`
	margin-bottom: 4rem;

	h2,
	h4 {
		font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
			Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
			sans-serif;
		font-weight: normal;
	}

	.key {
		color: lightblue;
	}

	@media screen and (max-width: 740px) {
		h2 {
			font-size: 16px;
		}
		h4 {
			font-size: 12px;
		}
	}
`

export default Concert
