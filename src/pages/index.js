import React, { Component } from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class Index extends Component {
    render(){
        const servicelist = ["New Builds & Renovations","Maintenance Plumbing", "Heating & Gas Fitting"];
        return(
        <Layout>
            <SEO title="Home" />
            <h1 className="hero_text2">PASCOE'S</h1>
            <h1 className="hero_text">Plumbing & Gas</h1>
            <div className="indx_services max_width">
                {servicelist.map((value, i) => (
                    <div className="indx_service">
                        <div className="place_serviceimg"></div>
                        <h2>{value}</h2>
                    </div>
                    
                    ))}
            </div>

            
            {/* <p>why section</p> */}
            <div className="why">
                <h1 className="why_title">Why Pascoe's?</h1>
                <div className="double_content max_width">
                    <div className="text_card box_shadow">
                        <p>Pascoes Plumbing & Gas is dedicated to quality work and happy customers.</p>
                        <p className="indent">Our team is family - we show up on time with positive attitudes, a friendly smile and provide the right solution for your individual needs.</p>
                        <p>Play the short video to the right to see the full picture.</p>
                    </div>
                    <div className="media_card box_shadow">img</div>
                </div>
            </div>
            <p>what to expect section</p>
            <p>testimonials</p>
            <p>contact</p>
        </Layout>
        )
    }   
}

export default Index
