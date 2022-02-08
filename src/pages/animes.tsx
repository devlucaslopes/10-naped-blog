import type { NextPage } from 'next'
import Head from 'next/head'

import { AnimesTemplate } from '../templates/Animes'

const Animes: NextPage = () => {
  return (
    <>
      <Head>
        <title>Animes | Naped Blog</title>
      </Head>
      <AnimesTemplate />
    </>
  )
}

export default Animes
