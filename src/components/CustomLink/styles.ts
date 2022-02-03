import styled, { css, DefaultTheme } from 'styled-components'

import { CustomLinkSizes } from '.'

type PurpleLinkType = {
  size: CustomLinkSizes
}

const purpleLinkModifier = {
  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    padding: 0.8rem 0;
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    padding: 0.4rem 0;
  `
}

export const PurpleLink = styled.a<PurpleLinkType>`
  ${({ theme, size }) => css`
    width: 100%;
    display: block;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    text-align: center;
    border-radius: 0.4rem;

    ${purpleLinkModifier[size](theme)}

    transition: filter 100ms ease-in-out;

    &:hover {
      filter: brightness(0.8);
    }
  `}
`
