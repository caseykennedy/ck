// HomeView:

import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

// Components
import Section from '../../components/Section'
import DribbbleGrid from '../../components/DribbbleGrid'
import Marquee from '../../components/Marquee'

// Sections
import Hero from './Hero'
import Intro from './Intro'
// import Aim from './Aim'
import Approach from './Approach'
import Projects from './Projects'
import Sites from './Sites'
import Outro from './Outro'

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
      <Marquee speed={50}>
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
    </Section>
    <Section border={true}>
      <h2>miscellaneous</h2>
      <DribbbleGrid />
    </Section>
    <Section border={true}>
      <h2>sites</h2>
      <Sites />
    </Section>
    {/* <Section bg="var(--color-bg-blur)" border={true}>
      <Intro />
    </Section> */}
    {/* <Marquee>
      <div>visual designer</div>
      <div>taking on new projects</div>
      <div>software developer</div>
      <div>available for freelance</div>
      <div>decentralize the internet</div>
      <div>collaborate with me</div>
    </Marquee> */}
    {/* <Intro /> */}
    {/* <Section>
      <StaticImage
        src="../../../static/wireframe.jpg"
        alt="A dinosaur"
        placeholder="blurred"
        objectFit="cover"
        aspectRatio={1.75}
        quality={60}
      />
    </Section> */}

    {/* <Aim /> */}
    {/* <Approach /> */}
    {/* <Process /> */}

    {/* <Section>
      <StaticImage
        src="../../../static/nevada.jpeg"
        alt="A dinosaur"
        placeholder="blurred"
        objectFit="cover"
        aspectRatio={1.75}
        quality={60}
      />
    </Section> */}
    {/* <Outro /> */}
  </S.Home>
)

export default Home
