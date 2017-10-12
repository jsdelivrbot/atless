import Link from 'next/link';
import Layout from './components/layout';

const Index = (props) => (
  <Layout>
    <div>
      <h1>Live <i>your</i> way</h1>
      <Link href={`/outdoors`}>
        <a>Outdoors</a>
      </Link>
      <Link href={`/photography`}>
        <a>Photography</a>
      </Link>
      <Link href={`/coding`}>
        <a>Coding</a>
      </Link>
    </div>
  </Layout>
)

export default Index
