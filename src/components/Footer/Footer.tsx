// Footer:

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

// Theme + UI
import * as S from './styles.scss'

// Components
import Icon from '../Icons'
import Section from '../Section'

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
          <a href={mailTo} className="btn btn--primary">
            Email me
            <Icon name="arrow" className="icon" />
          </a>
        </div>
        <div className="contact__details">
          {/* <div>
            west coast based
            <br />
            <span>{nevadaTime}</span>
          </div> */}
          <div>
            email
            <br />
            <a href={mailTo} target="_blank" rel="noreferrer" className="link">
              me@caseykennedy.me
            </a>
          </div>
        </div>
      </div>

      <div className="utils">
        <button
          type="button"
          onClick={scrollTop}
          className="control control__top"
        >
          top
        </button>
        {!isIndex && (
          <Link to="/" className="control control__index">
            home
          </Link>
        )}
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
