// Accordion Styles:
// ___________________________________________________________________

import styled from 'styled-components'
import breakpoint from '../../utils/breakpoint'

// ___________________________________________________________________

export const AccordionContainer = styled.div`
  border: var(--border);
  border-radius: var(--radius);
  margin-bottom: var(--gutter);
  position: relative;
  width: 100%;
`

export const AccordionInner = styled.div<{bg?: string}>`
  /* background: ${p => p.bg}; */
  display: flex;
  flex-direction: column;
`

export const AccordionToggle = styled.div<{ bg?: string, colorActive?: string, color?: string}>`
display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${p => p.color};
  cursor: pointer;

  outline: none;
  transition: background-color var(--transition-global);

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background: var(--color-primary);
  }
`

export const AccordionContent = styled.div`
  overflow: hidden;
  transition: var(--transition-all);

  .content {
    flex-wrap: wrap;
    padding-top: var(--gutter);
    padding-bottom: var(--gutter);
  }
`

export const Carat = styled.div<{ caratColor?: string, caratWidth?: string }>`
  display: none;
  transition: var(--transition-all);

  @media ${breakpoint.tablet} {
    display: flex;
    align-items: center;
  }

  &.rotate {
    transform-origin: center;
    transform: rotate(90deg);
  }

  svg {
    fill: ${p => p.caratColor};
    width: ${p => p.caratWidth ? p.caratWidth : "var(--gutter)"};
  }
`
