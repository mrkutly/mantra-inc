/* eslint-disable import/no-extraneous-dependencies */
import React, {
	KeyboardEventHandler,
	MutableRefObject,
	useRef,
	useState,
} from 'react'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { linkStyles, Link, PageLink } from './styles'
import { Site } from './Menu'

const SITE_QUERY = graphql`
	query {
		site {
			siteMetadata {
				navLinks {
					id
					href
					display
					partial
					isHash
				}
			}
		}
	}
`

interface HeaderMenuProps {
	color?: string
}

const HeaderMenu = ({ color }: HeaderMenuProps) => {
	const { pathname } = useLocation()
	const { navLinks } = useStaticQuery<Site>(SITE_QUERY).site.siteMetadata
	const [open, setOpen] = useState(false)
	const [active, _setActive] = useState(0)
	const refs = navLinks.map(useRef as () => MutableRefObject<any>)

	const isActive = link =>
		link.href === '/' ? pathname === link.href : pathname.includes(link.href)

	const setActive = (idx: number) => {
		refs[idx].current.focus()
		_setActive(idx)
	}

	const toggleOpen = () => setOpen(!open)
	const handleMenuKeyDown: KeyboardEventHandler = e => {
		if (['Enter', ' '].includes(e.key)) {
			if (!open) setActive(0)
			toggleOpen()
		}
	}
	const handleKeyDown: KeyboardEventHandler = e => {
		if (e.key.includes('Arrow')) e.preventDefault()

		if (e.key === 'ArrowUp' && active > 0) {
			const next = active - 1
			setActive(next)
			refs[next].current.focus()
		}

		if (e.key === 'ArrowDown' && active < navLinks.length - 1) {
			const next = active + 1
			setActive(next)
			refs[next].current.focus()
		}
	}

	return (
		<HeaderMenuStyles className={open ? 'open' : ''} color={color}>
			<div
				className="bars"
				onClick={toggleOpen}
				onKeyDown={handleMenuKeyDown}
				role="button"
				tabIndex={0}
				aria-controls="navbar"
			>
				<div id="one" />
				<div id="two" />
				<div id="three" />
			</div>
			<nav id="navbar">
				<ul role="menubar" aria-label="site navigation">
					{navLinks.map((link, idx) => (
						<li key={link.id}>
							{link.isHash ? (
								<Link
									onKeyDown={handleKeyDown}
									href={link.href}
									role="menuitem"
									ref={refs[idx]}
								>
									{link.display}
								</Link>
							) : (
								<PageLink
									className={isActive(link) ? 'active' : ''}
									onKeyDown={handleKeyDown}
									ref={refs[idx]}
									role="menuitem"
									to={link.href}
									style={{ background: 'transparent' }}
								>
									{link.display}
								</PageLink>
							)}
						</li>
					))}
				</ul>
			</nav>
		</HeaderMenuStyles>
	)
}

const HeaderMenuStyles = styled.div`
	.bars {
		display: none;
	}

	#navbar {
		ul {
			display: flex;
			color: white;
			list-style: none;

			justify-content: flex-end;

			li {
				margin-left: 20px;

				a {
					color: ${({ color }) => color ?? 'white'};
				}
			}
		}
	}

	@media screen and (max-width: 900px) {
		.bars {
			position: fixed;
			right: 40px;
			top: 32px;
			height: 32px;
			width: 40px;
			display: grid;
			align-items: center;
			z-index: 10;

			div {
				height: 4px;
				width: 40px;
				background: ${({ color }) => color ?? 'white'};
				transition: transform 0.1s ease;
			}
		}

		span[role='button'] {
			${linkStyles}
			font-weight: normal;
		}

		#navbar {
			display: none;
			text-align: center;
			padding-top: 20vh;
			background: black;
			color: white;
			z-index: 10;
		}

		&.open {
			z-index: 102;
			height: 100vh;
			width: 100vw;
			position: fixed;
			top: 0;
			left: 0;
			background: black;

			#navbar {
				display: block;

				ul {
					list-style: none;
					font-weight: 600;
					padding-left: none;
					display: block;
					margin: 0;

					li a {
						color: white;
					}
				}
			}

			.bars {
				div {
					background: white;
				}
				#one {
					transform: rotate(45deg) translate(6px, 9px);
				}
				#two {
					transform: rotate(-45deg);
				}
				#three {
					transform: rotate(45deg) translate(-10px, -6px);
				}
			}
		}
	}
`

export default HeaderMenu
