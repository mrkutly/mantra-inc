import React from 'react'
import styled from 'styled-components'
import { ConcertProgram } from '../types'
import { Program } from './Program'

interface ProgramsListProps {
  programs: ConcertProgram[]
}

export const ProgramsList = ({ programs }: ProgramsListProps) => (
  <ListStyles>
    {programs.map((p) => (
      <li key={p.id}><Program program={p} /></li>
    ))}
  </ListStyles>
)


const ListStyles = styled.ul`
	list-style: square;
	li {
		padding-left: 2rem;
    margin: 100px 0;
	}
`