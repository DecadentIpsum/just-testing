import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

export default () => {
    const imageQuery = useStaticQuery(graphql`
        query Image2 {
            file(relativePath: {eq: "simon-seventa-paint-fight.jpeg"}) {
                childImageSharp {
                    fluid(webpQuality: 90, jpegQuality: 90, fit: CONTAIN, maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
                name
            }
        }
    `);

    if ( imageQuery.errors ) {
        return null;
    }

    return (
        <Img fluid={imageQuery.file.childImageSharp.fluid} alt={imageQuery.file.name} loading="lazy" className="" />
    );
};