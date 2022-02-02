import { Wrapper } from './styles'

type JumbotronType = {
  title: string
  subtitle: string
  backgroundURL?: string
}

export const Jumbotron = ({
  title,
  subtitle,
  backgroundURL = ''
}: JumbotronType) => (
  <Wrapper hasBackground={!!backgroundURL} bg={backgroundURL}>
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  </Wrapper>
)
