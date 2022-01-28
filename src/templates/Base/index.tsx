import { Menu } from '../../components/Menu'
import { Container } from './styles'

type BaseTemplateType = {
  children: React.ReactNode
}

export const Base = ({ children }: BaseTemplateType) => {
  return (
    <Container>
      <Menu />
      {children}
    </Container>
  )
}
