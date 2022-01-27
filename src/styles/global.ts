import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

import theme from './theme'

type Theme = typeof theme

const GlobalStyles: GlobalStyleComponent<
  Theme,
  DefaultTheme
> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.familyBody};
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.dark};
      color: ${theme.colors['white-200']};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${theme.font.familyHeading};
      color: ${theme.colors['white']};
    }

    button {
      cursor: pointer;
    }
  `}
`

export default GlobalStyles
