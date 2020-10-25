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
            <Layout path={this.props.location.pathname}>
                <div className="max_width">
                    <SEO title="Contact" />
                    <h1 className="hero_text">{contact.data.header.text}</h1>

                    <div className="contact_us">
                    <div className="contact_us_body box_shadow">{contact.data.body.text}</div>
                    <div className="contact_us_details">
                        <a>{contact.data.phone.text}</a><a>{contact.data.email.text}</a>
                    </div>
                    </div>

                    <form className="contact_form2">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Your name.."/>

                        <label for="email">Email:</label>
                        <input type="text" id="email" name="email" placeholder="Your email.."/>

                        <label for="phone">Phone:</label>
                        <input type="text" id="phone" name="phone" placeholder="Your phone number.."/>

                       

                        <label for="subject">Enquiry:</label>
                        <textarea id="subject" name="subject" placeholder="How can we help.." ></textarea>
                        {/* <p>Our reply time is generally one business day, for a faster response please call 027 727 2639.</p> */}
                        <input className="contact_btn2" type="submit" value="Send Message"/>

                    </form>
                </div>
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
                body: PropTypes.shape({
                    text: PropTypes.string.isRequired
                }),
                phone: PropTypes.shape({
                    text: PropTypes.string.isRequired
                }),
                email: PropTypes.shape({
                    text: PropTypes.string.isRequired
                }),
                submittext: PropTypes.shape({
                    text: PropTypes.string.isRequired
                }),
                
            })
        })

    }).isRequired,
}
    

export const pageQuery = graphql`
query ContactQuery {
    contact: prismicContact {
        data {
            header {
                text
            }
            body {
                text
            }
            phone {
                text
            }
            email{
                text
            }
            submittext {
                text
            }
        }
    }
}
`