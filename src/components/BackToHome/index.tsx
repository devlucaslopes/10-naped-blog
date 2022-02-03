import Image from 'next/image'

import { CustomLink } from '../CustomLink'

import { Wrapper } from './styles'

export const BackToHome = () => (
  <Wrapper>
    <div>
      <h1>Tenho más notícias para você!</h1>
      <p>
        A página que você está procurando pode ter sido removida ou está
        temporariamente indisponível.
      </p>
      <CustomLink url="/">Voltar para Home</CustomLink>
    </div>
    <div>
      <Image
        src="/imgs/not-found.png"
        width={400}
        height={206}
        layout="responsive"
      />
      <p>Ups! Você chegou no espaço... volte para o mundo nerd!</p>
    </div>
  </Wrapper>
)
