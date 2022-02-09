import { Wrapper } from './styles'

type NewsType = {
  children: React.ReactNode
}

export const News = ({ children }: NewsType) => (
  <Wrapper aria-label="Publicações mais recentes">{children}</Wrapper>
)
