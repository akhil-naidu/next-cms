> each directory holds it's own readme for more info

> If you are an active contributor make sure you are collaborator of this repository and next-cms nhost dashboard

# Mandatory Installations

1. prefer `nvm` to install `node`, for more info go through [this](https://github.com/nvm-sh/nvm)
2. Local `docker desktop` or `docker` installation is mandatory
3. `pnpm` is mandatory in this monorepo architecture, `npm install -g pnpm`
4. Install `nhost` cli and use this [documentation](https://github.com/nvm-sh/nvm) for more info

# Initial Setup

1. `pnpm install`, this will install all the necessary packages and dependencies
2. `nhost login`, use this command and login into your nhost collaborator account
3. `pnpm run dev`, for the first time it might take a lot of time based on your pc configuration and internet speed. A total of 8 to 10 Docker containers including more than three nextjs applications are about to start with this command.

# Tailwind Configuration

`tailwind.config.js`

```js
const tailwindConfig = require('config/tailwind.config.js');

module.exports = {
  ...tailwindConfig,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
  corePlugins: {
    preflight: false,
  },
};

// For some reason, adding `/ui/**/*.{js,ts,jsx,tsx}` is of no use
```

`postcss.config.js`

```js
module.exports = require('config/postcss.config.js');
```

# NextJS Configuration

> More info can be found in the apps/README.md

`next-env.d.ts`

```js
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
```

`next.config.js`

```js
const withTM = require('next-transpile-modules')(['ui']);

module.exports = withTM({
  reactStrictMode: true,
});
```
