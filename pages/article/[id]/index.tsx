import { server } from '../../../config';
import { useRouter } from "next/router";
import Link from "next/link";

const article = ({ article }: ArticleItem) => {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      <div className="border rounded-lg p-5">
        <div className="text-xl mb-5 text-tahiti">{article.title}</div>
        <p className="max-w-lg text-left">{article.body}</p>
        <br />
      </div>
      <Link
        href="/"
        className="mt-5 p-2 border rounded-lg hover:bg-bubble-gum hover:text-midnight"
      >
        Go back
      </Link>
    </>
  );
};

export const getStaticProps = async (context : any) => {
  const res = await fetch(
    `${server}/api/articles/${context.params.id}` 
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
   const res = await fetch (`${server}/api/articles`);

   const articles = await res.json();

   const ids = articles.map((article: any) => article.id);

   const paths = ids.map((id: number) => ({ params: {id: id.toString() }}));

   return {
    paths,
    fallback: false, 
   };
};

// export const getStaticProps = async (context : any) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//    const res = await fetch (`https://jsonplaceholder.typicode.com/posts`);

//    const articles = await res.json();

//    const ids = articles.map((article: any) => article.id);

//    const paths = ids.map((id: number) => ({ params: {id: id.toString() }}))

//    return {
//     paths,
//     fallback: false, 
//    }
// }

export default article;
