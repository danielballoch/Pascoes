import React, {Component} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"



class Services extends Component { 
    
    render() {
        const servicelist = ["Maintenance Plumbing", "New Builds & Renovations", "Heating & Gas Fitting"];
        return (
            <Layout >
            <div className="max_width">
                <SEO title="Page two" />
                <h1 className="hero_text">Services</h1>
                <div className="services">
                    {servicelist.map((value, i) => (
                       <div className="service box_shadow">
                        <div className="service_head">{value}</div>
                            <div className="service_summary">
                                <p>- Blocked drains</p>
                                <p>- Drain line repair & replacement</p>
                                <p>- In wall video inspections</p>
                                <p>- Under house / in ceiling plumbing repairs</p>
                                <p>- High power bill problems</p>
                            </div>
                       </div> 
                    ))}
                </div>
                <div className="service_content box_shadow">
                    <div className="placeholder_img"></div>
                    <div className="service_content_body">
                        <h2>Maintenance Plumbing</h2>
                        <p>Service text... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras metus ex, vehicula non elementum eu, mattis ut tellus. In laoreet feugiat efficitur. Fusce ut felis accumsan, ullamcorper odio at, ullamcorper diam.</p>
                        <p className="indent_blue">Service text... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras metus ex, vehicula non elementum eu, mattis ut tellus. In laoreet feugiat efficitur. Fusce ut felis accumsan, ullamcorper odio at, ullamcorper diam.</p>
                        <p>Closing hook showing you're the solution to their problem and eager to help.</p>
                    </div>
                </div>
                <div className="coverage">
                    <div className="placeholder_img">coverage image</div>
                    <div className="coverage_div">
                        <h2>Coverage</h2>
                        <p>We generally cover the wider Waikato region including Hamilton, Cambridge, Te Aroha and Te Awamuto.</p>
                        <p className="indent_green">We may make exception for certain jobs so don't hesitate to get in touch at 027 727 2639 or through the contact page.</p>
                        <a href="#">Do you need council consent for your job?</a>
                    </div>
                </div>
            </div>
            </Layout>
        )
    }
}

export default Services
