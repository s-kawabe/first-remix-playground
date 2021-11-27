// $xxxx.tsxが動的なファイルであることを示す
import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { getPost } from "~/post";
import invariant from "tiny-invariant";

// パラメータにアクセスするためのローダーを追加します
// $slug　に入る文字列を取得する
export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "expected params.slug");
  return getPost(params.slug);
};

export default function PostSlug() {
  const post = useLoaderData();
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}