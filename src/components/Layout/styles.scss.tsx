// Layout Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import breakpoint from '../../utils/breakpoint'

// ___________________________________________________________________

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  height: 100%;
  width: 100%;

  /* @media ${breakpoint.tablet} {
    flex-flow: row nowrap;
  } */
`

export const Content = styled.div`
  flex: 1;
  display: flex;

  /* display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: var(--gutter);
  gap: var(--gutter); */

  width: 100%;
`
