import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"
import Image from "../components/image"


class Parallax extends Component {
    render(){
        return(
        <Layout>
            <div className="parallax test">
            <div className="parallax__group">
            <div className="parallax__layer parallax__layer--base test">
                    big boy you too
                </div>
                
            </div>
            <div className="parallax__group">
                <div className="parallax__layer parallax__layer--back test2">
                    hello hello
                </div>
            </div>
                
            </div>
        </Layout>
        )
    }   
}

export default Parallax

