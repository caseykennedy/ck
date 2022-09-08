// DribbbleGrid:
// ___________________________________________________________________

import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
// import { DribbbleShape } from '../../types'
import * as S from './styles.scss'

// ___________________________________________________________________

type DribbbleShape = {
  content: {
    edges: {
      node: {
        name: string
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }[]
  }
}

const DribbbleGrid = () => {
  const data: DribbbleShape = useStaticQuery(graphql`
    query DribbbleShots {
      content: allFile(filter: { relativeDirectory: { eq: "dribbbles" } }) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(
                aspectRatio: 1.444
                backgroundColor: ""
                formats: WEBP
                layout: FULL_WIDTH
                placeholder: DOMINANT_COLOR
              )
            }
          }
        }
      }
    }
  `)
  const dribbbles = data.content.edges
  return (
    <S.DribbbleGrid>
      {dribbbles.slice(0, 24).map(({ node: drib }, idx) => (
        <GatsbyImage
          image={drib.childImageSharp.gatsbyImageData}
          objectFit="cover"
          objectPosition="50% 50%"
          alt="alt"
          key={idx}
        />
      ))}
    </S.DribbbleGrid>
  )
}

export default DribbbleGrid
