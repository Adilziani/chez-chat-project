import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
    wrapper,
    image,
    chamberInfo,
    chamberName,
} from "./chamber.module.css"

export const Chamber = ({ chamber, slug }) => {
  const profile = getImage(chamber.chamberMeta.image.localFile)
  return (
    <Link
    className={wrapper} 
    to={slug}>
      <GatsbyImage
      className={image}
        image={profile}
        alt={chamber.chamberMeta.altText}
      />
      <div className={chamberInfo}>
        <p className={chamberName}>
          {chamber.chamberMeta.chambername}
        </p>
      </div>
    </Link>
  )
}

export default Chamber;