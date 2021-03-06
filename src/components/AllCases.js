import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

const AllCases = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allContentfulHomepageCaseStudy {
      edges {
        node {
          title
          image {
            fluid(quality: 90, maxWidth: 1000){
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
  
  
  `)

  return (
      <div>
              {data.allContentfulHomepageCaseStudy.edges.map((edge, index) => {
                  return (
                      <div key={index}>
                        <Img fluid={edge.node.image.fluid} alt={edge.node.title}/>
                              <h2>{edge.node.title}</h2>
                      </div>
                  )
              })}
      </div>
  )
}

export default AllCases



