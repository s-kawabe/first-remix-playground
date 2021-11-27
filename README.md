# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```

## tutorial memo

make this environments.

```
❯ npx create-remix@latest
Need to install the following packages:
  create-remix@latest
Ok to proceed? (y) y

R E M I X

💿 Welcome to Remix! Let's get you set up with a new project.

? Where would you like to create your app? first-remix-playground
? Where do you want to deploy? Choose Remix if you're unsure, it's easy to change deployment targets. Remix App Server
? TypeScript or JavaScript? TypeScript
? Do you want me to run `npm install`? No
💿 That's it! `cd` into "first-remix-playground" and check the README for development and deploy instructions!
```

```
> yarn

> yarn dev
```

### directory
Next.jsにおける_app.tsx → root.tsx

Next.jsにおけるpages → routesディレクトリ


### データソースからの取得
これを実際に構築する場合は、Postgres、FauanaDB、Supabaseなどのデータベースに投稿を保存する必要があります。
これはクイックスタートなので、ファイルシステムを使用します。

--- 

markdownの要素をオブジェクト化してくれるものをinstall

```
yarn add front-matter
```

fsにおける型チェックのライブラリをinstall

```
yarn add tiny-invariant
```

### 動的ルーティング
以下のルートが機能するようにする

```
/posts/my-first-post
/posts/90s-mix-cdr
```

`$xxxx.tsx`が動的なファイルであることを示す

```
touch app/routes/posts/\$slug.tsx
```

markdown パーサーのinstall
```
yarn add marked
yarn add -D @types/marked
```

### ブログ投稿の作成

現状、Postの投稿はデプロイ時にしか行われないので、システム的に投稿ができるようにする

```
touch app/routes/admin.tsx
touch app/styles/admin.css
```

```tsx
// 各ルートは、HTMLの代わりにオブジェクト形式を除いて、
// タグのlinks配列を返す関数 <link> をエクスポートできます。
export let links = () => {
  // <link rel="stylesheet" href="..." />
  return [{ rel: "stylesheet", href: adminStyles }];
};
```

### ブログ投稿ルートの作成

そのプレースホルダーにadminのインデックスルートを入力しましょう。
ここでは、ルートファイルのネストがUIコンポーネントのネストになる「ネストされたルート」を紹介します。

```
mkdir app/routes/admin
touch app/routes/admin/index.tsx
```
## routes配下のファイルに書くやつ

Remixのルートは、さまざまな用途に使用できます。
通常、これらは、サーバー側のライフサイクルフックを備えたReactコンポーネントのように、
アプリのユーザーインターフェイスに使用されます。
ただし、動的CSSやソーシャルイメージなど、あらゆる種類のリソースの一般的なルートとしても機能します。

### default export

ルートが一致したときにレンダリングされるコンポーネントはdafault exportする。

```
export default function SomeRouteComponent() {
  return (
    <div>
      <h1>Look ma!</h1>
      <p>I'm still using React after like 7 years.</p>
    </div>
  );
}
```

### loader

```tsx
import type { LoaderFunction } from "remix";
export let loader: LoaderFunction = async () => {
  return { ok: true };
};
```

この関数はサーバーでのみ実行される。
ブラウザのナビゲーションでRemixはfetchを介して関数を呼び出す。
これは、データベースと直接通信したり、サーバーのみのAPIシークレットを使用したりできることを意味します。

