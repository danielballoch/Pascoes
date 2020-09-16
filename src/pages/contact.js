import React, {Component} from "react"
import { graphql, Link } from "gatsby"
import PropTypes from 'prop-types'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Contact extends Component {
    
    render(){
        const {
            data: {contact},
        } = this.props
        console.log(this.props)
        return(
            <Layout>
            <SEO title="Page two" />
            <Img alt={contact.data.image.alt} fluid={contact.data.image.fluid}/>
            <h1>{contact.data.header.text}</h1>
            <p>
            What is Lorem Ipsum?

            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
            Why do we use it?
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
            <Link to="/">Go back to the homepage</Link>
            </Layout>
        )
    }
} 
export default Contact

Contact.propTypes = {
    data: PropTypes.shape({
        contact: PropTypes.shape({
            data: PropTypes.shape({
                header: PropTypes.shape({
                    text: PropTypes.string.isRequired
                }),
                image: PropTypes.shape({
                    fluid: PropTypes.shape({
                        aspectRatio: PropTypes.number.isRequired,
                        src: PropTypes.string.isRequired,
                        srcSet: PropTypes.string.isRequired,
                        sizes: PropTypes.string.isRequired,
                        base64: PropTypes.string,
                        tracedSVG: PropTypes.string,
                        srcWebp: PropTypes.string,
                        srcSetWebp: PropTypes.string,
                        media: PropTypes.string,
                        maxWidth: PropTypes.number,
                        maxHeight: PropTypes.number,
                    })
                })
            })
        })

    }).isRequired,
}
    

export const pageQuery = graphql`
query IndexQuery {
    contact: prismicContact {
        data {
            header {
                text
            }
            image{
                alt
                fluid{
                    ...GatsbyPrismicImageFluid
                }
            }
        }
    }
}
`