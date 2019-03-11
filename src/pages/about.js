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
        <p>{`Hi! I'm Rebecca. I'm a software engineer && digital marketer living in NYC.`}</p>
        <p>{`For the last 6 years, I advertised for brands within Microsoft, L'Oreal and LVMH. If you've ever seen ads from them online, I probably put it there. I may have even written them.`}</p>
        <p>{`Recently, I graduated from Grace Hopper Academy, a 17-week immersive Javascript bootcamp for women. I loved every minute of it, and made new life-long friends. Not only that, but now I can build full stack web applications! That's pretty neat.`}</p>
        <p>{`Growing up in the 90s, my first experience in code was making a really cheesey Geocities site about my favorite Final Fantasy characters. Later, I used Stata when I did undergraduate research for the brilliant Kenneth Chay at Brown University. I eventually found myself working in advertising analytics. Advertising has some really cool data, and I often wished that I could show it to our clients in a way that was digestible and easy to interact with. That's why I decided I wanted to learn to code.`}</p>

        <Link to="/">{`<-Back`}</Link>
      </div>
    </div>
  </Layout>
)

export default About
