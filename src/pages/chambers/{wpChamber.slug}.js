import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage} from 'gatsby-plugin-image'
import Layout from '../../components/layout'


const ChamberPage = ({
  data: {
    wpChamber: {chamberMeta: chamber},
  },
}) => {
  const image = getImage(chamber.image.localFile)
  return (
    <Layout pageTitle="Kamers Template">
      <div>
        <GatsbyImage image={image} alt={chamber.image.altText} />
        <h1>{chamber.chambername}</h1>
        <div dangerouslySetInnerHTML={{__html: chamber.description}} /> 
        <p>Eetplaatsen: {chamber.dinnerplaces}</p>
        <p>Extra's: {chamber.extras}</p>
        <p>Verstopplaatsen: {chamber.hidingplaces}</p>
        <p>Ligplaatsen: {chamber.moorings}</p>
        <p>Ruimte voor aantal: {chamber.roomspace}</p>
        <p>Krabpalen: {chamber.scratchmarks}</p>
        <p>Speelgoed: {chamber.toys}</p>
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
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        altText
      }
    }
  }
}


`

export default ChamberPage