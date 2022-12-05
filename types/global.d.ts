interface Article {
  id: string;
  title: string;
  excerpt: string;
  body: string;
}

interface Meta {
  title: string;
  keywords: string;
  description: string;
}

type ArticleItem = {
  article: Article;
}

type ArticleList = {
  articles: Article[];
}

type ChildrenProps = {
  children: React.ReactNode;
}