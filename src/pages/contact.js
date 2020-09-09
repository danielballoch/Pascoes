import React, {Component} from "react"
import { graphql, Link } from "gatsby"
import PropTypes from 'prop-types'

import Layout from "../components/layout"
import SEO from "../components/seo"

class Contact extends Component {
    
    render(){
        const {
            data: {contact},
        } = this.props
        console.log(contact)
        return(
            <Layout>
            <SEO title="Page two" />
            <h1>{contact.data.header.text}</h1>
            <p>Welcome to page 2</p>
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
        }
    }
}
`