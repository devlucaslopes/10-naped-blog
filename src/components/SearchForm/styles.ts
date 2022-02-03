import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    height: 6rem;
    padding: ${theme.spacings.xsmall};
    background-color: ${theme.colors['gray-200']};
    margin: ${theme.spacings.large} 0 ${theme.spacings.xlarge} 0;

    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};

    &:focus-within {
      border: 1px solid ${theme.colors.primary};

      > svg {
        color: ${theme.colors.primary};
      }
    }

    > input {
      height: 100%;
      flex: 1;
      border: 0;
      background: none;
      font-size: ${theme.font.sizes.large};
      color: inherit;
      outline: none;
    }
  `}
`
