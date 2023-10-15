// Footer:

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

// Styles
import * as S from './styles.scss'

// Hooks
import useSiteSettings from '../../hooks/useSiteSettings'

// Components
import Marquee from '../Marquee'

// ___________________________________________________________________

type FooterProps = {
  location: {
    pathname: string
  }
}

const Footer = ({ location }: FooterProps) => {
  const site = useSiteSettings()
  const isIndex = location.pathname === '/'
  const scrollTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    e.preventDefault()
  }
  return (
    <S.Footer>
      <div className="footer__contact">
        <div className="footer__contact__cta">
          <h2 className="text-h1">Let&apos;s work together</h2>
          {/* <a href={mailTo} className="btn btn--primary">
            Email me
            <Icon name="arrow" className="icon" />
          </a> */}
        </div>
        <div className="footer__contact__details">
          {/* <div>
            west coast based
            <br />
            <span>{nevadaTime}</span>
          </div> */}
          <div>
            contact
            <br />
            <a
              href={site.mailTo}
              target="_blank"
              rel="noreferrer"
              className="link e-resize"
            >
              me@caseykennedy.me
            </a>
          </div>
        </div>
      </div>

      <nav>
        <button type="button" onClick={scrollTop} className="n-resize">
          top
        </button>

        <div className="routes">
          {!isIndex && (
            <Link to="/" className="w-resize">
              home
            </Link>
          )}

          <a
            href={site.mailTo}
            target="_blank"
            rel="noreferrer"
            className="routes__email e-resize"
          >
            email me
            {/* <Icon name="arrow" /> */}
          </a>
        </div>
      </nav>

      <div className="footer__marquee">
        <Marquee direction="left" speed={62}>
          <div>
            Interested in working together? Please{' '}
            <a
              href={site.mailTo}
              target="_blank"
              rel="noreferrer"
              className="link e-resize"
            >
              email me ✌️
            </a>
          </div>
          <div>
            Taking on new work for 2023,{' '}
            <a
              href={site.mailTo}
              target="_blank"
              rel="noreferrer"
              className="link e-resize"
            >
              reach out 🌞
            </a>
          </div>
          <div>
            If your project aims to better the world, is open-sourced,
            sustainable or educational,{' '}
            <a
              href={site.mailTo}
              target="_blank"
              rel="noreferrer"
              className="link e-resize"
            >
              let&apos;s work together 🤝
            </a>
          </div>
        </Marquee>
      </div>

      <div className="footer__info">
        <div>©☻</div>
        <div className="footer__info__links">
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            github
          </a>
          <a
            href={site.dribbbleUrl}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            dribbble
          </a>
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            linkedin
          </a>
        </div>
      </div>
    </S.Footer>
  )
}

export default Footer
