// import React from 'react'
// import { Link } from 'gatsby'
// import styled from 'styled-components'
// import { borderBottomColorChange } from '../styles/animations'

// const Layout = props => (
// 	<Container>
// 		<NavBar>
// 			<Band>
// 				<Link
// 					to="/mantrayouth/"
// 					style={{ textDecoration: 'none' }}
// 					activeClassName="active"
// 					partiallyActive={false}
// 				>
// 					| mantra youth percussion |
// 				</Link>
// 			</Band>
// 			<BandMember>
// 				<Link
// 					to="/mantrayouth/necessary-noise-festival/"
// 					style={{ textDecoration: 'none' }}
// 					activeClassName="active"
// 				>
// 					necessary noise festival
// 				</Link>
// 			</BandMember>
// 			<Divider>|</Divider>
// 		</NavBar>
// 		<Content>{props.children}</Content>
// 	</Container>
// )

// const Container = styled.div`
// 	max-width: 1300px;
// 	margin: 70px auto;
// 	display: grid;
// 	grid-template-rows: 3vh 10vh 5fr;

// 	@media (max-width: 900px) {
// 		max-width: 1300px;
// 		margin: 50px auto;
// 		display: flex;
// 		flex-direction: column;
// 	}
// `

// const NavBar = styled.div`
// 	line-height: 3em;
// 	grid-row-start: 2;

// 	@media (max-width: 900px) {
// 		max-width: 360px;
// 		margin: 30px auto;
// 		font-size: 0.8em;
// 	}

// 	a {
// 		color: black;
// 	}
// `
// const Content = styled.div`
// 	grid-row-start: 3;
// `

// const Band = styled.span`
// 	display: inline-block;
// 	font-weight: bold;
// 	font-size: 2em;
// 	cursor: pointer;

// 	@media screen and (max-width: 900px) {
// 		font-size: 1.8em;
// 		display: block;
// 		text-align: center;
// 	}

// 	a {
// 		display: inline-block;
// 	}
// 	a.active,
// 	a:hover {
// 		animation: ${borderBottomColorChange} 2.5s linear infinite;
// 	}
// `

// const BandMember = styled.span`
// 	display: inline-block;
// 	margin: 0 20px;
// 	font-weight: 200;
// 	letter-spacing: 2px;
// 	font-size: 1.5em;
// 	cursor: pointer;

// 	a {
// 		display: inline-block;
// 	}

// 	a.active,
// 	a:hover {
// 		font-weight: 550;
// 		animation: ${borderBottomColorChange} 2.5s linear infinite;
// 	}
// `

// const Divider = styled.span`
// 	font-size: 1.5em;

// 	@media (max-width: 900px) {
// 		display: none;
// 	}
// `

// export default Layout
