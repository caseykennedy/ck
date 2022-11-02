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
              Helping people build
              <br />
              cutting-edge digital products.
            </h1>
          </div>
        </div>
        <div className="meta">
          <div>
            based in nevada
            <br />
            {nevadaTime}
          </div>
          <div>
            <div>
              find me on
              <br />
              <a href="/" target="_blank" rel="noopener">
                GitHub
              </a>{' '}
              /{' '}
              <a href="/" target="_blank" rel="noopener">
                Dribbble
              </a>{' '}
              /{' '}
              <a href="/" target="_blank" rel="noopener">
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
            radius={3}
            speed={1}
            wireframe={false}
          />
          <TetraGeo
            flatShading={false}
            position={[0, 1, 0]}
            radius={4}
            detail={1}
            speed={0.0003}
            wireframe={true}
          />
        </Canvas>
      </S.Tetra>
    </>
  )
}

export default Hero
