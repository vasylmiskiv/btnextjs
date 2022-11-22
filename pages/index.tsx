import Head from 'next/head'
import Image from 'next/image'
import ArticleList from '../components/ArticleList';

export default function Home({articles} : any) {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>
          WebDev news
        </title>
        <meta name="keywords" content="web development, programming" />
      </Head>

      <ArticleList articles={articles} />
    </div>
  )
}


export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}