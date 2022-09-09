import { IGatsbyImageData } from 'gatsby-plugin-image'

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

export type ProjectShapeProject = {
  title_detail: string
  title: string
  color: string
  category: string
  desc: string
  industry: string
  services: string[]
  slug: string
  website: string
  year: number
  parent: {
    modifiedTime: string
    birthTime: string
  }
  cover: {
    name: string
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

export type ProjectShape = {
  data: {
    project: ProjectShapeProject
    images: {
      edges: ImageNode[]
    }
  }
}

export interface IProjects {
  projects: {
    edges: {
      node: {
        category: string
        color: string
        desc: string
        id: string
        images: string
        industry: string
        services: string[]
        slug: string
        title: string
        title_detail: string
        website: string
        year: number
        cover: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData
          }
        }
      }
      next: {
        id: string
      }
    }[]
  }
}
