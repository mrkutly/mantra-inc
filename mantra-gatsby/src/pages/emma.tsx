import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useLayoutEffect } from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

const ObserverTarget = styled.div`
	height: 100vh;
	width: 100vw;
	position: absolute;
	left: 0;
	top: 0;
`

const Emma = () => {
	const observerTarget = useRef<HTMLDivElement | null>(null);
	const [size, setSize] = useState<{ height: number, width: number }>({ height: 0, width: 0 });

	useLayoutEffect(() => {
		if (!observerTarget.current) return;

		const observer = new ResizeObserver(([entry], observer) => {
			if (['height', 'width'].some(side => size[side] !== entry.contentRect[side])) {
				setSize({ height: entry.contentRect.height, width: entry.contentRect.width });
			}
		})

		observer.observe(observerTarget.current);

		return () => {
			if (observerTarget.current)
				observer.unobserve(observerTarget.current);
		}
	}, [observerTarget.current]);

	return (
		<Layout>
			<SEO title="emma" />
			<main>
				<ObserverTarget ref={observerTarget}>
					<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRCuTBKi9N-OND3a3v9Y-_c8KlWAfjdIoVuo38AOz9NLqCU0hUQIjN_F3YgFUPzI3SK0Lnptk0jhXId/embed?start=false&loop=false&delayms=3000&rm=minimal#slide=id.p" width={size.width} height={size.height}></iframe>
				</ObserverTarget>
			</main>
		</Layout>
	)
}

export default Emma
