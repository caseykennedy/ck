/* eslint-disable react/no-unescaped-entities */
// HomeView:
// ___________________________________________________________________

import * as React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Styles
import * as S from './styles.scss'

// Components
import Icon from '../../components/Icons'
import Section from '../../components/Section'
import Rings from '../../components/SVG/Rings'
import Wordmark from '../../components/SVG/Wordmark'

// ___________________________________________________________________

const polyVariant = {
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 3,
    },
  },
  hidden: {
    opacity: 0,
  },
}

const svgVariant = {
  visible: {
    transition: { staggerChildren: 0.25, delayChildren: 0.5 },
  },
}

const idealPersonas = [
  'namers',
  'cypherpunks',
  'robots',
  'domainers',
  'users',
  'programs',
]

const featureData = [
  {
    title: 'Domain Manager',
    desc: 'Manage your decentralized domains and on-chain DNS.',
  },
  {
    title: 'TLD Marketplace',
    desc: 'Bid on new TLDs in the primary market. Participate in domain auctions.',
  },
  {
    title: 'Non-custodial Wallet',
    desc: 'Hodl, send and receive HNS and own your private keys.',
  },
  {
    title: 'Utility with Handshake',
    desc: 'Useful integrations with community projects.',
  },
  {
    title: 'Mint SLD NFTs',
    desc: 'Stake your TLD and sell sub-level domains in the secondary market. ',
  },
  {
    title: 'Secondary Marketplace',
    desc: 'Buy and sell domains amongst holders in the secondary market.',
  },
  {
    title: 'Light Client',
    desc: 'SPV light client support.',
  },
  {
    title: 'Fractals',
    desc: 'Decentralized link-trees and domain parking.',
  },
  {
    title: 'Hardware Support',
    desc: 'Ledger integration for hardware wallet support.',
  },
  {
    title: 'Atomic Swaps',
    desc: 'In-app Bitcoin atomic swaps.',
  },
]

const Hero = () => (
  <S.Hero>
    <div className="billboard">
      <div className="wordmark">
        <Wordmark />
      </div>
      <div>
        <h2>
          Namelayer is your on-chain domain manager and non-custodial HNS wallet
          for the Handshake blockchain.
        </h2>
        <p>Manage .yourname/ on the decentralized internet with Handshake.</p>
      </div>
    </div>
    <div className="figure">
      <div className="rings">
        <Rings />
      </div>
      <div className="handshake">
        <Icon name="handshake" />
      </div>
    </div>
  </S.Hero>
)

const Meta = () => (
  <Section>
    <S.Meta variants={svgVariant} initial="hidden" animate="visible">
      <motion.div variants={polyVariant} className="item item--built">
        <span className="pill pill--built">built by namers</span>
        <p>taylor, chris, casey</p>
      </motion.div>
      <motion.div variants={polyVariant} className="item item--advised">
        <span className="pill pill--advised">advised by degens</span>
        <p>jackie, chjango, kyokan</p>
      </motion.div>
      <motion.div variants={polyVariant} className="item item--supported">
        <span className="pill pill--supported">supported by</span>
        <p>@dwebfoundation</p>
      </motion.div>
    </S.Meta>
  </Section>
)

const Intro = () => (
  <Section border={true} pt="0" pr="0" pb="0" pl="0">
    <S.Intro>
      <div>
        <h5 className="">intro</h5>
        <div className="private-keys">
          <h2>
            Not your 🔑’s not your 🧀 — With Namelayer you hold your private
            keys.
          </h2>
        </div>
      </div>
      <div>
        {/* <div className="browser-compat">
          <h3>Access Handshake TLDs with these browsers:</h3>
          <ul>
            <li>- Beacon</li>
            <li>- Brave</li>
            <li>- Opera</li>
            <li>- Puma</li>
            <li>- Aloha</li>
          </ul>
        </div>
        <div className="handshake-info">
          <h3>An experimental peer-to-peer root naming system.</h3>
          <p>Handshake is a decentralized naming and certificate authority.</p>
          <a href="https://handshake.org" target="__blank" rel="noreferrer">
            Handshake.org
          </a>
        </div> */}
      </div>
    </S.Intro>
  </Section>
)

const Features = () => (
  <Section border={true} pt="0" pr="0" pb="0" pl="0">
    <S.Features>
      <div className="feature-detail">
        <div className="feature-detail__sticky">
          <h5>features</h5>
          <h2>It's not just a wallet.</h2>
          <p className="lead">
            With Namelayer you can manage your domains, send and receive HNS,
            and participate in domain auctions from your native device.
          </p>
          <div className="list-title">Namelayer is great for:</div>
          <ul>
            {idealPersonas.map((persona, idx) => (
              <li key={idx}>
                <Icon name="plus" /> {persona}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="feature-list">
        {featureData.map((feat, idx) => (
          <div className="feature" key={idx}>
            <div className="feature__title">{feat.title}</div>
            <div className="feature__desc">{feat.desc}</div>
          </div>
        ))}
      </div>
    </S.Features>
  </Section>
)

const Roadmap = () => (
  <Section border={true}>
    <h5 className="">roadmap</h5>
    <h2>There's plenty in the pipeline.</h2>
  </Section>
)

const Team = () => (
  <Section border={true}>
    <h5 className="">team</h5>
    <h2>Dedicated to decentralization.</h2>
  </Section>
)

const Outro = () => (
  <Section border={true}>
    <h5 className="">outro</h5>
    <h2>Slide into our DMs.</h2>
    <p>More info, features and news on the way.</p>
    <p>auctions, twitter, handshake.org, newsletter</p>
  </Section>
)

const HomeView = () => (
  <S.HomeView>
    <Hero />
    <Meta />
    <Intro />
    <Features />
    <Roadmap />
    <Team />
    <Outro />
  </S.HomeView>
)

export default HomeView