**Prismaの使用例**
```tsx
import { useLoaderData } from "remix";
import { prisma } from "../db";

export let loader = async () => {
  return prisma.user.findMany();
};

export default function Users() {
  let data = useLoaderData();
  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

#### params variable

`data/invoices/$invoiceId.tsx`のようなURLの場合、invoiceIdを解析して取得できる

```tsx
// if the user visits /invoices/123
export let loader: LoaderFunction = ({ params }) => {
  params.invoiceId; // "123"
};
```

#### request variable

これは、リクエストに関する情報を含むFetchRequestインスタンスです。
最も一般的なケースは、ヘッダーまたはURLの読み取りです。これを使用して、
次のようにリクエストからURLURLSearchParamsを読み取ることもできます。

```
export let loader: LoaderFunction = ({ request }) => {
  // read a cookie
  let cookie = request.headers.get("Cookie");

  // parse the search params
  let url = new URL(request.url);
  let search = url.searchParams.get("search");
};
```

#### context variable

サーバーアダプターのgetLoadContext()関数に渡したコンテキストです。
これは、アダプターの要求/応答APIとRemixアプリの間のギャップを埋める方法です。
**エスケープハッチなので必要になることはあまりない。**

#### オブジェクトを返す

```tsx
export let loader = async () => {
  return { whatever: "you want" };
};
```

#### Response Objectを返す
https://remix.run/docs/en/v1/api/conventions#returning-response-instances
組み込み関数`json`にてパースができる？

#### loaderでthrowをする
応答を返すだけでなく、loaderからResponseオブジェクトをスローすることもできる。
これにより、CatchBoundaryを介してコンテキストデータを含む代替UIを表示できます。
https://remix.run/docs/en/v1/api/conventions#throwing-responses-in-loaders

### action
https://remix.run/docs/en/v1/api/conventions#action

loader同様に、actionはデータの変更やその他のアクションを処理する**サーバーのみの機能**です。
ルート（POST、PUT、PATCH、DELETE）に対して非GET要求が行われると、**ローダーの前にアクションが呼び出されます**。
actionのAPIはactionが呼び出される時に実行される。

これにより、データセットに関するすべてを単一のルートモジュールに配置できます。
データの読み取り、データをレンダリングするコンポーネント、およびデータの書き込みです。

```tsx
import { redirect, Form } from "remix";
import { fakeGetTodos, fakeCreateTodo } from "~/utils/db";
import { TodoList } from "~/components/TodoList";

export async function loader() {
  return fakeGetTodos();
}

export async function action({ request }) {
  let body = await request.formData();
  let todo = await fakeCreateTodo({
    title: body.get("title")
  });
  return redirect(`/todos/${todo.id}`);
}

export default function Todos() {
  let data = useLoaderData();
  return (
    <div>
      <TodoList todos={data} />
      <Form method="post">
        <input type="text" name="title" />
        <button type="submit">Create Todo</button>
      </Form>
    </div>
  );
}
```



### headers
各ルートは、独自のHTTPヘッダーを定義できます。一般的なヘッダーの1つは、
Cache-Controlページをキャッシュできる場所と期間をブラウザーとCDNのキャッシュに示すヘッダーです。

```tsx
export function headers({ loaderHeaders, parentHeaders }) {
  return {
    "X-Stretchy-Pants": "its for fun",
    "Cache-Control": "max-age=300, s-maxage=3600"
  };
}
```

### meta 
HTMLドキュメントのメタタグを設定します。
レイアウトルート以外のすべてのルートにタイトルと説明を設定することを強くお勧めします（インデックスルートがメタを設定します）。

```tsx
import type { MetaFunction } from "remix";

export let meta: MetaFunction = () => {
  return {
    title: "Something cool",
    description:
      "This becomes the nice preview on search results."
  };
};
```

### links

リンク関数(<Link>)は、ユーザーがルートにアクセスしたときにページに追加する要素を定義します。

```tsx
import type { LinksFunction } from "remix";

export let links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: "/favicon.png",
      type: "image/png"
    },
    {
      rel: "stylesheet",
      href: "https://example.com/some/styles.css"
    },
    { page: "/users/123" },
    {
      rel: "preload",
      href: "/images/banner.jpg",
      as: "image"
    }
  ];
};
```

```tsx
export const links = () => {
  // <link rel="stylesheet" href="..." />
  return [{ rel: "stylesheet", href: adminStyles }];
};
```