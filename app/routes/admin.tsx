import { Outlet, Link, useLoaderData } from "remix";
import { getPosts } from "~/post";
import type { Post } from "~/post";
import adminStyles from "~/styles/admin.css";

// 各ルートは、HTMLの代わりにオブジェクト形式を除いて、
// タグのlinks配列を返す関数 <link> をエクスポートできます。
export const links = () => {
  // <link rel="stylesheet" href="..." />
  return [{ rel: "stylesheet", href: adminStyles }];
};

export let loader = () => {
  return getPosts();
};

export default function Admin() {
  let posts = useLoaderData<Post[]>();
  return (
    <div className="admin">
      <nav>
        <h1>Admin</h1>
        <ul>
          {posts.map(post => (
            <li key={post.slug}>
              <Link to={post.slug}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        {/* URLが親ルートのパスと一致すると、インデックスがアウトレット内にレンダリングされる。 */}
        <Outlet />
      </main>
    </div>
  );
}