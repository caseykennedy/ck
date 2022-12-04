// useProjects hook

import { graphql, useStaticQuery } from 'gatsby'
import { ProjectHookShape } from '../types'

// ___________________________________________________________________

const useProjects = () => {
  const data = useStaticQuery<ProjectHookShape>(graphql`
    query AllProjectsQuery {
      projects: allProjectsYaml {
        edges {
          node {
            id
            client
            tagline
            industry
            website
            repository
            slug
            year
            images
            category
            color
            desc
            tasks
            process
            deliverables
            services
            credits
            cover {
              childImageSharp {
                gatsbyImageData(
                  backgroundColor: "transparent"
                  formats: WEBP
                  layout: FULL_WIDTH
                  placeholder: DOMINANT_COLOR
                  quality: 50
                )
                fluid(quality: 60) {
                  src
                }
              }
            }
          }
          previous {
            id
            client
            desc
            slug
            cover {
              childImageSharp {
                gatsbyImageData(
                  aspectRatio: 1.5
                  backgroundColor: "transparent"
                  formats: WEBP
                  layout: FULL_WIDTH
                  placeholder: DOMINANT_COLOR
                  quality: 50
                )
              }
            }
          }
          next {
            id
            client
            desc
            slug
            cover {
              childImageSharp {
                gatsbyImageData(
                  aspectRatio: 1.5
                  backgroundColor: "transparent"
                  formats: WEBP
                  layout: FULL_WIDTH
                  placeholder: DOMINANT_COLOR
                  quality: 50
                )
              }
            }
          }
        }
      }
    }
  `)

  return data.projects.edges
}

export default useProjects
