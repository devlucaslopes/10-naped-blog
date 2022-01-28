import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

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
