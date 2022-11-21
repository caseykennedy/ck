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
          <div className="details__title">
            <h2 className="text-h3">Project details</h2>
          </div>
          <div className="details__summary">
            {page.desc.slice(0, 1).map((para, idx) => (
              <p className="lead" key={idx}>
                {para}
              </p>
            ))}
            <h3>Objectives:</h3>
            <ol>
              {page.tasks.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            {page.process.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
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
                <div>
                  Industry
                  <span>{page.industry}</span>
                </div>
                {page.credits && (
                  <div>
                    Credits
                    {page.credits.map((item, idx) => (
                      <span key={idx}>{item}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className="details__meta__col">
                <div>
                  Services
                  {page.services.map((service, idx) => (
                    <span key={idx}>{service}</span>
                  ))}
                </div>
                <div>
                  Deliverables
                  {page.deliverables.map((item, idx) => (
                    <span key={idx}>{item}</span>
                  ))}
                </div>
                <div>
                  Website
                  <span>
                    <a
                      href={`http://${page.website}`}
                      target="_blank"
                      rel="noreferrer"
                      className="link ne-resize"
                    >
                      {page.website}
                    </a>
                  </span>
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
      id
      client
      tagline
      industry
      website
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
