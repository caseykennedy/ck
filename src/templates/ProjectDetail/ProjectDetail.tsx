// ProjectDetail:
// ___________________________________________________________________

import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ProjectShape, ImageNode } from '../../types'
import * as S from './styles.scss'

// ___________________________________________________________________

type GalleryProps = {
  images: ImageNode[]
}

const Gallery = ({ images }: GalleryProps) => {
  console.log('images:', images)
  return (
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
}

const ProjectDetail = ({ data }: ProjectShape) => {
  const images = data.images.edges || []
  return (
    <S.ProjectDetail>
      <div className="intro">
        <h1>{data.project.title}</h1>
        <div>
          {data.project.services.map((service, idx) => (
            <span key={idx} className="pill">
              {service}
            </span>
          ))}
        </div>
      </div>

      <Gallery images={images} />

      <div className="study">
        <p>{data.project.desc}</p>
      </div>
    </S.ProjectDetail>
  )
}

export default ProjectDetail
