import * as React from 'react'
import {gatsby} from 'gatsby'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
const ChambersPage = ({data: {allWpChamber: {edges}}}) => {
  return (
    <Layout pageTitle="Chambers of Chez Chat!">
      {edges.map((item) => {
        const chamber = item.node.chamberMeta;
        return <p key={item.node.id}>{chamber.description}</p>
      })}
    </Layout>
  )
}


export const query = graphql `
query {
  allWpChamber {
    edges {
      node {
        id
        chamberMeta {
          number
          description
        }
      }
    }
  }
}
`
export default ChambersPage