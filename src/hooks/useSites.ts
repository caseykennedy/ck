// useSites hook

import { graphql, useStaticQuery } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

// ___________________________________________________________________

type SitesHookShape = {
  sitesYaml: {
    sites: {
      client: string
      cover: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
      url: string
      year: string
    }[]
  }
}

const useSites = () => {
  const data = useStaticQuery<SitesHookShape>(graphql`
    query AllSitesQuery {
      sitesYaml {
        sites {
          client
          cover {
            childImageSharp {
              gatsbyImageData(
                backgroundColor: "transparent"
                formats: WEBP
                layout: FULL_WIDTH
                placeholder: DOMINANT_COLOR
                quality: 50
              )
            }
          }
          url
          year
        }
      }
    }
  `)

  return data.sitesYaml.sites
}

export default useSites
