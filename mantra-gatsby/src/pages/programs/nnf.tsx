import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import { FullScreenCard, ImageContainer } from '../../components/styles'
import SectionHeading from '../../components/SectionHeading'
import { ImageResult } from '../../components/About'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

const IMAGE_QUERY = graphql`
	query {
		nnf: file(relativePath: { eq: "nnf-logo.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`

type Images = {
  nnf: ImageResult
}

const Contact = () => {
  const { nnf } = useStaticQuery<Images>(IMAGE_QUERY)

  return (
    <Layout>
      <SEO title="Necessary Noise Festival" />
      <main>
        <section id="programs">
          <FullScreenCard>
            <SectionHeading>
              <h1>Programs - Necessary Noise Festival</h1>
            </SectionHeading>
            <Container>
              <div className="program">
                <h1>Necessary Noise Festival</h1>
                <WhiteImageContainer width="400px">
                  <Image fluid={nnf.childImageSharp.fluid} />
                </WhiteImageContainer>
                <p>
                  An annual 3-day music festival of workshops, competitions,
                  showcase concerts, and clinics. It is the largest percussion
                  festival on the east coast.
                </p>
                <p>
                  NNF provides an outlet for scholastic, collegiate, and
                  professional musicians to share a wide spectrum of styles,
                  while promoting the art of percussion to the greater
                  community. Past participating schools include Juilliard,
                  Manhattan School of Music, NYU, Stony Brook University, Queens
                  College Gamelan Ensemble, Bard College, William Paterson
                  University, Rowan University, Montclair State University
                  Laptop Orchestra, Rutgers World Music Ensemble, Suny Purchase,
                  Kean, Special Music School, and area high school and middle
                  school programs.
                </p>
              </div>
            </Container>
          </FullScreenCard>
        </section>
      </main>
    </Layout>
  )
}

const WhiteImageContainer = styled(ImageContainer)`
	background: white;
	padding: 20px;
`

const Container = styled.div`
	div.program {
		min-height: 300px;
		margin: 2rem auto 7rem;
		font-weight: 600;

		h1 {
			font-size: 3.5rem;
			color: lightblue;
		}
	}
`

export default Contact
