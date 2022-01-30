import React from "react"
import { AlbumPlayerStyles } from "../styles"
import { PlayerProps } from "./mediaTypes"
import LazyIFrame from "./LazyIFrame"

const WNYCPlayer = ({ album }: PlayerProps) => {
	return (
		<AlbumPlayerStyles className="wnyc">
			<LazyIFrame title={`${album.title}`} scrolling="no" src={`${album.url}`}>
				<a href={`${album.href}`}>{album.title}</a>
			</LazyIFrame>
		</AlbumPlayerStyles>
	)
}

export default WNYCPlayer
