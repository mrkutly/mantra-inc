import React from "react"
import { AlbumPlayerStyles } from "../styles"
import { PlayerProps } from "./mediaTypes"
import LazyIFrame from "./LazyIFrame"

const BandcampPlayer = ({ album }: PlayerProps) => {
	return (
		<AlbumPlayerStyles className="bandcamp">
			<LazyIFrame
				title={album.title}
				style={{ border: "0" }}
				src={album.embed}
				seamless
			>
				<a href={album.link}>{album.title}</a>
			</LazyIFrame>
		</AlbumPlayerStyles>
	)
}

export default BandcampPlayer
