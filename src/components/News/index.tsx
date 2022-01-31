import { Wrapper } from './styles'

type NewsType = {
  children: React.ReactNode
}

export const News = ({ children }: NewsType) => <Wrapper>{children}</Wrapper>
