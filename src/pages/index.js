import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faMedium,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Home"
          keywords={[
            `gatsby`,
            `developer`,
            `react`,
            `rebecca chan`,
            `software engineer`,
          ]}
        />

        <section>
          <div className="inner">
            <ul className="menu">
              <Link to="/about/">
                <li>About</li>
              </Link>
              <Link to="/projects/">
                {" "}
                <li>Projects</li>
              </Link>
              <a href="https://drive.google.com/file/d/1cRTJVymR7Mr3isQCSelB8y8zO2pP13_U/view?usp=sharing">
                {" "}
                <li>Resume</li>
              </a>
              <Link to="/writing">
                {" "}
                <li>Writing</li>
              </Link>
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
          <h5>I'm Rebecca! Some of my friends call me Biqi（碧琪 ）.</h5>
        </div>
        <div className="contact">
          <a href="https://www.linkedin.com/in/rebeccachan2">
            <IconButton aria-label="linkedin">
              <FontAwesomeIcon icon={faLinkedin} />
            </IconButton>
          </a>
          <a href="https://www.github.com/rebecca-chan">
            <IconButton aria-label="git-repo">
              <FontAwesomeIcon icon={faGithub} />
            </IconButton>
          </a>
          <a href="https://medium.com/@chan.rebecca">
            {" "}
            <IconButton aria-label="medium">
              <FontAwesomeIcon icon={faMedium} />
            </IconButton>
          </a>
          <a href="https://twitter.com/biqichan">
            <IconButton aria-label="twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </IconButton>
          </a>
          <a href="mailto: chan.rebecca@gmail.com">
            <IconButton aria-label="email">
              <FontAwesomeIcon icon={faEnvelope} />
            </IconButton>
          </a>
        </div>
        <div id="fineprint">© Rebecca Chan 2019. Made with GatsbyJS</div>
      </Layout>
    )
  }
}

export default IndexPage
