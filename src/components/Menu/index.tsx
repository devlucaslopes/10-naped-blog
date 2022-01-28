import Link from 'next/link'

import { Header, Navigation } from './styles'

export const Menu = () => (
  <Header>
    <Link href="/">Naped</Link>

    <Navigation>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Séries</Link>
        </li>
        <li>
          <Link href="/">Filmes</Link>
        </li>
        <li>
          <Link href="/">Animes</Link>
        </li>
        <li>
          <Link href="/">Games</Link>
        </li>
      </ul>
    </Navigation>
  </Header>
)
