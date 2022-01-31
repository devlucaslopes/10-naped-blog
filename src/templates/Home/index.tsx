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
        <Highlight
          tag="games"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."
          size="normal"
          orientation="landscape"
        />

        <div className="right-side">
          <Highlight
            tag="games"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."
            size="small"
            orientation="landscape"
          />
          <Highlight
            tag="games"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."
            size="small"
            orientation="landscape"
          />
        </div>
      </News>
    </Base>
  )
}
