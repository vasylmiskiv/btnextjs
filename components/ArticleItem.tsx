import Link from "next/link";
import Meta from "./Meta";
import articleStyle from "../styles/Article.module.css";

const ArticleItem = ({ article }: ArticleItem) => {
  return (
    <>
      <Meta title={article.title} />
      <Link legacyBehavior href="/article/[id]" as={`/article/${article?.id}`}>
        <a className={articleStyle.card}>
          <h3>{article.title} &rarr;</h3>
          <p>{article.body}</p>
        </a>
      </Link>
    </>
  );
};

export default ArticleItem;
