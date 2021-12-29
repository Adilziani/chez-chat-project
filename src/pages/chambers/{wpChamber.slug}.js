import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage} from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import {
  header,
  headerInfo,
  headerPicture,
  fullName,
  chamberSpecies,
  chamberDescription,
  chamberInfo,
  chamberPictures,
  chamberPicture
} from "../../../src/page.module.css"


const ChamberPage = ({
  data: {
    wpChamber: {
      chamberMeta: chamber,
      species: {nodes: species}
    },
  },
}) => {
  const image = getImage(chamber.image.localFile)
  const picture1 = getImage(chamber.pictures.picture1.localFile)
  const picture2 = getImage(chamber.pictures.picture2.localFile)
  const picture3 = getImage(chamber.pictures.picture3.localFile)
  return (
    <Layout pageTitle="Kamers Template">
      <div className={header}>
        <div className={headerInfo}>
          {chamber.chambername}
          <div className={chamberSpecies}>
            {species.map((specie, i) => (
              <span key={i}>
                {specie.name} {i + 1 < species.length && "- "}
              </span>
            ))}
          </div>
          <h1 className={fullName}>{chamber.chambername}</h1>
          <div
          className={chamberDescription} 
          dangerouslySetInnerHTML={{__html: chamber.description}} /> 
          <p><span className={chamberInfo}>Eetplaatsen: </span>{chamber.dinnerplaces}</p>
          <p><span className={chamberInfo}>Extra's: </span>{chamber.extras}</p>
          <p><span className={chamberInfo}>Verstopplaatsen: </span>{chamber.hidingplaces}</p>
          <p><span className={chamberInfo}>Ligplaatsen: </span>{chamber.moorings}</p>
          <p><span className={chamberInfo}>Ruimte voor aantal: </span>{chamber.roomspace}</p>
          <p><span className={chamberInfo}>Krabpalen: </span>{chamber.scratchmarks}</p>
          <p><span className={chamberInfo}>Speelgoed: </span>{chamber.toys}</p>
        </div>
        <GatsbyImage
            className={headerPicture} 
            image={image} 
            alt={chamber.image.altText} />
          </div>
          <div className={chamberPictures}>
          <GatsbyImage
            className={chamberPicture}          
            image={picture1} 
            alt={chamber.pictures.picture1.altText} />
          <GatsbyImage
            className={chamberPicture}
            image={picture2} 
            alt={chamber.pictures.picture2.altText} />
          <GatsbyImage
            className={chamberPicture}
            image={picture3} 
            alt={chamber.pictures.picture3.altText} />
          </div>
    </Layout>
  )
}

export const query = graphql`
query MyQuery($id: String) {
  wpChamber(id: {eq: $id}) {
    chamberMeta {
      chambername
      description
      dinnerplaces
      extras
      hidingplaces
      moorings
      roomspace
      scratchmarks
      toys
      image {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      pictures {
        picture1 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        picture2 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        picture3 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
    species {
      nodes {
        name
      }
    }
  }
}
`

export default ChamberPage