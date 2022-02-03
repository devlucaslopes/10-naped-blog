import { NextPage } from 'next'
import { BackToHome } from '../components/BackToHome'

import { Base } from '../templates/Base'

const NotFound: NextPage = () => (
  <Base hideFooter>
    <BackToHome />
  </Base>
)

export default NotFound
