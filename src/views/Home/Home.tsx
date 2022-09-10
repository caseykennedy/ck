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
import Aim from './Aim'
import Approach from './Approach'
import Projects from './Projects'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const Process = () => (
  <Section border={false}>
    <S.Split>
      <div />
      <div />
      <div>
        <h2>
          Out of the box
          <br />
          but never
          <br />
          out of touch.
        </h2>
        <p>
          I focus on bringing vision to reality. Think, do, try, repeat…
          There&apos;s no magic trick involved. I care about strategy just as
          much as I care about the craft. My process focuses on defining a clear
          goal and working relentlessly to reach it.
        </p>
      </div>
    </S.Split>
  </Section>
)

const Aim2 = () => (
  <Section border={false}>
    <S.Split>
      <div>
        <h2>
          I leave no stone unturned and take a flexible approach to brand and
          technical descovery. Each project is unique and needs personal
          evaluation — I focus on bringing vision to reality, minus the fluff.
        </h2>
      </div>
      <div />
      <div />
    </S.Split>
  </Section>
)

// const Capabilities = () => (
//   <Section>
//     <S.Capabilities>
//       <h4>Capabilities</h4>
//       <div>web | app dev</div>
//       <div>ui + ux</div>
//       <div>design systems</div>
//       <div>wireframing</div>
//       <div>prototyping</div>
//     </S.Capabilities>
//   </Section>
// )

const Home = () => (
  <S.Home>
    <Hero />
    <Marquee>
      <div>web + app dev</div>
      <div>ui + ux</div>
      <div>design systems</div>
      <div>wireframing</div>
      <div>prototyping</div>
    </Marquee>
    <Projects />
    <Intro />
    <Section>
      <StaticImage
        src="../../../static/wireframe2.jpg"
        alt="A dinosaur"
        placeholder="blurred"
        objectFit="cover"
        aspectRatio={2}
      />
    </Section>

    <Aim />

    <Section>
      <StaticImage
        src="../../../static/wireframe3.jpg"
        alt="A dinosaur"
        placeholder="blurred"
        objectFit="cover"
        aspectRatio={2}
      />
    </Section>
    <Approach />
    {/* <Process /> */}
    <Section>
      <DribbbleGrid />
    </Section>
    <Aim />
  </S.Home>
)

export default Home
