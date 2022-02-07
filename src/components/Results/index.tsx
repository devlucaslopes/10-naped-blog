import { PostProps } from '../../templates/Home'
import { Thumb } from '../Thumb'
import { Grid } from './styles'

type ResultsProps = {
  posts: PostProps[]
}

export const Results = ({ posts }: ResultsProps) => (
  <Grid>
    {posts.map((post) => (
      <Thumb
        tag={post.tag}
        description={post.summary}
        backgroundURL={post.cover}
        size="normal"
        orientation="landscape"
        slug={post.slug}
      />
    ))}
  </Grid>
)
