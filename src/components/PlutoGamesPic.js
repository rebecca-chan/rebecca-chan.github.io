import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PlutoPic = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "plutogames.jpg" }) {
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
export default PlutoPic
