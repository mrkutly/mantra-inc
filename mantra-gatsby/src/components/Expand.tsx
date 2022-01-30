import React, { useState } from 'react'
import styled from 'styled-components'
import { colorChange } from './styles/animations'

interface ColorsProps {
	primary: string
	background: string
}

interface ExpandProps {
	active: string
	options: string[]
	setActive: (_: string) => void
	colors: ColorsProps
}

const Expand = ({ active, colors, options, setActive }: ExpandProps) => {
	const [showOptions, setShowOptions] = useState<boolean>(false)
	const toggleShowOptions = () => setShowOptions(!showOptions)

	const handleSelect = selection => {
		toggleShowOptions()
		setActive(selection)
	}

	return (
		<ExpandStyles colors={colors}>
			<span
				className="active"
				onClick={toggleShowOptions}
				role="button"
				tabIndex={0}
				onKeyDown={e => ['Enter', ' '].includes(e.key) && toggleShowOptions()}
			>
				{active}
			</span>
			{showOptions && (
				<ul>
					{options
						.filter(opt => opt !== active)
						.map((opt, idx) => (
							<li className="options" key={`${opt}-${idx}`}>
								<span
									onClick={() => handleSelect(opt)}
									onKeyPress={e =>
										['Enter', ' '].includes(e.key) && handleSelect(opt)
									}
									role="button"
									tabIndex={0}
								>
									{opt}
								</span>
							</li>
						))}
				</ul>
			)}
		</ExpandStyles>
	)
}

const ExpandStyles = styled.div<{ colors: ColorsProps }>`
	display: inline;
	position: relative;

	ul {
		list-style: none;
		position: absolute;
		z-index: 2;
		background: ${({ colors }) => colors.background};
		width: 191px;
		padding: 12px 12px 0;
		text-align: center;
		margin: 0;
		color: ${({ colors }) => colors.primary};
	}

	li,
	span {
		cursor: pointer;
	}

	.active {
		animation: ${colorChange} 3s infinite linear;
	}

	.options {
		--rotate: -4deg;
		--scale: 1;
		transform: rotate(var(--rotate)) scale(var(--scale));

		&:hover,
		&:focus {
			color: ${({ colors }) => colors.background};
			background-color: ${({ colors }) => colors.primary};
		}
	}
`

export default Expand
