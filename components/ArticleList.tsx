import articleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }: any) => {
  console.log(articles);
  return (
    <div className={articleStyles.grid}>
      {articles.map((article: any) => (
        <ArticleItem article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
