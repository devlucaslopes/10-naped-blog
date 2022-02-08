import { Wrapper } from './styles'

type NewsType = {
  children: React.ReactNode
}

export const News = ({ children }: NewsType) => (
  <Wrapper aria-label="Novos posts">{children}</Wrapper>
)
