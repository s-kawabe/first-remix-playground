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

ルートが一致したときにレンダリングされるコンポーネント。

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

#### Prismaの使用例
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




### action



### headers

### meta 

### links