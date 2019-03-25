import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
// import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import TerraPic from "../components/TerraPic"

const Writing = () => {
  // const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      ...nothing yet, but in the meantime, please enjoy a pic of the joy in my
      life.
      <div id="terra" className="center">
        <TerraPic />
      </div>
      <Link to="/">{`<-Back`}</Link>
    </Layout>
  )
}

{
  /* {edges.map(edge => { */
}
{
  /* const { frontmatter } = edgenode */
}
{
  /* return <div key={frontmatter.path}>{frontmatter.title}</div> */
}
{
  /* })} */
}

// export const query={graphql`
// query HomepageQuery {
//   allMarkdownRemark {
//     sort: {order: DESC, fields: [frontmatter___date]}
//     edges {
//       node {
//         frontmatter {
//           title
//           path
//           date
//         }
//       }
//     }
//     }
//   `}

export default Writing
