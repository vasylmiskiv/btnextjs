import Head from 'next/head';

interface Meta {
  title: string;
  keywords: string;
  description: string;
}

const Meta = ({ title, keywords, description }: Meta) => {
  return (
    <Head>
      <meta name='viewport'
        content='weidth=device-width, intial-scale=1' />
        <meta name='keywords' content={keywords}/>
        <meta name='description' content={description} />
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'WebDev News',
  keywords: 'development, programming, food, drinks, pancakes',
  description: 'Get the latest news in development and food world'
}

export default Meta; 