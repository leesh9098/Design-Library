import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Link href="/atomize" passHref>
        <a>
          <h2>Atomize</h2>
        </a>
      </Link>
      <Link href="/antdesign" passHref>
        <a>
          <h2>Antdesign</h2>
        </a>
      </Link>
      <Link href="grommet" passHref>
        <a>
          <h2>Grommet</h2>
        </a>
      </Link>
    </>
  )
}

export default Home
