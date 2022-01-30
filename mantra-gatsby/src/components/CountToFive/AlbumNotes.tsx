import React from 'react'
import Image, { FluidObject } from 'gatsby-image'
import { ImageContainer } from '../styles'

const AlbumNotes = ({ image }: { image: FluidObject | FluidObject[] }) => (
	<section id="album-notes">
		<h2>Album Notes</h2>
		<ImageContainer width="400px">
			<Image fluid={image} alt="count to five album cover" />
		</ImageContainer>

		<p>
			Spellbinding and transcendent, Recap’s debut album, Count to Five,
			showcases new generations of powerful music makers giving new breath to
			the world of percussion and contemporary classical music.
		</p>

		<p>
			Recap releases their debut album, Count to Five, on Innova Recordings on
			September 24th 2021 with music by Angélica Negrón, Allison Loggins-Hull,
			Ellen Reid, Lesley Flanigan, Mary Kouyoumdjian, and Caroline Shaw. The
			first track and album’s namesake, written by Angélica Negrón, uses found
			objects to create a unique and engrossing soundscape, while Hammers by
			Allison Loggins-Hull reflects on the sound of New York construction and
			our built environment. Ellen Reid’s Fear | Release is about reframing the
			familiar in a new light, and is built around a five-note phrase that is
			echoed and developed in both melodic and textural ways. The Glacial wash
			of sound on Hedera by Lesley Flanigan is immersive and mesmerizes with
			swirling transformational voice and percussion. Children of Conflict:
			"Samar's Song" composed by Mary Kouyoumdjian takes a haunting and
			heartbreaking story and brings light and hope to our darkest times. Count
			to Five resolves with Caroline Shaw’s Will there be any Stars in my Crown
			which melds histories and traditions into a contemplative space.
		</p>
	</section>
)

export default AlbumNotes
