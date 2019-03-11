import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />

    <h1>Coding Projects</h1>

    <h1>Other Fun Projects</h1>

    <Link to="/">{`<-Back`}</Link>
  </Layout>
)

export default Projects
