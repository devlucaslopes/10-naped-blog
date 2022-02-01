import { Heading } from '../Heading'
import { Highlight } from '../Highlight'
import { PostPreview } from '../PostPreview'

import { Wrapper, PostPreviewList, LatestPostsList } from './styles'

export const MostPopular = () => (
  <Wrapper>
    <PostPreviewList>
      <PostPreview />
      <PostPreview />
      <PostPreview />
      <PostPreview />
      <PostPreview />
      <PostPreview />
      <PostPreview />
      <PostPreview />
    </PostPreviewList>
    <LatestPostsList>
      <Heading>Lorem ipsum dolor</Heading>
      <div>
        <Highlight
          tag="games"
          backgroundURL="https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          size="normal"
          orientation="portrait"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."
        />
        <Highlight
          tag="games"
          backgroundURL="https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          size="normal"
          orientation="portrait"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."
        />
        <Highlight
          tag="games"
          backgroundURL="https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          size="normal"
          orientation="portrait"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."
        />
      </div>
    </LatestPostsList>
  </Wrapper>
)
