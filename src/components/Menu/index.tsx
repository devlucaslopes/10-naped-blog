import Link from 'next/link'
import { useRouter } from 'next/router'

import { Header, Navigation, NavLink } from './styles'

export const Menu = () => {
  const { pathname } = useRouter()

  return (
    <Header>
      <Link href="/">Naped</Link>

      <Navigation>
        <ul>
          <li>
            <Link href="/" passHref>
              <NavLink isCurrent={pathname === '/'}>Home</NavLink>
            </Link>
          </li>
          <li>
            <Link href="/series" passHref>
              <NavLink isCurrent={pathname === '/series'}>Séries</NavLink>
            </Link>
          </li>
          <li>
            <Link href="/movies" passHref>
              <NavLink isCurrent={pathname === '/movies'}>Filmes</NavLink>
            </Link>
          </li>
          <li>
            <Link href="/animes" passHref>
              <NavLink isCurrent={pathname === '/animes'}>Animes</NavLink>
            </Link>
          </li>
          <li>
            <Link href="/games" passHref>
              <NavLink isCurrent={pathname === '/games'}>Games</NavLink>
            </Link>
          </li>
        </ul>
      </Navigation>
    </Header>
  )
}
