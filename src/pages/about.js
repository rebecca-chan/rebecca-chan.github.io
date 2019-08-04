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
        <p>{`Currently I'm at Annalect, the adtech arm of Omnicom, working on an application that uses the Linkedin Audience API to build out professional audience profiles for Omnicom clients. I'm having lots of fun playing with data viz and S3.`}</p>
        <p>{`In my free time, I enjoy indoor and outdoor cycling, making sauces, and spoiling my fur baby Terra, a sato from Puerto Rico.`}</p>
        <p>
          {`Fun fact: I once won a cycling contest for farthest distance biked in 1 minute`}
        </p>

        <Link to="/">{`<-Back`}</Link>
      </div>
    </div>
  </Layout>
)

export default About
