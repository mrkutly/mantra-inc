import React, { HTMLProps } from "react"
import useLazyIframe from "../../hooks/useLazyIframe"

interface LazyFrameProps extends HTMLProps<HTMLIFrameElement> {}

const LazyIFrame: React.FC<LazyFrameProps> = ({ children, src, ...rest }) => {
	useLazyIframe()
	return (
		<iframe loading="lazy" data-src={src} {...rest} className="lazy-loaded">
			{children}
		</iframe>
	)
}

export default LazyIFrame
