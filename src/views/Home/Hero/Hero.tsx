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
              I collab with people, teams and visionaries—together we build
              cutting-edge products.
            </h1>
          </div>
        </div>
        <div className="meta">
          <div>
            based in nevada
            <br />
            <span>{nevadaTime}</span>
          </div>
          <div>
            <div>
              find me on
              <br />
              <a
                href="https://github.com/caseykennedy"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>{' '}
              /{' '}
              <a
                href="https://dribbble.com/caseykennedy"
                target="_blank"
                rel="noreferrer"
              >
                Dribbble
              </a>{' '}
              /{' '}
              <a
                href="https://www.linkedin.com/in/casey-kennedy-0b123727/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </S.Hero>
      <S.Tetra>
        <Canvas camera={{ position: [0, 2, 10], fov: 60 }}>
          {/* <ambientLight intensity={0.5} /> */}
          <ambientLight intensity={1} />
          <spotLight
            position={[20, 20, 25]}
            penumbra={1}
            angle={0.25}
            color="cyan"
            // castShadow
            // shadow-mapSize={[512, 512]}
          />
          <directionalLight position={[0, 5, -4]} intensity={4} />
          <directionalLight position={[0, -15, -0]} intensity={2} color="red" />

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
            radius={4}
            detail={0}
            speed={0.0009}
            wireframe={true}
          />
        </Canvas>
      </S.Tetra>
    </>
  )
}

export default Hero
