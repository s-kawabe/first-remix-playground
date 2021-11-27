import { useLoaderData, Link } from "remix";
import { getPosts } from "~/post";
import type { Post } from "~/post";

// loaderという名前でexportするとサーバー側で実行する関数になる？
export const loader = async (): Promise<Post[]> => {
  return getPosts();
};

export default function Posts() {
  // ローダーは、そのコンポーネントのバックエンド「API」であり、useLoaderDataを介して接続されています。
  const posts = useLoaderData<Post[]>();
  console.log(posts);
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}