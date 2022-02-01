import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: ${theme.spacings.xsmall};
  `}
`

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40rem;

    h3 {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.weights.medium};
    }

    p,
    span {
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`
