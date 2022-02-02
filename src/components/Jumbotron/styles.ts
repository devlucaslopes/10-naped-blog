import styled, { css, DefaultTheme } from 'styled-components'

type WrapperType = {
  hasBackground: boolean
  bg: string
}

const wrapperModifier = {
  addBackground: (theme: DefaultTheme, bg: string) => css`
    height: 30rem;
    background: url(${bg}) no-repeat center;
    background-size: cover;
    justify-content: center;
    position: relative;
    padding-left: ${theme.spacings.large};
    z-index: 0;

    > div {
      z-index: 2;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(90deg, #13131f 0%, rgba(19, 19, 31, 0) 100%);
      z-index: 1;
    }
  `
}

export const Wrapper = styled.main<WrapperType>`
  ${({ theme, hasBackground, bg }) => css`
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    ${hasBackground && wrapperModifier.addBackground(theme, bg)}

    h1 {
      width: 100%;
      max-width: 30rem;
      font-size: ${theme.font.sizes.huge};
      font-weight: ${theme.font.weights.normal};
    }

    h2 {
      width: 100%;
      max-width: 50rem;
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.weights.medium};
      color: ${theme.colors['white-200']};
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`
