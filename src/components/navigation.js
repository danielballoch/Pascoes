import React, {Component} from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"


const Navigation = () => {
    return (          
        <StaticQuery
        query={graphql`
            query Navigation {
              prismicNavigation {
                data {
                   logo {
                       fluid {
                            ...GatsbyPrismicImageFluid
                            }
                       }
                   }
                }
             }
         `}
         render={data => (
            <header className='nav'>
                  {console.log(data)}
                <div className='nav-div'>
                    <Link to="/" className="nav_link">
                    Home
                    </Link>
                    <Link to="/services" className="nav_link">
                    Services
                    </Link>
                    <Link to="/services" className="nav_logo">
                    <Img fluid={data.prismicNavigation.data.logo.fluid}/>
                    </Link>
                    <Link to="/about" className="nav_link">
                    About
                    </Link>
                    <Link to="/contact" className="nav_link">
                    Contact
                    </Link>
                </div>
            </header>
         )}
      />
    )
}


export default Navigation
