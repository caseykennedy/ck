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
      <div className="contact">
        <div className="contact__cta">
          <h2 className="text-h1">Let&apos;s talk about your project.</h2>
          {/* <a href={mailTo} className="btn btn--primary">
            Email me
            <Icon name="arrow" className="icon" />
          </a> */}
        </div>
        <div className="contact__details">
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

      <div className="footer-marquee">
        <Marquee direction="left" speed={60}>
          <div>
            If you are interested in working together, please{' '}
            <a
              href={site.mailTo}
              target="_blank"
              rel="noreferrer"
              className="link e-resize"
            >
              email me ✌️
            </a>
            .
          </div>
          <div>
            I am currently considering new work for 2023,{' '}
            <a
              href={site.mailTo}
              target="_blank"
              rel="noreferrer"
              className="link e-resize"
            >
              reach out 🌞
            </a>
            .
          </div>
          <div>
            If your project is aimed at crypto or decentralization, is
            open-sourced, sustainable or educational,{' '}
            <a
              href={site.mailTo}
              target="_blank"
              rel="noreferrer"
              className="link e-resize"
            >
              let&apos;s work together 🤝
            </a>
            .
          </div>
        </Marquee>
      </div>

      <div className="info">
        <div>©☻</div>
        <div className="info__links">
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
