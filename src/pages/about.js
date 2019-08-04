import React from "react"
import { Link } from "gatsby"
import ProfilePic from "../components/ProfilePic"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Rebecca Chan - About" />
    <div id="about">
      <div className="left">
        <ProfilePic />
      </div>
      <div className="right">
        <h1>About Me</h1>
        <p>{`Hi! I'm Rebecca. I'm a software engineer living in NYC.`}</p>
        <p>{`Currently I'm at Annalect, the data science/adtech arm of Omnicom, working on an application that uses the Linkedin Audience API to build out professional audience profiles for Omnicom clients. It's built on D3, AngularJS, Flask, and S3.`}</p>
        <p>{`In my free time, I enjoy indoor and outdoor cycling, making sauces, and spoiling my dog.`}</p>
        <p>
          {`Fun fact: I once won a cycling contest for farthest distance biked in 1 minute and got to fly to Amsterdam for free.`}
        </p>

        <Link to="/">{`<-Back`}</Link>
      </div>
    </div>
  </Layout>
)

export default About
