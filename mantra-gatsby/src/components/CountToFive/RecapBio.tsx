import React from 'react'
import Image, { FluidObject } from 'gatsby-image'
import { ImageContainer } from '../styles'

const RecapBio = ({ image }: { image: FluidObject | FluidObject[] }) => (
	<section id="recap-bio">
		<h2>Recap</h2>
		<ImageContainer width="400px">
			<Image fluid={image} alt="members of recap" />
		</ImageContainer>
		<p>
			Recap is a new percussion quartet from a new generation of musicians
			dedicated to music reflecting the diverse society we live in today. Arlene
			Acevedo, Alexis Carter, Tiahna Sterling and Aline Vasquez, four musicians
			from Rahway, NJ, forms Recap through music, friendship and a desire to
			share their story. As recent alumni of Mantra Youth Percussion, the
			free-tuition teenage ensemble of Mantra Percussion, Inc., the members of
			Recap worked closely with different music creators, performing both in
			their community as well as nationally, learning skills that would provide
			the groundwork for establishing their own group.
		</p>

		<p>
			Now as a newly-formed professional ensemble, Recap headlines the 2021 New
			Music Gathering in Minneapolis, MN in August. Recap releases their debut
			album “Count to Five” with premiere recordings of music by Angelica
			Negron, Allison Loggins-Hull, Ellen Reid, Lesley Flanigan, Mary
			Kouyoumdjian, and Caroline Shaw. Recap will showcase select pieces from
			the album at the Percussive Arts Society International Convention in
			Indianapolis, IN in November, continuing with winter and spring 2022 dates
			across the country
		</p>
	</section>
)

export default RecapBio
