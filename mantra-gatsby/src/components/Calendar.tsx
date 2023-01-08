import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { groupBy } from 'lodash/fp'
import { FullScreenCard } from './styles'
import SectionHeading from './SectionHeading'
import Concert from './Concert'
import CalendarYears from './CalendarYears'
import { Concert as IConcert, Group } from '../types'
import { colorChange } from './styles/animations'
import { GroupButtons } from './GroupButtons'


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
	const [group, setGroup] = useState<Group>('mantra')
	const grouped = useMemo(() => {
		const groupedByYear = groupBy((x: IConcert) => String(new Date(x.dateFrom).getFullYear()))
		return groupedByYear(api[group])
	}, [group, api])
	const yearsDesc = useMemo(() => Object.keys(grouped).sort(descending), [grouped])
	const thisYear = String(new Date(Date.now()).getFullYear())
	const latestYear = yearsDesc[0] ?? thisYear;
	const [year, setYear] = useState(latestYear);

	const handleGroupSelection = (group: Group) => {
		setGroup(group)
		setYear(latestYear)
	}

	return (
		<SectionStyles id="schedule">
			<FullScreenCard>
				<SectionHeading>
					<h1>Schedule</h1>
				</SectionHeading>

				<GroupButtons
					groups={[{ key: 'mantra' }, { key: 'mantraYouth', text: 'mantra youth' }, { key: 'recap' }]}
					onSelectGroup={handleGroupSelection}
					activeGroup={group} />

				<div className="grid">
					<CalendarYears
						active={year}
						setYear={setYear}
						options={yearsDesc}
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
