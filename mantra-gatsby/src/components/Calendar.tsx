import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { groupBy } from 'lodash/fp'
import { FullScreenCard } from './styles'
import SectionHeading from './SectionHeading'
import Concert from './Concert'
import CalendarYears from './CalendarYears'
import { Concert as IConcert } from '../types'
import { colorChange } from './styles/animations'


export const SCHEDULE_FRAGMENT = graphql`
	fragment Schedule on API_Concert {
		dateFrom 
		dateTo 
		location {
			venue 
			city 
			support
		}
		program {
			title
			description
			composer
		}
	}
`


export const CALENDAR_QUERY = graphql`
	query {
		api {
			mantra: concerts(where: { group: { equals: "mantra" } }) {
				...Schedule
			}
			mantraYouth: concerts(where: { group: { equals: "mantrayouth" } }) {
				...Schedule
			}
			recap: concerts(where: { group: { equals: "recap" } }) {
				...Schedule
			}
		}
	}
`

interface CalendarResult {
	api: {
		mantra: IConcert[]
		mantraYouth: IConcert[]
		recap: IConcert[]
	}
}

const descending = (a, b) => (a > b ? -1 : 1)

const Calendar = () => {
	const { api } = useStaticQuery<CalendarResult>(CALENDAR_QUERY)
	const [group, setGroup] = useState<'mantra' | 'mantraYouth' | 'recap'>('mantra')
	const grouped = useMemo(() => {
		const groupedByYear = groupBy((x: IConcert) => String(new Date(x.dateFrom).getFullYear()))
		return groupedByYear(api[group])
	}, [group, api])
	const thisYear = String(new Date(Date.now()).getFullYear())
	const [year, setYear] = useState(thisYear)

	return (
		<SectionStyles id="schedule">
			<FullScreenCard>
				<SectionHeading>
					<h1>Schedule</h1>
				</SectionHeading>

				<div className="group-buttons">
					{(['mantra', 'mantraYouth', 'recap'] as const).map(groupName => (
						<button
							key={`${groupName}-button`}
							type="button"
							className={group === groupName ? 'active' : ''}
							onClick={() => {
								setGroup(groupName)
								setYear(thisYear)
							}}
						>
							{groupName}
						</button>
					))}
				</div>

				<div className="grid">
					<CalendarYears
						active={year}
						setYear={setYear}
						options={Object.keys(grouped).sort(descending)}
					/>
					<div className="shows">
						{grouped[year]
							? grouped[year].map(show => (
								<Concert concert={show} key={JSON.stringify(show)} />
							))
							: 'Nothing on the books for this year yet. Come back later.'}
					</div>
				</div>
			</FullScreenCard>
		</SectionStyles>
	)
}

const SectionStyles = styled.section`
	.shows {
		padding: 20px;
	}

	.grid {
		display: grid;
		grid-template-columns: 100px auto;
	}

	.group-buttons {
		margin: 2rem 0;
	}

	button {
		margin-right: 2rem;
		cursor: pointer;
		background: transparent;
		color: white;
		border: none;
		font-weight: 600;
		font-size: 2.5rem;
		font-family: 'Bebas Neue', Arial, Helvetica, sans-serif;

		&.active {
			color: var(--lightblue);
		}

		&:hover {
			animation: ${colorChange} 7s infinite;
		}
	}

	@media screen and (max-width: 740px) {
		.grid {
			grid-template-columns: 50px auto;
		}

		.group-buttons {
			margin: 3rem 0;
		}

		button {
			font-size: 1.8rem;
			margin-right: 0;
		}
	}
`

export default Calendar
