import React, {Component} from "react"
import { graphql, Link } from "gatsby"
import PropTypes from 'prop-types'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"



class Services extends Component { 
    constructor(props){
        super(props)
        this.state = {activeService: 0 }
    }
    render(
        
    ) {
        const servicelist = ["Maintenance Plumbing", "New Builds & Renovations", "Heating & Gas Fitting"];
        const {
            data: {services},
        } = this.props
        console.log(this.props)
        return (
            <Layout path={this.props.location.pathname}>
            <div className="max_width">
                <SEO title="Services" />
                <h1 className="hero_text">{services.data.heading.text}</h1>
                <div className="services">
                    {services.data.service.map((value, i) => (
                       <div className="service box_shadow" onClick={() => this.setState({activeService: i})}>
                        <div className={this.state.activeService === i ? "service_head sh_active" : "service_head"} >{value.service1.text}</div>
                            <div className="service_summary">
                                <div
                                    dangerouslySetInnerHTML={{ __html: `${value.bulletpoints.html}` }}
                                /> 
                            </div>
                       </div> 
                    ))}
                </div>

                {services.data.service.map((value,i) => (
                    <div className={this.state.activeService === i ? "service_content box_shadow" : "no_show"}>
                    <div className="production_img"><Img alt={value.image.alt} fluid={value.image.fluid}/></div>
                    <div className="service_content_body">
                        <h2>{value.service1.text}</h2>
                        <p>{value.body1.text}</p>
                        <p className="indent_blue">{value.indent.text}</p>
                        <p>{value.body2.text}</p>
                    </div>
                    </div>
                ))}

{/* 
                <div className="service_content box_shadow no_show">
                    <div className="placeholder_img"></div>
                    <div className="service_content_body">
                        <h2>Maintenance Plumbing</h2>
                        <p>Service text... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras metus ex, vehicula non elementum eu, mattis ut tellus. In laoreet feugiat efficitur. Fusce ut felis accumsan, ullamcorper odio at, ullamcorper diam.</p>
                        <p className="indent_blue">Service text... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras metus ex, vehicula non elementum eu, mattis ut tellus. In laoreet feugiat efficitur. Fusce ut felis accumsan, ullamcorper odio at, ullamcorper diam.</p>
                        <p>Closing hook showing you're the solution to their problem and eager to help.</p>
                    </div>
                </div> */}

                <div className="coverage">
                    <div className="production_img_nz"><Img alt={services.data.bottomimg.alt} fluid={services.data.bottomimg.fluid}/></div>
                    <div className="coverage_div">
                        <h2>Coverage</h2>
                        <p>We generally cover the wider Waikato region including Hamilton, Cambridge, Te Aroha and Te Awamuto.</p>
                        <p className="indent_green">We may make exception for certain jobs so don't hesitate to get in touch at 027 727 2639 or through the contact page.</p>
                        <a href="https://www.building.govt.nz/assets/Uploads/projects-and-consents/building-work-consent-not-required-guidance.pdf">Do you need council consent for your job?</a>
                    </div>
                </div>
            </div>
            </Layout>
        )
    }
}

export default Services



Services.propTypes = {
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
query ServicesQuery {
    services: prismicServices {
        data {
            heading {
                text
            }
            service {
                service1 {
                    text
                }
                image {
                    fluid{
                        ...GatsbyPrismicImageFluid
                    }
                    alt
                }
                bulletpoints {
                   html
                }
                body1 {
                    text
                }
                indent {
                    text
                }
                body2 {
                    text
                }

            }
            bottomtitle {
                text
            }
            bottomimg {
                fluid{
                    ...GatsbyPrismicImageFluid
                }
                alt
            }
            bottombody1 {
                text
            }
            bottomindent {
                text
            }
            bottombody2 {
                text
            }

        }
    }
}
`
