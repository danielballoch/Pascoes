import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import {Parallax, Background} from 'react-parallax'
import PageTransition from 'gatsby-plugin-page-transitions';


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Slider from "react-slick";

function Slide(props) { 
    return (
        <div className={props.i == 1? "slider_profile box_shadow" : "slider_profile box_shadow"}>
            <div className="profile_image_placeholder box_shadow">
                <Img fluid={props.thumbnail} alt={props.alt}/>
            </div>
            <div className="profile_name">
                {props.text}
            </div>
            <div className="indx_testimonials_body"
                    dangerouslySetInnerHTML={{ __html: `${props.html}` }}
                /> 
        </div>
    )
}

class Index extends Component {
    render(){
        const servicelist = ["New Builds & Renovations","Maintenance Plumbing", "Heating & Gas Fitting"];
        const {
            data: {index},
        } = this.props
        console.log(this.props)

        

        var settings = {
            className: "center",
            useTransform: true,
            centerMode: true,
            centerPadding: "60px",
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            arrows: false,
            speed: 500,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]     
            
        }

        

        return(
        <Layout path={this.props.location.pathname}>
            <SEO title="Home" />
            <h1 className="indx_hero_text">PASCOE'S</h1>
            <h1 className="indx_hero_text2">Plumbing & Gas</h1>
            <div className="indx_services max_width">
                {index.data.service.map((value, i) => (
                    <Link to="/services" className="indx_service">
                        <div className="place_serviceimg"><Img alt={value.thumbnail.alt} fluid={value.thumbnail.fluid}/></div>
                        <h2>{value.service1.text}</h2>
                    </Link>
                    
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

            <div className="testimonials_container">
            <h1 className="why_title">Our Customers</h1>
                <div className="slider_container">
                    <Slider {...settings}>
                        {index.data.homepagetestimonials.map((value,i) => (
                            <Slide thumbnail={value.thumbnail.fluid} alt={value.thumbnail.alt} text={value.name.text} html={value.testimonial.html} i={i}/>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* <BackgroundImage className="contact"
            fluid={index.data.backgroundimg.fluid}
            > */}
            {/* <div className="contact_form"> */}
                    {/* <form className="contact_form shadow_1">
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

                    </form> */}
                
            {/* </BackgroundImage> */}

            <Parallax strength={300} bgImage={index.data.backgroundimg.fixed.src} className="contact" bgClassName="parallax-bg">
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
            </Parallax>
            
            
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
                    src
                }
                fixed (width: 1920){
                    src
                }
                alt
            }
        }
    }
}
`