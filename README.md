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

## memo

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