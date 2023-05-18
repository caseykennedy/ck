// HomeView:

import * as React from 'react'

// Components
import Section from '../../components/Section'
import DribbbleGrid from '../../components/DribbbleGrid'
import Marquee from '../../components/Marquee'

// Sections
import Hero from './Hero'
import Projects from './Projects'
import Sites from './Sites'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const mailTo = 'mailto:me@caseykennedy.me'

const Home = () => (
  <S.Home>
    <Hero />
    <Section border={true}>
      <Projects />
    </Section>

    <Section border={true} pt="0" pr="0" pb="0" pl="0">
      <Marquee speed={60}>
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
        </div>
        <div>
          I am considering new work for 2023,{' '}
          <a
            href={mailTo}
            target="_blank"
            rel="noreferrer"
            className="link e-resize"
          >
            reach out 🌞
          </a>
        </div>
        <div>
          If your project aims to better the world, is open-sourced, sustainable
          or educational,{' '}
          <a
            href={mailTo}
            target="_blank"
            rel="noreferrer"
            className="link e-resize"
          >
            let&apos;s work together 🤝
          </a>
        </div>
      </Marquee>
    </Section>

    <Section border={true}>
      <h2>misc.</h2>
      <DribbbleGrid />
    </Section>

    {/* <Section border={true}>
      <h2>sites i&apos;ve built</h2>
      <Sites />
    </Section> */}
  </S.Home>
)

export default Home
