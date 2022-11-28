// useSiteSettings hook

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

type SiteShape = {
  site: {
    siteMetadata: {
      author: string
      banner: string
      description: string
      headline: string
      logo: string
      ogLanguage: string
      pathPrefix: string
      siteLanguage: string
      siteUrl: string
      title: string
      titleAlt: string
      twitter: string
      mailTo: string
      githubUrl: string
      dribbbleUrl: string
      linkedinUrl: string
    }
  }
}

const useSiteSettings = () => {
  const data = useStaticQuery<SiteShape>(graphql`
    query SiteQuery {
      site: site {
        siteMetadata {
          author
          banner
          description
          headline
          logo
          ogLanguage
          pathPrefix
          siteLanguage
          siteUrl
          title
          titleAlt
          twitter
          mailTo
          githubUrl
          dribbbleUrl
          linkedinUrl
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteSettings
