import React from "react";
import theme from "../../theme/theme.yaml";
import { StaticQuery, graphql } from "gatsby";
import ReImg from "./ReImg";

const ReTracedSVGGallery = props => {
  return (
    <StaticQuery
      query={graphql`
        query ReTracedSVGGalleryQuery {
          allFile(
            filter: {
              name: { ne: "gallery-cover-spacex" }
              relativePath: { regex: "/.*(jpg|jpeg|png)/" }
              sourceInstanceName: { regex: "/(posts)/" }
            }
            sort: { fields: [name], order: [DESC] }
          ) {
            edges {
              node {
                id
                absolutePath
                childImageSharp {
                  fluid(
                    maxWidth: 800
                    maxHeight: 360
                    cropFocus: CENTER
                    quality: 90
                    traceSVG: { color: "#2D3142" }
                  ) {
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                    originalImg
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <>
            {data.allFile.edges.map((item, i) => (
              <ReImg
                key={`svggal${i}`}
                fluid={item.node.childImageSharp.fluid}
                hovereffect={true}
              />
            ))}
          </>
        );
      }}
    />
  );
};

export default ReTracedSVGGallery;
