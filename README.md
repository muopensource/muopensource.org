## MU Open Source - Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/69a95f03-10e2-47e6-b8f3-1297177381a4/deploy-status)](https://app.netlify.com/sites/muopensource/deploys)

## 🚀 Setup

1. **Clone**:
   `git clone https://github.com/muopensource/muopensource.com.git`

2. **Install**:
   Install the required dependencies.

   ```sh
   npm install
   // yarn
   ```

3) **Start developing.**

   Navigate into your new site’s directory and start it up.

   ```sh
   cd muopensource.org
   gatsby develop
   ```

4) **Open the source code and start editing!**

   The site is now running at `http://localhost:8000`!

   _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. That will take you to the GraphQL explorer which you can experiment with all the graphql queries. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── content
        ├── posts
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── .env.example
    ├── gatsby-browser.js
    ├── gatsby-ssr.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── package-lock.json
    ├── package.json

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/content/posts`**: This directory contains all the articles. The files are of type [MDX](https://mdxjs.com/) which allows us to embed JSX elements (React components) in our markdown.

3.  **`/src`**: This directory contains all the pages, components, theme specs, and assets (e.g. images, icons)

4.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

5.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

6.  **`.env.example`**: This file holds all the [enviorment variables](https://www.gatsbyjs.com/docs/environment-variables/) for this project. In development Rename this file to `.env`

7.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

8.  **`gatsby-ssr.js`**: This file ets you alter the content of static HTML files as they are being Server-Side Rendered (SSR) by Gatsby and Node.js. Learn more about Gatsby's [Server-Side Rendering ](https://www.gatsbyjs.com/docs/ssr-apis/)

7)  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

8)  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

9)  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

10) **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm (or yarn) dependencies that were installed for your project. **(You won’t change this file directly).**

11) **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.
