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
            <div className="blend_bar"/>
            <div className="expect">
                <div className="double_content max_width">
                    <div className="text-card">
                        <h2>What to expect</h2>
                        <p>At Pascoes Plumbing & Gas we take pride in our values and think this shines through in our work.</p>
                        <ul>
                            <li>Customer first approach</li>
                            <li>Timely and trustworthy</li>
                            <li>Respectful of property and surroundings</li>
                            <li>Well presented and professional</li>
                        </ul>
                    </div>
                    <div className="flex_col_center">
                        <div className="placeholder_img2"></div>
                        <button className="large_btn">Prevous Work</button>
                    </div>
                </div>
            </div>
            <div className="blend_bar"/>
            <div className="indx_testimonials">
                    <div className="profile_card box_shadow">
                            <div className="profile_image_placeholder box_shadow">
                            {/* <Img fluid={about.data.testimonials[2].profileimage.fluid} alt={about.data.testimonials[2].profileimage.alt}/> */}
                            </div>
                            <div className="profile_name">
                                John Russo
                            </div>
                            <p>"Brillient testimonial dui ac enim tincidunt suscipit. Nulla facilisi. Nunc in nulla elit. Quisque quis dolor ornare, consequat mauris sed, iaculis nibh. Ut ante nulla, maximus non feugiat nec, suscipit sed ipsum."</p>
                    </div>
                    <div className="profile_card profile_active">
                            <div className="profile_image_placeholder box_shadow">
                            {/* <Img fluid={about.data.testimonials[2].profileimage.fluid} alt={about.data.testimonials[2].profileimage.alt}/> */}
                            </div>
                            <div className="profile_name">
                                John Russo
                            </div>
                            <p>"Brillient testimonial dui ac enim tincidunt suscipit. Nulla facilisi. Nunc in nulla elit. Quisque quis dolor ornare, consequat mauris sed, iaculis nibh. Ut ante nulla, maximus non feugiat nec, suscipit sed ipsum."</p>
                    </div>
                    <div className="profile_card">
                            <div className="profile_image_placeholder">
                            {/* <Img fluid={about.data.testimonials[2].profileimage.fluid} alt={about.data.testimonials[2].profileimage.alt}/> */}
                            </div>
                            <div className="profile_name">
                                John Russo
                            </div>
                            <p>"Brillient testimonial dui ac enim tincidunt suscipit. Nulla facilisi. Nunc in nulla elit. Quisque quis dolor ornare, consequat mauris sed, iaculis nibh. Ut ante nulla, maximus non feugiat nec, suscipit sed ipsum."</p>
                    </div>
            </div>
            <div className="contact">
                <div className="contact_form">
                    
                    <form className="contact_form">
                        <h2>Contact Now</h2>
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Your name.."/>

                        <label for="phone">Phone:</label>
                        <input type="text" id="phone" name="phone" placeholder="Your phone number.."/>

                        <label for="email">Email:</label>
                        <input type="text" id="email" name="email" placeholder="Your email.."/>

                        <label for="subject">Enquiry:</label>
                        <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
                        <p>Our reply time is generally one business day, for a faster response please call 027 727 2639  </p>
                        <input className="contact_btn" type="submit" value="Send"/>

                    </form>
                    </div> 
            </div>
            
            
        </Layout>
        )
    }   
}

export default Index
