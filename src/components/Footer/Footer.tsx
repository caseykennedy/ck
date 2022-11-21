// Footer:

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

// Theme + UI
import * as S from './styles.scss'

// Components
import Icon from '../Icons'
import Section from '../Section'
import Marquee from '../Marquee'

// ___________________________________________________________________

const mailTo = 'mailto:me@caseykennedy.me'
const twitterURL = 'https://twitter.com/tetrashapes'
const handshakeURL = 'https://handshake.org'
const discordURL = 'https://discord.gg/8qZ7Y4'

type FooterProps = {
  location: {
    pathname: string
  }
}

const Footer = ({ location }: FooterProps) => {
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
              href={mailTo}
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
            href={mailTo}
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
        <Marquee direction="right" speed={50}>
          <div>
            If you are interested in working together, please{' '}
            <a
              href={mailTo}
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
              href={mailTo}
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
              href={mailTo}
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
            href="https://github.com/caseykennedy"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            github
          </a>
          <a
            href="https://dribbble.com/caseykennedy"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            dribbble
          </a>
          <a
            href="https://www.linkedin.com/in/casey-kennedy-0b123727/"
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
