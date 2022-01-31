import { Highlight } from '../../components/Highlight'
import { Jumbotron } from '../../components/Jumbotron'
import { Base } from '../Base'

export const Home = () => {
  return (
    <Base>
      <Jumbotron
        title="Mundo nerd? Naped!"
        subtitle="O Naped pode ser sua fonte de informações sobre o mundo nerd e outros
      assuntos relacionados."
      />

      <Highlight />
    </Base>
  )
}
