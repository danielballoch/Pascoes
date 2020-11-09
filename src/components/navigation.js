import React, {Component, useState} from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"



const Navigation = ({ path }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activePage, setActivePage] = useState(path);
    const pages = ["Home", "Services","About", "Contact"];
    const pagesLinks = ["/", "/services/", "/about/", "/contact/"]
    console.log(activePage);
    return (          
        <StaticQuery
        query={graphql`
            query Navigation {
              prismicNavigation {
                data {
                   logo {
                       fluid {
                            ...GatsbyPrismicImageFluid_noBase64
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
                    <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="hamburger-box">
                            <span className={menuOpen ? "hamburger-inner hamburger-inner-active" : "hamburger-inner"}></span>
                        </span>
                    </button>
                </div>
                <div className={menuOpen ? "nav_menu" : "nav_menu_closed"}>             
                    <div className="nav_menu_links">
                    {pages.map((service, i) => (
                        <Link className={activePage === pagesLinks[i] ? "active_nav" : ""} to={pagesLinks[i]}>{service}</Link>
                    ))}
                    </div>
                </div>
                <div className={menuOpen ? "nav_dim" : ""}></div>
            </header>
         )}
      />
    )
}


export default Navigation
