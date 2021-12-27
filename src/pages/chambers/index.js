import * as React from 'react'
import {gatsby} from 'gatsby'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
const ChambersPage = ({data: {allWpChamber: {edges}}}) => {
  return (
    <Layout pageTitle="Chambers of Chez Chat!">
      {edges.map((item) => {
        const chamber = item.node.chamberMeta;
        const slug = item.node.slug;
        return <Link to={`/chambers/${slug}`}>
        <p key={item.node.id}>{chamber.chambername}</p>
        </Link> 
      })}
    </Layout>
  )
}


export const query = graphql `
query  {
  allWpChamber {
    edges {
      node {
        chamberMeta {
          chambername
          description
          extras
        }
        id
        slug
      }
    }
  }
}

`
export default ChambersPage