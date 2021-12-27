import * as React from 'react'
import Footer from './footer'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
  container, 
  nav, 
  navLinks, 
  navLinkItem, 
  navLinkText, 
  siteTitle 
} from './layout.module.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      wpPage(slug: {eq: "contact"}) {
        contactPage {
          companyInformation {
            adress
            city
            postcode
          }
          socials {
            facebook
            instagram
            twitter
          }
        }
      }
    }
  `)

  return (
    <>
      <div className={container}>
        <title>{data.site.siteMetadata.title}</title>
        <nav className={nav}>
          <header className={siteTitle}>
            {data.site.siteMetadata.title}
          </header>
          <ul className={navLinks}>
          <li>
          </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/">
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/about">
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/chambers">
                Chambers
              </Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </div>
      <Footer 
         siteTitle={data.site.siteMetadata.title}
         companyInfo={data.wpPage.contactPage.companyInformation}
      />
    </>
  )
}

export default Layout