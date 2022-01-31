import { Highlight } from '../../components/Highlight'
import { Jumbotron } from '../../components/Jumbotron'
import { News } from '../../components/News'
import { Base } from '../Base'

export const Home = () => {
  return (
    <Base>
      <Jumbotron
        title="Mundo nerd? Naped!"
        subtitle="O Naped pode ser sua fonte de informações sobre o mundo nerd e outros
      assuntos relacionados."
      />

      <News>
        <Highlight size="normal" orientation="landscape" />

        <div className="right-side">
          <Highlight size="small" orientation="landscape" />
          <Highlight size="small" orientation="landscape" />
        </div>
      </News>

      <News>
        <Highlight size="normal" orientation="landscape" />

        <div className="right-side">
          <Highlight size="small" orientation="landscape" />
          <Highlight size="small" orientation="landscape" />
        </div>
      </News>
    </Base>
  )
}
