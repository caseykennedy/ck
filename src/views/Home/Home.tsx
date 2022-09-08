// HomeView:
// ___________________________________________________________________

import * as React from 'react'

// Components
import Section from '../../components/Section'
import DribbbleGrid from '../../components/DribbbleGrid'
import Marquee from '../../components/Marquee'

// Sections
import Hero from './Hero'
import Intro from './Intro'
import Projects from './Projects'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const Approach = () => (
  <Section border={false}>
    <S.Split>
      <div />
      <div>
        <h2>
          Multifaceted
          <br />
          Harmonic Design
          <br />
          Approach:
        </h2>
        <p>
          Design is much more than it&#39;s visual representation. It is product
          whole vision from the onset. My practice is based on a multifaceted
          approach where technical discovery is emphasized and functionality and
          aesthetic are in balance.
        </p>
      </div>
    </S.Split>
  </Section>
)

const Process = () => (
  <Section border={false}>
    <S.Split>
      <div />
      <div>
        <h2>Out of the box but never out of touch.</h2>
        <p>
          I focus on bringing vision to reality. Think, do, try, repeat… There&apos;s no magic trick involved. I care about strategy just as much as I
          care about the craft. My process focuses on defining a clear goal and working relentlessly to reach it.
        </p>
      </div>
    </S.Split>
  </Section>
)

const Aim = () => (
  <Section border={false}>
    <S.Split>
      <div>
        <h2>
          My aim is to collaborate with my partners and, through time, build
          lasting brands and digital experiences.
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
      <div>web | app dev</div>
      <div>ui + ux</div>
      <div>design systems</div>
      <div>wireframing</div>
      <div>prototyping</div>
    </Marquee>
    <Projects />
    {/* <Intro />
    <Approach /> */}
    {/* <Process /> */}
    <Aim />
    <Section>
      <DribbbleGrid />
    </Section>
    {/* <Capabilities /> */}
  </S.Home>
)

export default Home
