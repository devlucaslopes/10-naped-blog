import styled, { css, DefaultTheme } from 'styled-components'

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.medium} 0;

    > a {
      font-size: ${theme.font.sizes.xlarge};
      color: ${theme.colors.primary};
      font-weight: ${theme.font.weights.normal};
    }
  `}
`

export const Navigation = styled.nav`
  ${({ theme }) => css`
    ul {
      display: flex;
      gap: ${theme.grid.gutter};
    }
  `}
`

type NavLinkType = {
  isCurrent: boolean
}

const bottomLine = (theme: DefaultTheme) => css`
  color: ${theme.colors.white};

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${theme.colors.primary};
    bottom: -2px;
    left: 0;
  }
`

export const NavLink = styled.a<NavLinkType>`
  ${({ theme, isCurrent }) => css`
    flex: 1;
    font-weight: ${theme.font.weights.medium};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors['white-200']};
    position: relative;
    transition: color 100ms;

    ${isCurrent && bottomLine(theme)};

    &:hover {
      ${bottomLine(theme)}
    }
  `}
`
