import { List, Avatar } from "antd";
import NewsCard from "./NewsCard";

interface Article {
  id: string;
  title: string;
  description: string;
  link_news: string;
  link_image?: string;
}

export default function NewsList({ news }: { news: Article[] }) {
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={news}
      renderItem={(article) => (
        <List.Item
          key={article.id}
          extra={
            article.link_image ? (
              <Avatar shape="square" size={100} src={article.link_image} />
            ) : null
          }
        >
          <NewsCard
            title={article.title}
            description={article.description}
            image={article.link_image}
          />
        </List.Item>
      )}
    />
  );
}
