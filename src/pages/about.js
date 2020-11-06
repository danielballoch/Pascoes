import React, {Component} from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "react-slick";

var settings = {
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }
    ] 
}

function TestimonialSlider(props){
    return (
        <div className="testimonials_text">
                    <div className="mobile_border"/>
                    <div 
                        dangerouslySetInnerHTML={{ __html: `${props.html}` }}
                    /> 
        </div>
    )
}
function Slide(props) { 
    return (
        <div className={"profile"} >
        <div className="profile_image" >
            <Img fluid={props.profileimage} alt={props.alt}/>
        </div>
        <div className="profile_name">
            {props.profilename}
        </div>
    </div>
    )
}

class About extends Component {
    constructor(props){
        super(props)
        this.state = {
            activeTestimonial: 1,
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
          });
    }

    render(){
        const {
            data: {about},
        } = this.props
        return(
            <Layout path={this.props.location.pathname}>
            <div className="max_width">
                <SEO title="About" />
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
            {/* <h1 className="hero_text">{about.data.title2.text}</h1>
            <div className="testimonials">
                <div className="testimonials_text">
                    <div
                        dangerouslySetInnerHTML={{ __html: `${about.data.testimonials[this.state.activeTestimonial].testimonialtext.html}` }}
                    /> 
                </div>
                <div className="reviewers">
                    {about.data.testimonials.slice(0,3).map((testimonial, i) => (
                        <div className={this.state.activeTestimonial===i? "active_profile" : "profile"} onClick={() => this.setState({activeTestimonial: i})}>
                            <div className="profile_image" >
                                <Img fluid={testimonial.profileimage.fluid} alt={about.data.testimonials[i].profileimage.alt}/>
                            </div>
                            <div className="profile_name">
                                {about.data.testimonials[i].profilename.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}


            <h1 className="hero_text">{about.data.title2.text}</h1>
            <div className="testimonials">
            <div className="">
                    <Slider asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)} slidesToShow={1} swipeToSlide={true}>
                        {about.data.testimonials.map((testimonial, i) => (
                            <TestimonialSlider  html={testimonial.testimonialtext.html} i={i}/>
                        ))}
                    </Slider>
            </div>

            {/* slidesToShow={3} focusOnSelect={true} centerMode={true} responsive={[{breakpoint:1024}, {slidesToScroll:1}]} */}

            <div className="">
                <Slider asNavFor={this.state.nav1} ref={slider => (this.slider2 = slider)} {...settings}>
                    {about.data.testimonials.map((testimonial, i) => (
                            <Slide profileimage={testimonial.profileimage.fluid} alt={testimonial.profileimage.alt} profilename={testimonial.profilename.text} html={testimonial.testimonialtext.html} i={i}/>
                    ))}
                </Slider>
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
