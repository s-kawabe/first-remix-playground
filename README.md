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
â¯ npx create-remix@latest
Need to install the following packages:
  create-remix@latest
Ok to proceed? (y) y

R E M I X

ð¿ Welcome to Remix! Let's get you set up with a new project.

? Where would you like to create your app? first-remix-playground
? Where do you want to deploy? Choose Remix if you're unsure, it's easy to change deployment targets. Remix App Server
? TypeScript or JavaScript? TypeScript
? Do you want me to run `npm install`? No
ð¿ That's it! `cd` into "first-remix-playground" and check the README for development and deploy instructions!
```

```
> yarn

> yarn dev
```

### directory
Next.jsã«ããã_app.tsx â root.tsx

Next.jsã«ãããpages â routesãã£ã¬ã¯ããª


### ãã¼ã¿ã½ã¼ã¹ããã®åå¾
ãããå®éã«æ§ç¯ããå ´åã¯ãPostgresãFauanaDBãSupabaseãªã©ã®ãã¼ã¿ãã¼ã¹ã«æç¨¿ãä¿å­ããå¿è¦ãããã¾ãã
ããã¯ã¯ã¤ãã¯ã¹ã¿ã¼ããªã®ã§ããã¡ã¤ã«ã·ã¹ãã ãä½¿ç¨ãã¾ãã

--- 

markdownã®è¦ç´ ããªãã¸ã§ã¯ãåãã¦ããããã®ãinstall

```
yarn add front-matter
```

fsã«ãããåãã§ãã¯ã®ã©ã¤ãã©ãªãinstall

```
yarn add tiny-invariant
```

### åçã«ã¼ãã£ã³ã°
ä»¥ä¸ã®ã«ã¼ããæ©è½ããããã«ãã

```
/posts/my-first-post
/posts/90s-mix-cdr
```

`$xxxx.tsx`ãåçãªãã¡ã¤ã«ã§ãããã¨ãç¤ºã

```
touch app/routes/posts/\$slug.tsx
```

markdown ãã¼ãµã¼ã®install
```
yarn add marked
yarn add -D @types/marked
```

### ãã­ã°æç¨¿ã®ä½æ

ç¾ç¶ãPostã®æç¨¿ã¯ããã­ã¤æã«ããè¡ãããªãã®ã§ãã·ã¹ãã çã«æç¨¿ãã§ããããã«ãã

```
touch app/routes/admin.tsx
touch app/styles/admin.css
```

```tsx
// åã«ã¼ãã¯ãHTMLã®ä»£ããã«ãªãã¸ã§ã¯ãå½¢å¼ãé¤ãã¦ã
// ã¿ã°ã®linkséåãè¿ãé¢æ° <link> ãã¨ã¯ã¹ãã¼ãã§ãã¾ãã
export let links = () => {
  // <link rel="stylesheet" href="..." />
  return [{ rel: "stylesheet", href: adminStyles }];
};
```

### ãã­ã°æç¨¿ã«ã¼ãã®ä½æ

ãã®ãã¬ã¼ã¹ãã«ãã¼ã«adminã®ã¤ã³ããã¯ã¹ã«ã¼ããå¥åãã¾ãããã
ããã§ã¯ãã«ã¼ããã¡ã¤ã«ã®ãã¹ããUIã³ã³ãã¼ãã³ãã®ãã¹ãã«ãªãããã¹ããããã«ã¼ãããç´¹ä»ãã¾ãã

```
mkdir app/routes/admin
touch app/routes/admin/index.tsx
```
## routeséä¸ã®ãã¡ã¤ã«ã«æ¸ããã¤

Remixã®ã«ã¼ãã¯ããã¾ãã¾ãªç¨éã«ä½¿ç¨ã§ãã¾ãã
éå¸¸ããããã¯ããµã¼ãã¼å´ã®ã©ã¤ããµã¤ã¯ã«ããã¯ãåããReactã³ã³ãã¼ãã³ãã®ããã«ã
ã¢ããªã®ã¦ã¼ã¶ã¼ã¤ã³ã¿ã¼ãã§ã¤ã¹ã«ä½¿ç¨ããã¾ãã
ãã ããåçCSSãã½ã¼ã·ã£ã«ã¤ã¡ã¼ã¸ãªã©ãããããç¨®é¡ã®ãªã½ã¼ã¹ã®ä¸è¬çãªã«ã¼ãã¨ãã¦ãæ©è½ãã¾ãã

### default export

ã«ã¼ããä¸è´ããã¨ãã«ã¬ã³ããªã³ã°ãããã³ã³ãã¼ãã³ãã¯dafault exportããã

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

ãã®é¢æ°ã¯ãµã¼ãã¼ã§ã®ã¿å®è¡ãããã
ãã©ã¦ã¶ã®ããã²ã¼ã·ã§ã³ã§Remixã¯fetchãä»ãã¦é¢æ°ãå¼ã³åºãã
ããã¯ããã¼ã¿ãã¼ã¹ã¨ç´æ¥éä¿¡ãããããµã¼ãã¼ã®ã¿ã®APIã·ã¼ã¯ã¬ãããä½¿ç¨ãããã§ãããã¨ãæå³ãã¾ãã

**Prismaã®ä½¿ç¨ä¾**
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

`data/invoices/$invoiceId.tsx`ã®ãããªURLã®å ´åãinvoiceIdãè§£æãã¦åå¾ã§ãã

```tsx
// if the user visits /invoices/123
export let loader: LoaderFunction = ({ params }) => {
  params.invoiceId; // "123"
};
```

#### request variable

ããã¯ããªã¯ã¨ã¹ãã«é¢ããæå ±ãå«ãFetchRequestã¤ã³ã¹ã¿ã³ã¹ã§ãã
æãä¸è¬çãªã±ã¼ã¹ã¯ããããã¼ã¾ãã¯URLã®èª­ã¿åãã§ãããããä½¿ç¨ãã¦ã
æ¬¡ã®ããã«ãªã¯ã¨ã¹ãããURLURLSearchParamsãèª­ã¿åããã¨ãã§ãã¾ãã

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

ãµã¼ãã¼ã¢ããã¿ã¼ã®getLoadContext()é¢æ°ã«æ¸¡ããã³ã³ãã­ã¹ãã§ãã
ããã¯ãã¢ããã¿ã¼ã®è¦æ±/å¿ç­APIã¨Remixã¢ããªã®éã®ã®ã£ãããåããæ¹æ³ã§ãã
**ã¨ã¹ã±ã¼ãããããªã®ã§å¿è¦ã«ãªããã¨ã¯ãã¾ããªãã**

#### ãªãã¸ã§ã¯ããè¿ã

```tsx
export let loader = async () => {
  return { whatever: "you want" };
};
```

#### Response Objectãè¿ã
https://remix.run/docs/en/v1/api/conventions#returning-response-instances
çµã¿è¾¼ã¿é¢æ°`json`ã«ã¦ãã¼ã¹ãã§ããï¼

#### loaderã§throwããã
å¿ç­ãè¿ãã ãã§ãªããloaderããResponseãªãã¸ã§ã¯ããã¹ã­ã¼ãããã¨ãã§ããã
ããã«ãããCatchBoundaryãä»ãã¦ã³ã³ãã­ã¹ããã¼ã¿ãå«ãä»£æ¿UIãè¡¨ç¤ºã§ãã¾ãã
https://remix.run/docs/en/v1/api/conventions#throwing-responses-in-loaders

### action
https://remix.run/docs/en/v1/api/conventions#action

loaderåæ§ã«ãactionã¯ãã¼ã¿ã®å¤æ´ããã®ä»ã®ã¢ã¯ã·ã§ã³ãå¦çãã**ãµã¼ãã¼ã®ã¿ã®æ©è½**ã§ãã
ã«ã¼ãï¼POSTãPUTãPATCHãDELETEï¼ã«å¯¾ãã¦éGETè¦æ±ãè¡ãããã¨ã**ã­ã¼ãã¼ã®åã«ã¢ã¯ã·ã§ã³ãå¼ã³åºããã¾ã**ã
actionã®APIã¯actionãå¼ã³åºãããæã«å®è¡ãããã

ããã«ããããã¼ã¿ã»ããã«é¢ãããã¹ã¦ãåä¸ã®ã«ã¼ãã¢ã¸ã¥ã¼ã«ã«éç½®ã§ãã¾ãã
ãã¼ã¿ã®èª­ã¿åãããã¼ã¿ãã¬ã³ããªã³ã°ããã³ã³ãã¼ãã³ããããã³ãã¼ã¿ã®æ¸ãè¾¼ã¿ã§ãã

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
åã«ã¼ãã¯ãç¬èªã®HTTPãããã¼ãå®ç¾©ã§ãã¾ããä¸è¬çãªãããã¼ã®1ã¤ã¯ã
Cache-Controlãã¼ã¸ãã­ã£ãã·ã¥ã§ããå ´æã¨æéããã©ã¦ã¶ã¼ã¨CDNã®ã­ã£ãã·ã¥ã«ç¤ºããããã¼ã§ãã

```tsx
export function headers({ loaderHeaders, parentHeaders }) {
  return {
    "X-Stretchy-Pants": "its for fun",
    "Cache-Control": "max-age=300, s-maxage=3600"
  };
}
```

### meta 
HTMLãã­ã¥ã¡ã³ãã®ã¡ã¿ã¿ã°ãè¨­å®ãã¾ãã
ã¬ã¤ã¢ã¦ãã«ã¼ãä»¥å¤ã®ãã¹ã¦ã®ã«ã¼ãã«ã¿ã¤ãã«ã¨èª¬æãè¨­å®ãããã¨ãå¼·ããå§ããã¾ãï¼ã¤ã³ããã¯ã¹ã«ã¼ããã¡ã¿ãè¨­å®ãã¾ãï¼ã

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

ãªã³ã¯é¢æ°(<Link>)ã¯ãã¦ã¼ã¶ã¼ãã«ã¼ãã«ã¢ã¯ã»ã¹ããã¨ãã«ãã¼ã¸ã«è¿½å ããè¦ç´ ãå®ç¾©ãã¾ãã

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