// Footer:

// ___________________________________________________________________

import * as React from 'react'

// Theme + UI
import * as S from './styles.scss'

// Components
import Icon from '../Icons'

// ___________________________________________________________________

const mailTo = 'mailto:taylor@tetrashapes.com'
const twitterHref = 'https://twitter.com/tetrashapes'
const handshakeHref = 'https://handshake.org'

const Footer = () => (
  <S.Footer>
    {/* <div className="info">
      <Icon name="plus" />
    </div> */}
    <a href={twitterHref} target="_blank" rel="noreferrer" className="twitter">
      <Icon name="twitter" />
    </a>
    <a
      href={handshakeHref}
      target="_blank"
      rel="noreferrer"
      className="handshake"
    >
      <Icon name="handshake" />
    </a>
  </S.Footer>
)

export default Footer
