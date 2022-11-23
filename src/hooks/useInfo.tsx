// useInfo hook

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

type InfoHookShape = {
  infoYaml: {
    info: {
      approach: {
        headline: string
        message: string
      }
      bio: string
      // figure: {
      //   image1: {
      //     childImageSharp: {
      //       fluid: {
      //         src: string
      //       }
      //     }
      //   }
      //   image2: {
      //     childImageSharp: {
      //       fluid: {
      //         src: string
      //       }
      //     }
      //   }
      // }
      process: {
        headline: string
        message: string
      }
      stats: {
        capabilities: {
          design: string[]
          development: string[]
        }
        clients: string[]
        employment: {
          current: boolean
          employer: string
          end: string
          start: string
        }[]
      }
    }
  }
}

const useInfo = () => {
  const data = useStaticQuery<InfoHookShape>(graphql`
    query AllInfoQuery {
      infoYaml {
        info {
          approach {
            headline
            message
          }
          bio
          # figure {
          #   image1 {
          #     childImageSharp {
          #       fluid {
          #         src
          #       }
          #     }
          #   }
          #   image2 {
          #     childImageSharp {
          #       fluid {
          #         src
          #       }
          #     }
          #   }
          # }
          process {
            headline
            message
          }
          stats {
            capabilities {
              design
              development
            }
            clients
            employment {
              current
              employer
              end
              start
            }
          }
        }
      }
    }
  `)

  return data.infoYaml.info
}

export default useInfo
