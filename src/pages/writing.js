import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"

// const Writing = ({ data }) => {
//   const { edges } = data.allMarkdownRemark
//   return (
//     <div>
//       {edges.map(edge => {
//         const { frontmatter } = edgenode
//         return <div key={frontmatter.path}>{frontmatter.title}</div>
//       })}
//     </div>
//   )
// }

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

// export default Writing
