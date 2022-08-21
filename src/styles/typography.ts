// Typography
// ___________________________________________________________________

import { css } from 'styled-components'
import { breakpoint, textCrop } from './mixins'

// NBInternationalPro Regular
import NBInternationalProMonoEot from './fonts/NBInternationalPro-Mono.eot'
import NBInternationalProMonoWoff2 from './fonts/NBInternationalPro-Mono.woff2'
import NBInternationalProMonoWoff from './fonts/NBInternationalPro-Mono.woff'
import NBInternationalProMonoOtf from './fonts/NBInternationalPro-Mono.otf'

// NBInternationalPro Regular
import NBInternationalProRegularEot from './fonts/NBInternationalPro-Regular.eot'
import NBInternationalProRegularWoff2 from './fonts/NBInternationalPro-Regular.woff2'
import NBInternationalProRegularWoff from './fonts/NBInternationalPro-Regular.woff'
import NBInternationalProRegularOtf from './fonts/NBInternationalPro-Regular.otf'

// NBInternationalPro Light
import NBInternationalProLightEot from './fonts/NBInternationalPro-Light.eot'
import NBInternationalProLightWoff2 from './fonts/NBInternationalPro-Light.woff2'
import NBInternationalProLightWoff from './fonts/NBInternationalPro-Light.woff'
import NBInternationalProLightOtf from './fonts/NBInternationalPro-Light.otf'

// NBInternationalPro Medium
import NBInternationalProMediumEot from './fonts/NBInternationalPro-Medium.eot'
import NBInternationalProMediumWoff2 from './fonts/NBInternationalPro-Medium.woff2'
import NBInternationalProMediumWoff from './fonts/NBInternationalPro-Medium.woff'
import NBInternationalProMediumOtf from './fonts/NBInternationalPro-Medium.otf'

// NBInternationalPro Bold
import NBInternationalProBoldEot from './fonts/NBInternationalPro-Bold.eot'
import NBInternationalProBoldWoff2 from './fonts/NBInternationalPro-Bold.woff2'
import NBInternationalProBoldWoff from './fonts/NBInternationalPro-Bold.woff'
import NBInternationalProBoldOtf from './fonts/NBInternationalPro-Bold.otf'

// ___________________________________________________________________

