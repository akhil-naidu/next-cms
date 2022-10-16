# apps

1. The docs folder consists of a NextJS with typescript for documentation.
2. The web folder consists of a NextJS with typescript for public display of the product we are creating.
3. The test folder consists of a NextJS with typescript for testing.
4. The cms-admin folder consists of a NextJS with typescript as the frontend for customers as admin panel.
5. The cms-web folder consists of a NextJS with typescript for the users of our customers.

# How to create a new app

1. add your project to the apps folder or use create-next-app or create-react-app
2. make sure to have a `name` and `version` in the `package.json`
3. within the scripts object in the `package.json` assign a port without any conflict with other applications
4. When creating an API server, you can follow the same instructions, make sure to tweak the dev and build scripts as you need

# Quick demo on adding a NextJS application with typescript

1. Within the apps folder use the following command to create a NextJS application

```bash
npx create-next-app test --example with-typescript --use-pnpm
```

2. Now configure name, version and scripts as you please
3. Make sure `"ui": "workspace:*"` is in dependencies
4. make sure these are in the dev dependencies

```json
 "devDependencies": {
  "tsconfig": "workspace:*",
  "eslint-config-custom": "workspace:*",
  "next-transpile-modules": "9.0.0"
}
```

5. Add a `tsconfig.json`

```json
{
  "extends": "tsconfig/nextjs.json",
  "compilerOptions": {
    "baseUrl": ".",
    "noEmit": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

6. last but not the least, configure the next.config.json as follows

```js
const withTM = require('next-transpile-modules')(['ui']);

module.exports = withTM({
  reactStrictMode: true,
});
```

## sample package.json file for the app web

```json
{
  "name": "web",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "12.3.1",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "ui": "workspace:*"
  },
  "devDependencies": {
    "@babel/core": "^7.0.0",
    "eslint-config-custom": "workspace:*",
    "eslint": "7.32.0",
    "next-transpile-modules": "9.0.0",
    "tsconfig": "workspace:*",
    "@types/node": "^17.0.12",
    "@types/react": "18.0.17",
    "typescript": "^4.5.3"
  }
}
```
