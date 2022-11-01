import React from 'react'
import styled from "styled-components"
import { Group } from "../types"
import { colorChange } from "./styles/animations"

interface GroupOption {
  key: Group
  text?: string
}

interface GroupButtonsProps {
  groups: GroupOption[]
  activeGroup: Group
  onSelectGroup: (g: Group) => void
}

export const GroupButtons = ({ groups, activeGroup, onSelectGroup }: GroupButtonsProps) => {
  return <div>
    {groups.map(({ key, text }) => (
      <ButtonStyles
        key={`${key}-button`}
        type="button"
        className={activeGroup === key ? 'active' : ''}
        onClick={() => {
          onSelectGroup(key)
        }}
      >
        {text ?? key}
      </ButtonStyles>
    ))}
  </div>
}

const ButtonStyles = styled.button`
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
`