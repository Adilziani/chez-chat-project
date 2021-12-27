import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'

const ChamberPage = ({data: {wpChamber: {chamberMeta: chamber}}}) => {
  return (
    <Layout pageTitle="Kamers Template">
      <div>
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
query ($id: String) {
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
    }
  }
}

`

export default ChamberPage