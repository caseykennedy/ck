/* eslint-disable react/no-unknown-property */
// Hero:
// ___________________________________________________________________

import * as React from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'

// Components
import TetraGeo from '../../../components/TetraGeo'

// Hooks
import useDate from '../../../hooks/useDate'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const HeroCanvas = () => (
  <S.Tetra>
    <Canvas camera={{ position: [0, 2, 10], fov: 60 }}>
      <ambientLight intensity={1} />
      <spotLight
        position={[20, 20, 25]}
        penumbra={1}
        angle={0.25}
        color="black"
        // castShadow
        // shadow-mapSize={[512, 512]}
      />
      <directionalLight position={[0, 5, -4]} intensity={20} />
      <directionalLight position={[0, -15, -0]} intensity={19} color="blue" />
      <TetraGeo
        flatShading={false}
        position={[0, 1, 0]}
        radius={1}
        speed={0.0035}
        wireframe={false}
      />
      <TetraGeo
        flatShading={false}
        position={[0, 1, 0]}
        radius={5}
        detail={0}
        speed={0.00079}
        wireframe={true}
      />
    </Canvas>
  </S.Tetra>
)

const Hero = () => {
  const nevadaTime = useDate()
  return (
    <>
      <S.Hero>
        <div className="billboard">
          <div>
            <h1>
              {/* Helping brands develop
              <br />
              cutting-edge digital experiences. */}
              {/* Design and development for people, teams and visionaries— */}
              Web development &amp; visual design for people, teams and
              visionaries.
            </h1>
          </div>
        </div>
        <div className="meta">
          <div className="meta__col">
            <div>
              northern nevada
              <br />
              <span>{nevadaTime}</span>
            </div>
          </div>
          <div className="meta__col">
            <div>
              find me on
              <br />
              <a
                href="https://github.com/caseykennedy"
                target="_blank"
                rel="noreferrer"
                className="link ne-resize"
              >
                github
              </a>
              <a
                href="https://dribbble.com/caseykennedy"
                target="_blank"
                rel="noreferrer"
                className="link ne-resize"
              >
                dribbble
              </a>
              <a
                href="https://www.linkedin.com/in/casey-kennedy-0b123727/"
                target="_blank"
                rel="noreferrer"
                className="link ne-resize"
              >
                linkedin
              </a>
            </div>
          </div>
        </div>
      </S.Hero>
      <HeroCanvas />
    </>
  )
}

export default Hero
