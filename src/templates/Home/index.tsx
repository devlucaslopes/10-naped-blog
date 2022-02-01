import { Thumb } from '../../components/Thumb'
import { Jumbotron } from '../../components/Jumbotron'
import { MostPopular } from '../../components/MostPopulars'
import { News } from '../../components/News'
import { Base } from '../Base'
import { RecommendedPosts } from '../../components/RecommendedPosts'

export const Home = () => {
  return (
    <Base>
      <Jumbotron
        title="Mundo nerd? Naped!"
        subtitle="O Naped pode ser sua fonte de informações sobre o mundo nerd e outros
      assuntos relacionados."
      />

      <News>
        <Thumb
          tag="games"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."
          backgroundURL="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80"
          size="normal"
          orientation="landscape"
        />

        <div className="right-side">
          <Thumb
            tag="games"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."
            backgroundURL="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80"
            size="small"
            orientation="landscape"
          />
          <Thumb
            tag="games"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."
            backgroundURL="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80"
            size="small"
            orientation="landscape"
          />
        </div>
      </News>

      <MostPopular />

      <RecommendedPosts />
    </Base>
  )
}
