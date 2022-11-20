// ProjectDetail:
// ___________________________________________________________________

import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ImageNode, ProjectDataShape, PrevNextShape } from '../../types'
import * as S from './styles.scss'
import Section from '../../components/Section'

// ___________________________________________________________________

type GalleryProps = {
  images: ImageNode[]
}

const Gallery = ({ images }: GalleryProps) => (
  <S.Gallery>
    {images.map(({ node: item }, idx) => (
      <GatsbyImage
        image={item.childImageSharp.gatsbyImageData}
        objectFit="cover"
        objectPosition="50% 50%"
        alt="alt"
        key={idx}
      />
    ))}
  </S.Gallery>
)

const PrevNext = ({ pageContext }: PrevNextShape) => {
  const { previous, next } = pageContext
  return (
    <S.PrevNext>
      <div>
        {previous && (
          <Link to={`/projects/${previous.slug}`}>
            <div className="detail">
              {pageContext.previous.client}
              <div>previous</div>
            </div>
            <GatsbyImage
              image={previous.cover.childImageSharp.gatsbyImageData}
              objectFit="cover"
              objectPosition="50% 50%"
              alt="alt"
            />
          </Link>
        )}
      </div>
      <div>
        {next && (
          <Link to={`/projects/${next.slug}`}>
            <div className="detail">
              {pageContext.next.client}
              <div>next</div>
            </div>
            <GatsbyImage
              image={next.cover.childImageSharp.gatsbyImageData}
              objectFit="cover"
              objectPosition="50% 50%"
              alt="alt"
            />
          </Link>
        )}
      </div>
    </S.PrevNext>
  )
}

const ProjectDetail = ({ data, pageContext }: ProjectDataShape) => {
  const page = data.project
  const images = data.images.edges
  console.log('images', images)

  console.log('pageContext', pageContext)
  return (
    <S.ProjectDetail>
      <Section>
        <div className="project-title">
          <h1>{page.client}</h1>
          <p>{page.tagline}</p>
        </div>
      </Section>

      <Section border={false}>
        <Gallery images={images} />
      </Section>

      <Section border={true}>
        <div className="details">
          <h2 className="text-h3">Project details</h2>
          <div className="details__summary">
            <p className="lead">{page.desc}</p>
            <div className="details__meta">
              <div className="details__meta__col">
                <div>
                  Client
                  <span>{page.client}</span>
                </div>
                <div>
                  Year
                  <span>{page.year}</span>
                </div>
              </div>
              <div className="details__meta__col">
                <div>
                  Industry
                  <span>{page.industry}</span>
                </div>
                <div>
                  Services
                  {page.services.map((service, idx) => (
                    <span key={idx}>{service}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section border={true} pt="0" pr="0" pb="0" pl="0">
        <PrevNext pageContext={pageContext} />
      </Section>
    </S.ProjectDetail>
  )
}

export default ProjectDetail

export const query = graphql`
  query ($slug: String!) {
    project: projectsYaml(slug: { eq: $slug }) {
      category
      color
      desc
      id
      images
      industry
      services
      slug
      client
      tagline
      website
      year
    }
    images: allFile(
      filter: { relativeDirectory: { eq: $slug } }
      sort: { fields: name }
    ) {
      edges {
        node {
          name
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
      }
    }
  }
`
