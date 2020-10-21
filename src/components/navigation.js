import React, {Component, useState} from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"


const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
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
                    <button className="nav_menu_btn" onClick={() => setMenuOpen(!menuOpen)}>menu</button>
                </div>
                <div className={menuOpen ? "nav_menu" : "nav_menu_closed"}></div>
                <div className={menuOpen ? "nav_dim" : ""}></div>
            </header>
         )}
      />
    )
}


export default Navigation
