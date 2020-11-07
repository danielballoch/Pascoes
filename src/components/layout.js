/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import PageTransition from 'gatsby-plugin-page-transitions';

import Nav from "./navigation"
import Footer from "./footer"
import "./layout.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Layout = ({ children, path }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Nav siteTitle={data.site.siteMetadata.title} path={path}/>
      <PageTransition>
      <div
       style={{
          margin: `0 auto`,
          paddingTop: `126px`
        }}
        >
        <main>
        {children}
        </main>
      </div>
      <Footer/>
      </PageTransition>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
