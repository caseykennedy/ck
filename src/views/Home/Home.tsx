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
import Sites from './Sites'
import Outro from './Outro'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

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
      <div>visual designer</div>
      <div>taking on new projects</div>
      <div>software developer</div>
      <div>available for freelance</div>
      <div>decentralize the internet</div>
      <div>collaborate with me</div>
    </Marquee>
    {/* <Projects /> */}
    <Section>
      <DribbbleGrid />
    </Section>
    <Intro />
    <Section>
      <StaticImage
        src="../../../static/wireframe.jpg"
        alt="A dinosaur"
        placeholder="blurred"
        objectFit="cover"
        aspectRatio={1.75}
      />
    </Section>

    {/* <Aim /> */}
    <Approach />
    {/* <Process /> */}

    <Section>
      <StaticImage
        src="../../../static/wireframe3.jpg"
        alt="A dinosaur"
        placeholder="blurred"
        objectFit="cover"
        aspectRatio={1.75}
      />
    </Section>

    {/* <Sites /> */}
    <Outro />
  </S.Home>
)

export default Home
