// Accordion Styles:
// ___________________________________________________________________

import styled from 'styled-components'
import { motion } from 'framer-motion'
import breakpoint from '../../utils/breakpoint'

// ___________________________________________________________________

export const AccordionContainer = styled(motion.div)`
  background: var(--black);
  border-bottom: var(--border);
  margin-bottom: var(--space-lg);
  position: relative;
  width: 100%;
`

export const AccordionInner = styled.div`
  display: flex;
  flex-direction: column;
`

export const AccordionToggle = styled(motion.div)`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  color: var(--color-heading);
  font-size: var(--text-lg);
  font-weight: 600;
  cursor: pointer;

  padding: 0 0 var(--space-xs);

  outline: none;
  transition: background-color var(--transition-global);

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background: var(--color-primary);
  }
`

export const AccordionContent = styled(motion.div)`
  overflow: hidden;
  /* transition: var(--transition-all); */

  .content {
    flex-wrap: wrap;
    padding-top: var(--gutter);
    padding-bottom: var(--gutter);
  }
`

export const Carat = styled(motion.div)`
  display: flex;
  align-items: center;
  transition: var(--transition-all);

  &.rotate {
    transform-origin: center;
    transform: rotate(90deg);
  }

  svg {
    fill: var(--color-white);
    width: inherit;
  }
`
