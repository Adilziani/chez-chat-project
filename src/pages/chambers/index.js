import * as React from 'react'
import {GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Chamber from '../../components/chamber'
import {
  hero,
  section,
  subtitle,
  chambers,
  description } from "../../../src/page.module.css"
const ChambersPage = ({
  data: {
    allWpChamber: {edges: chamberInfo},
  wpPage: { ChamberPage },
},
}) => {

  const image = getImage(ChamberPage.headerChamber.image.localFile)
  return (
    <Layout pageTitle="Chambers of Chez Chat!">
      <GatsbyImage 
      className={hero}
      image={image}
      alt={ChamberPage.headerChamber.image.altText}
      />
      <div className={section}>
        <h2 className={subtitle}>{ChamberPage.headerChamber.title}</h2>
        <div
        className={description} 
        dangerouslySetInnerHTML={{
          __html: ChamberPage.headerChamber.description
        }}
        />
        <div className={chambers}>
          {chamberInfo.map(({node: chamber}) => (
           <Chamber key={chamber.id} slug={chamber.slug} chamber={chamber} /> 
          ))}
        </div>
      </div>
    </Layout>
  )
}


export const query = graphql `
query {
  wpPage(slug: {eq: "chambers"}) {
    ChamberPage {
      headerChamber {
        title
        description
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
          altText
        }
      }
    }
  }
  allWpChamber {
    edges {
      node {
        chamberMeta {
          chambername
          description
          roomspace
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, transformOptions: {grayscale: true})
              }
            }
            altText
          }
        }
        slug
        id
      }
    }
  }
}
`
export default ChambersPage