import { Footer } from '../../components/Footer'
import { Menu } from '../../components/Menu'
import { Container } from './styles'

type BaseTemplateType = {
  children: React.ReactNode
  hideFooter?: boolean
}

export const Base = ({ children, hideFooter = false }: BaseTemplateType) => {
  return (
    <Container>
      <Menu />
      {children}
      {!hideFooter && <Footer />}
    </Container>
  )
}
