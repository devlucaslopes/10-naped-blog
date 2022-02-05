import { Thumb } from '../../components/Thumb'
import { Jumbotron } from '../../components/Jumbotron'
import { MostPopular } from '../../components/MostPopulars'
import { News } from '../../components/News'
import { Base } from '../Base'
import { RecommendedPosts } from '../../components/RecommendedPosts'
import { Grid } from './styles'
import { LatestPosts } from '../../components/LatestPosts'

export type PostProps = {
  slug: string
  title: string
  summary: string
  cover: string
  tag: string
  publicatedAt: string
}

export type PostsBySectionType = {
  [key: string]: PostProps[]
}

export type HomeTemplateProps = {
  postsBySection: PostsBySectionType
}

export const HomeTemplate = ({ postsBySection }: HomeTemplateProps) => {
  const [higlight, ...othersNewPosts] = postsBySection['news']

  return (
    <Base>
      <Jumbotron
        title="Mundo nerd? Naped!"
        subtitle="O Naped pode ser sua fonte de informações sobre o mundo nerd e outros
      assuntos relacionados."
      />

      <News>
        <Thumb
          tag={higlight.tag}
          description={higlight.summary}
          backgroundURL={higlight.cover}
          size="normal"
          orientation="landscape"
          slug={higlight.slug}
        />

        <div className="right-side">
          {othersNewPosts.map((post) => (
            <Thumb
              key={post.slug}
              tag={post.tag}
              description={post.title}
              backgroundURL={post.cover}
              size="small"
              orientation="landscape"
              slug={post.slug}
            />
          ))}
        </div>
      </News>

      <Grid>
        <MostPopular posts={postsBySection['most-popular']} />
        <LatestPosts posts={postsBySection['latest']} />
      </Grid>

      <RecommendedPosts posts={postsBySection['recommended']} />
    </Base>
  )
}
