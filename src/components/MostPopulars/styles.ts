import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 0.8rem;
    }

    ::-webkit-scrollbar-track {
      background: ${theme.colors['gray-200']};
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.primary};
    }
  `}
`
