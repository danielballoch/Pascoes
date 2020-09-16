import React, {Component} from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"


const Footer = () => {
    return (          
        <StaticQuery
        query={graphql`
            query Footer {
              prismicFooter {
                data {
                   phone {
                       text
                   }
                   email {
                       text
                   }
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
             <div>
            <footer className='footer'>
                  {console.log(data)}
                <div>
                    {data.prismicFooter.data.phone.text} | {data.prismicFooter.data.email.text}
                </div>
                
                <Link to="/services" className="footer_logo">
                    <Img fluid={data.prismicFooter.data.logo.fluid}/>
                </Link>


                <div className='footer-nav'>
                    <Link to="/" className="footer_link">
                    Home
                    </Link>
                    <Link to="/services" className="footer_link">
                    Services
                    </Link>
                    <Link to="/about" className="footer_link">
                    About
                    </Link>
                    <Link to="/contact" className="footer_link">
                    Contact
                    </Link>
                </div>
                
            </footer>
            <div className="footer_copyright">
            © 2020 - Pascoes Plumbing Ltd
            </div>
            

            
            </div>
         )}
      />
    )
}


export default Footer
