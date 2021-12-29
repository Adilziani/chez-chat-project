// Stap 1: Importeer React
import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import {
  header,
  headerInfo,
  headerPicture,
  subtitle,
  missionSection,
  missionInfo,
} from "../page.module.css"
// Step 2: Definieer je component
const AboutPage = ({
  data: {
    wpPage: {
      aboutPage: {aboutHeader, mission},
    },
  },
}) => {
  const imageHeader = getImage(aboutHeader.image.localFile)
  const imageMission = getImage(mission.banner.localFile)
  return (
    <Layout pageTitle="About us">
        <div className={header}>
          <div className={headerInfo}>
            <h2 className={subtitle}>{aboutHeader.title}</h2>
            <div
            dangerouslySetInnerHTML={{
              __html: aboutHeader.description,
            }}
            />
          </div>
          <GatsbyImage
          className={headerPicture} 
          image={imageHeader}
          alt={aboutHeader.image.altText}
          />
        </div>
        <div className={missionSection}>
          <GatsbyImage
          className={headerPicture} 
          image={imageMission}
          alt={mission.banner.altText}
          />
          <div className={missionInfo}>
            <h2 className={subtitle}>{mission.title}</h2>
            <div 
            dangerouslySetInnerHTML={{
              __html: mission.description,
            }}
            />
          </div>
        </div>
    </Layout>
  )
}
// Stap 3: Exporteer je component
export default AboutPage

export const query = graphql`
query {
  wpPage(slug: {eq: "about"}) {
    aboutPage {
      aboutHeader {
        title
        description
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100)
            }
          }
        }
      }
      mission {
        title
        description
        banner {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100)
            }
          }
        }
      }
    }
  }
}
`
