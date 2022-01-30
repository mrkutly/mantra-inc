import React from 'react'
import styled from 'styled-components'

const TrackListStyles = styled.ol`
	.note {
		color: var(--lightpink);
		font-size: 0.9em;
	}
`

const TrackList = () => (
	<TrackListStyles>
		<li>Count to Five - Angélica Negrón (6:17)</li>

		<li>
			Hammers - Allison Loggins-Hull (5:33)
			<div className="note">Tiahna Sterling - Flute</div>
		</li>

		<li>Fear | Release - Ellen Reid (8:31) </li>

		<li>
			Hedera - Lesley Flanigan (20:25)
			<div className="note">Lesley Flanigan - voice</div>
		</li>

		<li>
			Children of Conflict: "Samar's Song" - Mary Kouyoumdjian (5:11)
			<div className="note">Andie Tanning - violin</div>
		</li>

		<li>
			Will there be any Stars in my Crown - Caroline Shaw (3:58)
			<div className="note">Caroline Shaw - Voice</div>
			<br />
			<div className="note">with TRANSIT New Music</div>
			<ul>
				<li className="note">Andie Tanning - violin/voice</li>
				<li className="note">Evelyn Wadkins - cello/voice</li>
				<li className="note">Sara Budde - clarinets/voice</li>
				<li className="note">David Friend - piano/voice</li>
				<li className="note">Joe Bergen - percussion/voice</li>
			</ul>
		</li>
	</TrackListStyles>
)

export default TrackList
