import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
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

    a,
    button {
      cursor: pointer;
    }

    ul {
      list-style: none;
    }

    a {
      text-decoration: none;
    }
  `}
`

export default GlobalStyles
