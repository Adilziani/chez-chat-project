import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
// import { StaticImage } from 'gatsby-plugin-image'
import {
  header,
  headerInfo, 
  headerPicture,
  headerTitle,
  CTA,
  section, 
  subtitle,
  chambers,
} from "../../src/page.module.css"
import Chamber from '../components/chamber'

const IndexPage = ({
  data: {
    wpPage: {homePage},
  },
}) => {
  const image = getImage(homePage.headerHome.picture.localFile)
  return (
    <Layout>
      <div className={header}>
        <div className={headerInfo}>
          <h1 className={headerTitle}>{homePage.headerHome.title}</h1>
          <div
          dangerouslySetInnerHTML={{
            __html: homePage.headerHome.description,
          }}
          />
          <a className={CTA} target="__blank" href={homePage.cta.link}>
            {homePage.cta.linktext}
          </a>
        </div>
        <div>
          <GatsbyImage 
            image={image}
            className={headerPicture}
            alt={homePage.headerHome.picture.altText}
          />
        </div>
      </div>
      <div className={section}>
        <h2 className={subtitle}>{homePage.featuredChambers.title}</h2>
          <p>{homePage.featuredChambers.description}</p>
          <div className={chambers}>
              {homePage.featuredChambers.chambers.map(chamber => (
              <Chamber slug={`chambers/${chamber.slug}`} key={chamber.id} chamber={chamber} />
              ))}
        </div>
      </div> 
    </Layout>
  )
}

export const query = graphql`
query {
  wpPage(slug: {eq: "home"}) {
    homePage {
      headerHome {
        description
        title
        picture {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, height: 500, width: 500)
            }
          }
        }
      }
      mainHome {
        title
        description
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, height: 500, width: 500)
            }
          }
        }
        descriptionContainer {
          firstDescriptionContainer {
            groupOne {
              title
              description
            }
            groupTwo {
              title
              description
            }
            groupThree {
              title
              description
            }
          }
          secondDescriptionContainer {
            groupFour {
              title
              description
            }
            groupFive {
              title
              description
            }
            groupSix {
              title
              description
            }
          }
        }
      }
      featuredChambers {
        chambers {
          ... on WpChamber {
            id
            chamberMeta {
              chambername
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, transformOptions: {grayscale: true})
                  }
                }
              }
            }
            slug
          }
        }
        description
        title
      }
      cta {
        link
        linktext
      }
    }
  }
}


`

export default IndexPage