const Typography = css`
  :root {
    // font family
    --font-primary: 'NBInternationalPro', Helvetica, Arial, sans;
    --font-mono: 'NBInternationalProMono', Menlo, Liberation Mono, Courier,
      monospace;
    --font-sans: 'NBInternationalPro', Helvetica, Arial, sans;

    // font size
    --text-root-size: 1rem;
    --text-base-size: 1.125rem; // body font-size
    --text-scale-ratio: 1.333; // multiplier used to generate the type scale values 👇

    // font weight
    --body-font-weight: 400;
    --heading-font-weight: 500;

    // line-height
    --body-line-height: 1.25;
    --heading-line-height: 1.25;

    // letter-spacing
    --heading-letter-spacing: 0em;
    --body-letter-spacing: 0em;

    // capital letters - used in combo with the lhCrop mixin
    --font-primary-capital-letter: 1;

    // unit - don't modify unless you want to change the typography unit (e.g., from Rem to Em units)
    --text-unit: var(--text-base-size); // if Em units → --text-unit: 1em;

    // @include breakpoint(sm) {
    //   --text-base-size: 1rem;
    // }
  }

  :root,
  * {
    // type scale
    --text-xs: calc(
      (var(--text-unit) / var(--text-scale-ratio)) / var(--text-scale-ratio)
    );
    --text-sm: calc(var(--text-xs) * var(--text-scale-ratio));
    --text-md: calc(
      var(--text-sm) * var(--text-scale-ratio) * var(--text-scale-ratio)
    );
    --text-lg: calc(var(--text-md) * var(--text-scale-ratio));
    --text-xl: calc(var(--text-lg) * var(--text-scale-ratio));
    --text-xxl: calc(var(--text-xl) * var(--text-scale-ratio));
    --text-xxxl: calc(var(--text-xxl) * var(--text-scale-ratio));
    --text-xxxxl: calc(var(--text-xxxl) * var(--text-scale-ratio));
  }

  /* NBInternationalPro Mono */
  @font-face {
    font-family: 'NBInternationalProMono';
    src: url(${NBInternationalProMonoEot});
    src: url(${NBInternationalProMonoWoff2}) format('woff2'),
      url(${NBInternationalProMonoWoff}) format('woff'),
      url(${NBInternationalProMonoOtf}) format('opentype'),
      url(${NBInternationalProMonoEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* NBInternationalPro Regular */
  @font-face {
    font-family: 'NBInternationalPro';
    src: url(${NBInternationalProRegularEot});
    src: url(${NBInternationalProRegularWoff2}) format('woff2'),
      url(${NBInternationalProRegularWoff}) format('woff'),
      url(${NBInternationalProRegularOtf}) format('opentype'),
      url(${NBInternationalProRegularEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* NBInternationalPro Light */
  @font-face {
    font-family: 'NBInternationalPro';
    src: url(${NBInternationalProLightEot});
    src: url(${NBInternationalProLightWoff2}) format('woff2'),
      url(${NBInternationalProLightWoff}) format('woff'),
      url(${NBInternationalProLightOtf}) format('opentype'),
      url(${NBInternationalProLightEot}?#iefix) format('embedded-opentype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  /* NBInternationalPro Medium */
  @font-face {
    font-family: 'NBInternationalPro';
    src: url(${NBInternationalProMediumEot});
    src: url(${NBInternationalProMediumWoff2}) format('woff2'),
      url(${NBInternationalProMediumWoff}) format('woff'),
      url(${NBInternationalProMediumOtf}) format('opentype'),
      url(${NBInternationalProMediumEot}?#iefix) format('embedded-opentype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  /* NBInternationalPro Bold */
  @font-face {
    font-family: 'NBInternationalPro';
    src: url(${NBInternationalProBoldEot});
    src: url(${NBInternationalProBoldWoff2}) format('woff2'),
      url(${NBInternationalProBoldWoff}) format('woff'),
      url(${NBInternationalProBoldOtf}) format('opentype'),
      url(${NBInternationalProBoldEot}?#iefix) format('embedded-opentype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  ::selection {
    color: var(--color-black);
    background-color: var(--color-primary);
  }

  body,
  html {
    color: var(--color-text);
    font-family: var(--font-primary);
    font-size: var(--text-base-size);
    font-weight: var(--body-font-weight);
    line-height: var(--body-line-height);

    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-feature-settings: 'pnum';
    text-rendering: geometricPrecision;
    font-feature-settings: 'pnum';
    font-variant-numeric: proportional-nums;
    font-variant-ligatures: discretionary-ligatures;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    ${textCrop(1, 0.05, -0.05)}

    font-family: var(--font-sans);
    font-weight: var(--heading-font-weight);
    line-height: var(--heading-line-height);
    margin-bottom: var(--space-lg);
  }

  h1 {
    font-size: var(--text-xl);

    @media ${breakpoint.desktop} {
      font-size: var(--text-xxxxl);
    }
  }

  h2 {
    font-size: var(--text-lg);
  }

  h3 {
    font-size: var(--text-md);
  }

  h4 {
    font-size: var(--text-sm);
    font-weight: 600;
  }

  h5 {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    font-weight: var(--heading-font-weight);
    /* text-transform: uppercase; */
    margin-bottom: var(--space-xxxxl);
  }

  // --------------------------------

  // Inline Text

  // --------------------------------

  p {
    ${textCrop(1, 0.05, -0.05)}

    font-size: var(--text-base-size);
    line-height: var(--body-line-height);

    &:not(:last-child) {
      margin-bottom: var(--space-md);
    }

    &.lead {
      font-size: var(--text-md);
    }
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: var(--transition-all);

    &:hover {
      color: var(--color-primary-light);
    }

    &.link {
      color: var(--color-accent);
      text-decoration: none;
      transition: var(--transition-all);

      &:hover {
        // color: var(--color-primary-light);
        text-decoration: underline;
      }
    }
  }

  small {
    font-size: var(--text-sm);
  }

  strong {
    font-weight: 700;
  }

  s {
    text-decoration: line-through;
  }

  u {
    text-decoration: underline;
  }

  mark {
    background-color: var(--color-warning-light);
    color: inherit;
  }

  .text-component {
    --line-height-multiplier: 1;
    --text-space-y-multiplier: 1;

    > * {
      // use Em units
      --text-unit: 1em;
      --space-unit: 1em;
    }

    blockquote {
      padding-left: 1em;
      border-left: 4px solid var(--color-contrast-lower);
      font-style: italic;
    }

    hr {
      background: var(--color-contrast-lower);
      height: 1px;
    }

    figcaption {
      font-size: var(--text-sm);
      color: var(--color-contrast-low);
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: var(--gutter);
    gap: var(--space-sm);

    font-size: var(--text-root-size);
    margin-top: var(--space-md);

    li {
      display: flex;
      align-items: center;

      span {
        margin-right: var(--space-xxs);
        position: relative;
        bottom: -2px;

        svg {
          width: 10px;
        }
      }
    }
  }
`

export default Typography
