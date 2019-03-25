import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const TerraPic = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "terra.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 5000, maxHeight: 5000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default TerraPic
