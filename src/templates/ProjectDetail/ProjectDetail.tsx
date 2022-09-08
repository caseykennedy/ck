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
      <div>
        <h1>{data.project.title}</h1>
        <h2>{data.project.title_detail}</h2>
        <h3>{data.project.desc}</h3>
      </div>

      <Gallery images={images} />
    </S.ProjectDetail>
  )
}

export default ProjectDetail
