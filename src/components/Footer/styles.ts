import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    width: 50rem;
    margin: 0 auto;
    text-align: center;
    padding: ${theme.spacings.xsmall};

    a {
      display: block;
      font-size: ${theme.font.sizes.xlarge};
      color: ${theme.colors.primary};
      font-weight: ${theme.font.weights.normal};
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`
