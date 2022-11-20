import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface GatsbyImage {
  name: string
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
}

export interface ImageNode {
  node: {
    name: string
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

// Dribbble Shape
// ___________________________________________________________________

export type DribbbleShape = {
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

// Project Shape
// ___________________________________________________________________

export type ProjectShape = {
  id: string
  client: string
  tagline: string
  industry: string
  website: string
  slug: string
  year: string
  images: string
  cover: GatsbyImage
  category: string
  color: string
  desc: string[]
  tasks: string[]
  process: string[]
  deliverables: string[]
  services: string[]
  parent: {
    modifiedTime: string
    birthTime: string
  }
}

export type ProjectShapeShort = {
  desc: string
  id: string
  slug: string
  client: string
  cover: GatsbyImage
}

export type ProjectDataShape = {
  data: {
    project: ProjectShape
    images: {
      edges: ImageNode[]
    }
  }
  pageContext: {
    id: string
    slug: string
    previous: {
      desc: string
      id: string
      slug: string
      client: string
      cover: GatsbyImage
    }
    next: {
      desc: string
      id: string
      slug: string
      client: string
      cover: GatsbyImage
    }
  }
}

export type ProjectHookShape = {
  projects: {
    edges: {
      node: ProjectShape
      previous: ProjectShapeShort
      next: ProjectShapeShort
    }[]
  }
}

export type PrevNextShape = {
  pageContext: {
    id: string
    slug: string
    previous: ProjectShapeShort
    next: ProjectShapeShort
  }
}
