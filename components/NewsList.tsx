import { List, Avatar } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";

interface Article {
  id: string;
  title: string;
  description: string;
  link_news: string;
  link_image?: string;
}

export default function NewsList({ news }: { news: Article[] }) {
  const iconText = (text: string, Icon: React.FC) => (
    <span>
      <Icon style={{ marginRight: 8 }} />
      {text}
    </span>
  );

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{ pageSize: 3 }} // Muestra 3 elementos por página
      dataSource={news}
      renderItem={(article) => (
        <List.Item
          key={article.id}
          actions={[
            iconText("156", StarOutlined),
            iconText("156", LikeOutlined),
            iconText("2", MessageOutlined),
          ]}
          extra={
            article.link_image ? (
              <img
                width={150}
                alt={article.title}
                src={article.link_image}
                style={{ borderRadius: 8 }}
              />
            ) : null
          }
        >
          <List.Item.Meta
            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
            title={<a href={article.link_news}>{article.title}</a>}
            description="Fuente: Ant Design News"
          />
          {article.description}
        </List.Item>
      )}
    />
  );
}
