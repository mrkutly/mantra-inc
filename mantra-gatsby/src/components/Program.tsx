import React from 'react'
import { endsWith, groupBy } from 'lodash'
import styled from 'styled-components'
import { ConcertProgram } from '../types'
import { Link } from './styles'


interface ProgramProps {
  program: ConcertProgram
}

const roleName = (role: string, collaborators: unknown[]) => {
  if (endsWith(role, 'y')) return `${role.substring(0, role.length - 1)}ies`
  if (collaborators.length > 1) return `${role}s`
  return role
}

export const Program = ({ program }: ProgramProps) => {
  const roles = groupBy(program.collaborators, 'role.title')

  return <ProgramContainer>
    <h1>{program.title}</h1>
    {Object.entries(roles).map(([role, collaborators]) => (
      <div className="collaborators" key={role}>
        {roleName(role, collaborators)}: {collaborators.map((c) => c.name).join(', ')}
      </div>
    ))}

    <div className="duration">Duration: {program.durationInMinutes} minutes</div>

    <div className="instrumentation">{program.instrumentations.map(({ instruments }) => instruments).join('; ')}</div>

    <div className="description">{program.description}</div>

    <Link href={program.link} rel="noopener noreferrer nofollow">Click here for information, audio, video, and more.</Link>
  </ProgramContainer>
}

const ProgramContainer = styled.div`
  h1 {
    font-size: 3.5rem;
    text-decoration: underline;
    margin-bottom: 0;
  }

  .collaborators, .duration, .instrumentation {
    font-family: 'Bebas Neue';
    font-size: 2rem;
  }

  .instrumentation, .description {
    margin: 2rem 0;
  }
`
