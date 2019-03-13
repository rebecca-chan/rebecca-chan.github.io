import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Writing = () => (
  <Layout>
    <SEO title="Rebecca Chan - Writing" />
    <div id="blog">
      <h1>Writing</h1>
      <p> This is a work in progress..</p>

      <Link to="/">{`<-Back`}</Link>
    </div>
  </Layout>
)

export default Writing
