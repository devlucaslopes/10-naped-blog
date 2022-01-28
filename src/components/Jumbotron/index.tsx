import { Wrapper } from './styles'

type JumbotronType = {
  title: string
  subtitle: string
}

export const Jumbotron = ({ title, subtitle }: JumbotronType) => (
  <Wrapper>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </Wrapper>
)
