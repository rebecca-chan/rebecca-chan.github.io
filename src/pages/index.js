import React from "react"
import { Link } from "gatsby"
import AOS from "aos"
import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    AOS.init({
      duration: 2000,
    })
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <section>
          <div className="inner">
            <ul className="menu">
              <li>
                <Link to="/page-2/">About</Link>
              </li>
              <li>
                <Link to="/page-2/">Projects</Link>
              </li>
              <li>
                <Link to="/page-2/">Resume</Link>
              </li>
              <li>
                <Link to="/page-2/">Contact</Link>
              </li>
            </ul>
          </div>
        </section>
        <h2>
          <div data-aos="fade-in" className="fly">
            <li>H</li>
            <li>E</li>
            <li>L</li>
            <li>L</li>
            <li>O</li>
          </div>
        </h2>
        <div id="summary">
          <h5>
            I'm Rebecca! I'm a software engineer, digital marketer, and fitness
            enthusiast.
          </h5>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
