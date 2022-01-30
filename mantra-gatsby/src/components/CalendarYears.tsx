import React from 'react'
import styled from 'styled-components'
import { colorChange } from './styles/animations'

const CalendarYears = ({ active, options, setYear }) => (
	<CalendarYearsStyles>
		<ul>
			{options.map((opt, idx) => (
				<li
					className={active === opt ? 'active option' : 'option'}
					key={`${opt}-${idx}`}
				>
					<span
						onClick={() => setYear(opt)}
						onKeyPress={e => ['Enter', ' '].includes(e.key) && setYear(opt)}
						role="button"
						tabIndex={0}
					>
						{opt}
					</span>
				</li>
			))}
		</ul>
	</CalendarYearsStyles>
)

const CalendarYearsStyles = styled.div`
	display: inline;
	position: relative;

	ul {
		list-style: none;
		width: 100px;
		padding: 12px 12px 0 0;
		text-align: center;
		margin: 0;
		font-family: 'Bebas Neue', Arial, Helvetica, sans-serif;
		font-size: 2.5rem;
	}

	li,
	span {
		cursor: pointer;
		padding-left: 0;
		padding-right: 0;
	}

	.active {
		animation: ${colorChange} 3s infinite linear;
	}

	.option:hover,
	.option:focus {
		color: black;
		background-color: white;
	}

	@media screen and (max-width: 740px) {
		ul {
			width: 50px;
			padding: 12px 0 0 0;
			font-size: 1.8rem;
		}
	}
`

export default CalendarYears
