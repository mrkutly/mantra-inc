import React from "react"
import styled, { css, keyframes } from "styled-components"
import Concert from "./Concert"
import colors from "./styles/colors"

class Year extends React.Component {
	state = {
		active: false,
		initialLoad: true,
	}

	handleClick = e => {
		this.setState(prevState => {
			if (prevState.initialLoad) {
				return { active: !prevState.active, initialLoad: false }
			} else {
				return { active: !prevState.active }
			}
		})
	}

	mappedConcerts(concerts, year) {
		return concerts.map((concert, i) => {
			return <Concert concert={concert} key={`${year}-concert-${i}`} />
		})
	}

	partitionConcerts(concerts, year) {
		const past = []
		const future = []
		const today = new Date(Date.now())
		today.setMilliseconds(0)
		today.setSeconds(0)
		today.setMinutes(0)
		today.setHours(0)

		concerts.forEach(concert => {
			// get the date from props and format it to compare
			const { date } = concert.props.concert
			const concertDate = new Date(`${date}, ${year}`)

			if (concertDate >= today) {
				future.push(concert)
			} else {
				past.push(concert)
			}
		})
		return [future, past]
	}

	render() {
		const { active, initialLoad } = this.state
		const { year, concerts } = this.props.year
		const currentYear = new Date().getFullYear().toString()
		const mapped = this.mappedConcerts(concerts, year)
		const [future, past] =
			year === currentYear ? this.partitionConcerts(mapped, year) : [[], []]

		return (
			<React.Fragment>
				{// if it is the current year, show the upcoming concerts and the
				// past concerts seperately
				year === currentYear ? (
					<React.Fragment>
						{!!future.length && (
							<>
								<YearStyles
									onKeyPress={e => e.which === 13 && this.handleClick(e)}
									active={true}
								>
									<h1>Upcoming in {currentYear}</h1>
								</YearStyles>
								<ConcertList active={true}>{future}</ConcertList>
							</>
						)}
						{!!past.length && (
							<div id={year}>
								<YearStyles
									onKeyPress={e => e.which === 13 && this.handleClick(e)}
									tabIndex={0}
									onClick={this.handleClick}
									active={active}
								>
									<YearHeader>{year}</YearHeader>
								</YearStyles>
								<Container>
									<ConcertList active={active} initialLoad={initialLoad}>
										{past}
									</ConcertList>
								</Container>
							</div>
						)}
					</React.Fragment>
				) : (
					// else, just show the mapped concerts
					<div id={year}>
						<YearStyles
							onKeyPress={e => e.which === 13 && this.handleClick()}
							tabIndex={0}
							onClick={this.handleClick}
							active={active}
						>
							<YearHeader>{year}</YearHeader>
						</YearStyles>
						<Container>
							<ConcertList active={active} initialLoad={initialLoad}>
								{mapped}
							</ConcertList>
						</Container>
					</div>
				)}
			</React.Fragment>
		)
	}
}

const grow = keyframes`
   from {
      max-height: 0vh;
      opacity: 0;   
   }
   99% {
      max-height: 100vh;
      opacity: 1;
   }
   to {
      max-height: 10000vh;
      opacity: 1;
   }
`

const shrink = keyframes`
   from {
      max-height: 10000vh;
      opacity: 1;
   }
   1% {
      max-height: 100vh;
      opacity: 1;
   }
   to {
      max-height: 0vh;
      opacity: 0;   
   }
`

const Container = styled.div`
	padding: 0 5vh;
`

interface StyledProps {
	active: boolean
	initialLoad?: boolean
}

const YearStyles = styled.span<StyledProps>`
	color: black;
	${props =>
		props.active &&
		`text-shadow: 3px 3px var(--lightblue), -1px -1px var(--lightblue), 6px 6px var(--lightpink);`}
	text-decoration: none;
	cursor: default;
	width: -webkit-fit-content;
	width: -moz-fit-content;
	width: fit-content;

	:focus {
		outline: none;
		color: var(--green);
	}
`

const ConcertList = styled.ul<StyledProps>`
	display: block;
	overflow: hidden;
	max-height: ${props => (props.active ? "10000vh" : "0vh")};
	margin: ${props => (props.active ? "16px auto" : "0")};
	${props => {
		switch (true) {
			case props.initialLoad:
				return null

			case props.active:
				return _grow

			default:
				return _shrink
		}
	}};
`

const _grow = css`
	animation: ${grow} 0.5s linear;
`

const _shrink = css`
	animation: ${shrink} 0.5s linear;
`

const YearHeader = styled.h1`
	width: fit-content;
	margin: 20px 0 0;
	cursor: pointer;
	transition: letter-spacing 0.5s cubic-bezier(0.075, 0.82, 0.165, 1),
		text-shadow 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

	:hover {
		letter-spacing: 4px;
		color: var(--green);
	}
`

export default Year
