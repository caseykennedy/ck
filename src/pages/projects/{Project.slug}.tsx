// Post:
// ___________________________________________________________________

import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../../components/SEO'
import ProjectDetail from '../../templates/ProjectDetail'

import { ProjectShape } from '../../types'

// ___________________________________________________________________

const ProjectPage = (props: ProjectShape) => {
  const { data } = props
  const { project, images } = data
  console.log('project:', project)
  return (
    <>
      <SEO
        pathname={project.slug}
        title={`${project.title_detail} | casey kennedy`}
        desc={project.desc}
        node={project.parent}
      />
      <ProjectDetail data={data} />
    </>
  )
}

export default ProjectPage

// ___________________________________________________________________

export const query = graphql`
  query ($id: String!, $slug: String!) {
    project(id: { eq: $id }) {
      category
      color
      cover {
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
      desc
      id
      images
      industry
      parent {
        ... on File {
          modifiedTime
          birthTime
        }
      }
      services
      slug
      title
      title_detail
      website
    }
    images: allFile(filter: { relativeDirectory: { eq: $slug } }) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(
              # aspectRatio: 1.444
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
`
