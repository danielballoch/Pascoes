import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class Index extends Component {
    render(){
        const servicelist = ["New Builds & Renovations","Maintenance Plumbing", "Heating & Gas Fitting"];
        const {
            data: {index},
        } = this.props
        console.log(this.props)
        return(
        <Layout path={this.props.location.pathname}>
            <SEO title="Home" />
            <h1 className="hero_text2">PASCOE'S</h1>
            <h1 className="hero_text">Plumbing & Gas</h1>
            <div className="indx_services max_width">
                {index.data.service.map((value, i) => (
                    <div className="indx_service">
                        <div className="place_serviceimg"><Img alt={value.thumbnail.alt} fluid={value.thumbnail.fluid}/></div>
                        <h2>{value.service1.text}</h2>
                    </div>
                    
                    ))}
            </div>

            
            {/* <p>why section</p> */}
            <div className="why">
                <h1 className="why_title">{index.data.why.text}</h1>
                <div className="double_content max_width">
                    <div className="text_card box_shadow">
                        <p>{index.data.why1.text}</p>
                        <p className="indent">{index.data.whyindent.text}</p>
                        <p>{index.data.why2.text}</p>
                    </div>
                    <div className="media_card box_shadow"><Img alt={index.data.whyimg.alt} fluid={index.data.whyimg.fluid}/></div>
                </div>
            </div>
            <div className="blend_bar"/>
            <div className="expect">
                <div className="double_content max_width">
                    <div className="text-card">
                        <h2>{index.data.what.text}</h2>
                        <p>{index.data.what1.text}</p>
                        <div
                                    dangerouslySetInnerHTML={{ __html: `${index.data.whatlist.html}` }}
                                /> 
                    </div>
                    <div className="flex_col_center">
                        <div className="placeholder_img2"><Img alt={index.data.whatimg.alt} fluid={index.data.whatimg.fluid}/></div>
                        <button className="large_btn">Prevous Work</button>
                    </div>
                </div>
            </div>
            <div className="blend_bar"/>
            <div className="indx_testimonials">

            {index.data.homepagetestimonials.map((value, i) => (
                <div className="profile_card box_shadow"className={i == 1? "profile_card box_shadow profile_active" : "profile_card box_shadow"}>
                            <div className="profile_image_placeholder box_shadow">
                            <Img fluid={value.thumbnail.fluid} alt={value.thumbnail.alt}/>
                            </div>
                            <div className="profile_name">
                                {value.name.text}
                            </div>
                            <div className="indx_testimonials_body"
                                    dangerouslySetInnerHTML={{ __html: `${value.testimonial.html}` }}
                                /> 
                            
                    </div>
                    ))}
                    {/* <div className="profile_card box_shadow">
                            <div className="profile_image_placeholder box_shadow">
                             <Img fluid={about.data.testimonials[2].profileimage.fluid} alt={about.data.testimonials[2].profileimage.alt}/> 
                            </div>
                            <div className="profile_name">
                                John Russo
                            </div>
                            <p>"Brillient testimonial dui ac enim tincidunt suscipit. Nulla facilisi. Nunc in nulla elit. Quisque quis dolor ornare, consequat mauris sed, iaculis nibh. Ut ante nulla, maximus non feugiat nec, suscipit sed ipsum."</p>
                    </div> 
                    
                    <div className="profile_card profile_active">
                            <div className="profile_image_placeholder box_shadow">
                            {/* <Img fluid={about.data.testimonials[2].profileimage.fluid} alt={about.data.testimonials[2].profileimage.alt}/> 
                            </div>
                            <div className="profile_name">
                                John Russo
                            </div>
                            <p>"Brillient testimonial dui ac enim tincidunt suscipit. Nulla facilisi. Nunc in nulla elit. Quisque quis dolor ornare, consequat mauris sed, iaculis nibh. Ut ante nulla, maximus non feugiat nec, suscipit sed ipsum."</p>
                    </div>
                    <div className="profile_card">
                            <div className="profile_image_placeholder">
                            {/* <Img fluid={about.data.testimonials[2].profileimage.fluid} alt={about.data.testimonials[2].profileimage.alt}/> 
                            </div>
                            <div className="profile_name">
                                John Russo
                            </div>
                            <p>"Brillient testimonial dui ac enim tincidunt suscipit. Nulla facilisi. Nunc in nulla elit. Quisque quis dolor ornare, consequat mauris sed, iaculis nibh. Ut ante nulla, maximus non feugiat nec, suscipit sed ipsum."</p>
                    </div>
                    */}
            </div>
            <BackgroundImage className="contact"
            fluid={index.data.backgroundimg.fluid}
            >
            {/* <div className="contact_form"> */}
                    <form className="contact_form shadow_1">
                        <h2>Contact Now</h2>
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Your name.."/>

                        <label for="phone">Phone:</label>
                        <input type="text" id="phone" name="phone" placeholder="Your phone number.."/>

                        <label for="email">Email:</label>
                        <input type="text" id="email" name="email" placeholder="Your email.."/>

                        <label for="subject">Enquiry:</label>
                        <textarea id="subject" name="subject" placeholder="How can we help.." ></textarea>
                        <p>Our reply time is generally one business day, for a faster response please call 027 727 2639  </p>
                        <input className="contact_btn" type="submit" value="Send"/>

                    </form>
                
            </BackgroundImage>
            
            
        </Layout>
        )
    }   
}

export default Index


export const pageQuery = graphql`
query IndexQuery {
    index: prismicIndex{
        data {
            service {
                service1 {
                    text
                }
                thumbnail {
                    fluid{
                        ...GatsbyPrismicImageFluid
                    }
                    alt
                }
            }
            why {
                text
            }
            why1 {
                text
            }
            whyindent {
                text
            }
            why2 {
                text
            }
            whyimg {
                fluid{
                    ...GatsbyPrismicImageFluid
                }
                alt
            }
            what {
                text
            }
            what1 {
                text
            }
            whatlist {
                html
            }
            whatimg {
                fluid{
                    ...GatsbyPrismicImageFluid
                }
                alt
            }
            homepagetestimonials {
                name {
                    text
                }
                thumbnail {
                    fluid{
                        ...GatsbyPrismicImageFluid
                    }
                    alt
                }
                testimonial {
                    html
                }
            }
            backgroundimg {
                fluid{
                    ...GatsbyPrismicImageFluid
                }
                alt
            }
        }
    }
}
`