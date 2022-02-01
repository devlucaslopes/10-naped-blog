import { Title } from './styles'

type HeadingType = {
  children: React.ReactNode
}

export const Heading = ({ children }: HeadingType) => <Title>{children}</Title>
