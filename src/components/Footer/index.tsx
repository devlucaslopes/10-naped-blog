import Link from 'next/link'

import { Wrapper } from './styles'

export const Footer = () => (
  <Wrapper>
    <Link href="/">Naped</Link>
    <p>
      Todas as imagens de filmes, séries e etc são marcas registradas dos seus
      respectivos proprietários.
    </p>
  </Wrapper>
)
