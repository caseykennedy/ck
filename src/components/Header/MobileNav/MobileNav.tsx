// MobileNav:
// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

// import theme from '../../../styles/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -1000 },
    },
  },
  closed: {
    y: 25,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const listVariants = {
  open: {
    transition: { staggerChildren: 0.035, delayChildren: 0.03 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

type LinkProps = {
  item: {
    link: string
    name: string
  }
  handleExitOnClick: () => void
}

const NavLink = ({ item, handleExitOnClick }: LinkProps) => (
  <S.NavLink
    variants={itemVariants}
    whileTap={{ scale: 0.98 }}
    onClick={handleExitOnClick}
  >
    <Link to={item.link}>{item.name}</Link>
  </S.NavLink>
)

type NavProps = {
  handleExitOnClick: () => void
  isOpen: boolean
}

const MobileNav = ({ handleExitOnClick, isOpen }: NavProps) => (
  <motion.div initial="closed" animate={isOpen ? 'open' : 'closed'}>
    <S.MobileNav variants={listVariants}>
      <div className="content">
        <button type="button" onClick={handleExitOnClick} className="exit">
          exit
        </button>
        <motion.div variants={itemVariants}>namelayer auctions info</motion.div>
      </div>
      {/* {routes.map((item, idx) => (
        <NavLink key={idx} handleExitOnClick={handleExitOnClick} item={item} />
      ))} */}
    </S.MobileNav>
  </motion.div>
)

export default MobileNav
