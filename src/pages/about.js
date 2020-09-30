import React, {Component} from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class About extends Component {
    constructor(props){
        super(props)
        this.state = {activeTestimonial: 1 }
    }
    render(){
        const {
            data: {about},
        } = this.props
        console.log(this.props)
        return(
            <Layout>
            <div className="max_width">
                <SEO title="Page two" />
                {/* <Img alt={about.data.image.alt} fluid={about.data.image.fluid}/>
                <h1>{about.data.header.text}</h1> */}
                <h1 className="hero_text">{about.data.title.text}</h1>
                <div className="double_content">
                    <div className="text_card box_shadow">
                        <p>{about.data.doublecontent[0].text1section1.text}</p>
                        <p className="indent">{about.data.doublecontent[0].text1section2.text}</p>
                        <p>{about.data.doublecontent[0].text1section3.text}</p>
                    </div>
                    <div className="media_card box_shadow"><Img alt={about.data.doublecontent[0].media1.alt} fluid={about.data.doublecontent[0].media1.fluid}/></div>
                </div>
                <div className="double_content">
                    <div className="media_card box_shadow"><Img alt={about.data.doublecontent[1].media1.alt} fluid={about.data.doublecontent[1].media1.fluid}/></div>
                    <div className="text_card box_shadow">
                        <h4>{about.data.doublecontent[1].text1section1.text}</h4>
                        <p>{about.data.doublecontent[1].text1section2.text}</p>
                        <p>{about.data.doublecontent[1].text1section3.text}</p>
                    </div>
                    
                </div>
            </div>
            <h1 className="hero_text">{about.data.title2.text}</h1>
            <div className="testimonials">
                <div className="testimonials_text">
                    <div
                        dangerouslySetInnerHTML={{ __html: `${about.data.testimonials[this.state.activeTestimonial].testimonialtext.html}` }}
                    /> 
                </div>
                <div className="testimonials_bar">
                    <div className="reviewers">
                        <div className={this.state.activeTestimonial===0? "profile active_profile" : "profile"} onClick={() => this.setState({activeTestimonial: 0})}>
                            <div className="profile_image" >
                                <Img fluid={about.data.testimonials[0].profileimage.fluid} alt={about.data.testimonials[0].profileimage.alt}/>
                            </div>
                            <div className="profile_name">
                                {about.data.testimonials[0].profilename.text}
                            </div>
                        </div>
                        <div className={this.state.activeTestimonial===1? "profile active_profile" : "profile"} onClick={() => this.setState({activeTestimonial: 1})}>
                            <div className="profile_image" >
                                <Img fluid={about.data.testimonials[1].profileimage.fluid} alt={about.data.testimonials[1].profileimage.alt}/>
                            </div>
                            <div className="profile_name">
                                {about.data.testimonials[1].profilename.text}
                            </div>
                        </div>
                        <div className={this.state.activeTestimonial===2? "profile active_profile" : "profile"} onClick={() => this.setState({activeTestimonial: 2})}>
                            <div className="profile_image">
                                <Img fluid={about.data.testimonials[2].profileimage.fluid} alt={about.data.testimonials[2].profileimage.alt}/>
                            </div>
                            <div className="profile_name">
                                {about.data.testimonials[2].profilename.text}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            </Layout>
        )
    }
} 
export default About


export const pageQuery = graphql`
query AboutQuery {
    about: prismicAbout {
        data {
            title {
                text
            }
            doublecontent {  
                media1 {
                    fluid{
                        ...GatsbyPrismicImageFluid
                    }
                    alt
                }
                text1section1 {
                    text
                }
                text1section2 {
                    text
                }
                text1section3 {
                    text
                }
            }
            title2 {
                text
            }
            testimonials {
                profileimage {
                    fluid{
                        ...GatsbyPrismicImageFluid
                    }
                    alt
                }
                profilename {
                    text
                }
                testimonialtext {
                   html 
                }
            }
        }
    }
}
`
