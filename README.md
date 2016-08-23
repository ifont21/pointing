# React Base

This project is based in [react-create-app](https://github.com/facebookincubator/create-react-app/) and customized for add support to sass, redux, react-router and more.

## tl;dr

```sh
git clone https://github.com/cebroker/react-base my-app
cd my-app
npm install
npm start
```

## Prerequisites
Make sure you have **nodejs** and **npm** installed in your system.

**You’ll need to have Node >= 4 on your machine**. We recommend to use Node >= 6 and npm >= 3 for faster installation speed and better disk usage. You can use [nvm](https://github.com/creationix/nvm#usage) to easily switch Node versions between different projects.

It is also recommendable you install the [EditorConfig](http://editorconfig.org/#download) plugin for your favorite editor.

## Getting Started

### Installation
To install the project all you have to do is clone the repo and install the dependencies.

```sh
git clone https://github.com/cebroker/react-base my-app
cd my-app
npm install
```

After installation, your project should look like this (not necessarily in the same order):

```
my-app/
  README.md
  index.html
  favicon.ico
  node_modules/
  package.json
  .editorconfig
  .gitignore
  config/
  scripts/
  src/
    actions/
    components/
    containers/
    images/
    reducers/
    themes/
    config.js
    index.css
    index.js
    routes.js
```

For the project to build, **these files must exist with exact filenames**:

* `index.html` is the page template;
* `favicon.ico` is the icon you see in the browser tab;
* `src/index.js` is the JavaScript entry point.

These are the important folders you can find there:

* `config/`: contains all the configuration files, including Webpack and Babel configurations.
* `scripts/`: contains the scripts for running and building the app. You'll never need to make changes here.
* `src/`: contains the source of the application. This is your workspace. Only files inside this directory will be included in the production build.

You can create more top-level directories. They will not be included in the production build so you can use them for things like documentation.

### `npm start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will see the build errors and lint warnings in the console.

<img src='https://camo.githubusercontent.com/41678b3254cf583d3186c365528553c7ada53c6e/687474703a2f2f692e696d6775722e636f6d2f466e4c566677362e706e67' width='600' alt='Build errors'>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Limitations

Some features are currently **not supported**:

* Server rendering.
* Testing.
* Some experimental syntax extensions (e.g. decorators).
* CSS Modules.
* Hot reloading of components.
* Vagrant development environment

Some of them might get added in the future if they are stable, are useful to majority of React apps, don’t conflict with existing tools, and don’t introduce additional configuration.

## What’s Inside?

We are using the following technology stack for development:

* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [Axios](https://github.com/mzabriskie/axios)
* [React Router](https://github.com/reactjs/react-router)
* [React Bootstrap](https://react-bootstrap.github.io/)
* [Sass](http://sass-lang.com/)

The builder use these tools:

* [webpack](https://webpack.github.io/) with [webpack-dev-server](https://github.com/webpack/webpack-dev-server), [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin), [style-loader](https://github.com/webpack/style-loader) and [sass-loader](https://github.com/jtangelder/sass-loader)
* [Babel](http://babeljs.io/) with ES6 and extensions used by Facebook (JSX, [object spread](https://github.com/sebmarkbage/ecmascript-rest-spread/commits/master), [class properties](https://github.com/jeffmo/es-class-public-fields))
* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [ESLint](http://eslint.org/)
* and more.

All of them are transitive dependencies of the provided npm package.

## Send Feedback

I'm always open to [your feedback](https://github.com/cebroker/react-base/issues).
