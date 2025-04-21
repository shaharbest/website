---
description: "The Grand Hall"
tags: [deploy, react, node, express, mongodb, firebase]
title: "Deploy"
date: 2023-08-08T20:05:14+03:00
---

# Clarify

## push changes

```sh
git add .
git commit -m "caption"
git push
```

# Templates

## Client

### github

* create [new](https://github.com/new) github repo.

* clone repo with ssh url.

* use the bundler [vite](https://vitejs.dev/guide/)
  to make your local repo a react template.
  
  ```sh
  npm create vite@latest
  ```

* create `.gitignore` file with:

  ```txt
  dist
  node_modules
  .env
  ```

* push changes.

### firebase deploy

* create firebase project - [firebase console](https://console.firebase.google.com/).
  * in creation dialog you can uncheck analytics option.
  * enable in authentication:
    * email/password.
    * google provider

* create in firebase project: "web client app".
    
* install in your machine [firebase CLI](https://firebase.google.com/docs/cli) with npm
  (if you didn't already)

  ```sh
  npm install -g firebase-tools
  ```

* login via firebase SDK:

  ```sh
  firebase login
  ```

  a browser suppose to open signin dialog.

* initialize firebase by running:

  ```sh
  firebase init
  ```

  in dialog:

  * choose hosting with github actions.
  * use existing project.
  * choose your client github repo.
  * set public directory as `dist` for vite bundler.
  * set up automatic builds: YES!
  * choose your client github repo.
  * set up workflow for every deploy: YES!

* push changes.

## Server

* create github repo.

* clone repo with ssh url.

* make local rpo a minimal express server with cors.

* in `package.json` add in scripts.

  ```json
  {
	  "start": "node index.js"
  }
  ```

* create .gitignore with:

  ```txt
  node_modules
  .env
  ```

* push changes.

* deploy your server github repo in [cyclic](https://cyclic.sh/).


# Test Environment Variables

## Server

* install `dotenv`:

  ```javascript
  npm i dotenv
  ```

* in `index.js` add:

  ```javascript
  require('dotenv').config();
  ```

* create `.env`

* add in index.js:

  ```javascript
  app.get('/test', (req, res) => res.send(process.env.NISIM));
  ```

* push changes.

* in local environment.

  *  in `.env` add:
      
     ```txt
     NISIM=shlomo
     ```
    
  * run server in your machine.
  
  * insert in browser: <http://localhost:5000/test>

* deployment

  * in cyclic "Variables" tab add variable `NISIM` with value `david`.

  * insert in browser: <https://your-cyclic-address/test>.

## DB connection

* add mongo url to `.env` and `.github` workfow.
* add connect execution.
* read a collection and send it back to in testing endpoint.
* push changes.

## Client

* in local environment

  * create `.env` and add:
  
  ```txt
  VITE_NISIM=shlomo
  ```

  * add in page:
  
    ```jsx
    <h1>{import.meta.env.VITE_NISIM}</h1>
    ```

  * run client in your machine:
  
    ```sh
    npm run dev
    ```

  * insert in browser: <http://localhost:5173/>.
  
  * look for the title: `shlomo`.

* in deployment
 
  * in `.github/workflows/firebase-hosting-merge.yml` add after `jobs`:
  
    ```yaml
    env:
      VITE_NISIM: david
    ```

  * push changes.

  * insert in browser: <https://your-firebase-address/>.
  
  * look for the title: `david`.

# Project Content

## DB

* try reading and inserting entries in your [Atlas db](https://cloud.mongodb.com/).
* define ERD.

## Server

* create an [express](https://expressjs.com/en/4x/api.html) server.
* create schemes in [mongoose](https://mongoosejs.com/docs/guide.html).
* create sample data in `sample.json` like:
  
  ```json
  {
    "products": [
      { "id": 1, "name": "eggs" },
      { "id": 2, "name": "bread" }
    ],
    "users": [
      { "id": 1, "name": "nisim" },
      { "id": 2, "name": "shlomo" }
    ]
  }
  ```

* develop a reset script.
* create all CRUD endpoints for your entities - [best practices](https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/).
* use [firebase-admin](https://firebase.google.com/docs/admin/setup) package for authentication.

## Client

* choose css strategy.
  
  my favourites:

  * utility classes:
    * [tailwind](https://tailwindcss.com/) - [config in vite](https://tailwindcss.com/docs/guides/vite)
    * [bootstrap](https://getbootstrap.com/) - [config in vite](https://getbootstrap.com/docs/5.2/getting-started/vite/)
  * [tailwind]()
    * [mantine](https://ui.mantine.dev/)
    * [material UI](https://mui.com/)

* create components templates for common pages
  and define routes for them with
  [react-router](https://reactrouter.com/).

  for example:

  | Route            | Page           |
  | :-------         | :------:       |
  | `/`              | home           |
  | `/paroducts/:id` | single product |
  | `/products`      | catalog        |
  | `/cart`          | shopping cart  |
  | `/login`         | login          |
  | `/contact`       | contact us     |
  | `/about`         | about us       |

* develop a simple home page.
* create a navbar with a menu.
* develop your catalog board.
* add controls to allow common sorting and filtering of the catalog.

  note:
  before implementing you should decide who will filter and sort -
  the client or the server.
* use [redux](https://redux-toolkit.js.org/).
* implement shopping cart page.
* for loading use [react-loading-skeleton](https://www.npmjs.com/package/react-loading-skeleton)
* for the payment process use
  [stripe](https://stripe.com/docs/payments) -
  [youtube tutorial](https://www.youtube.com/watch?v=1r-F3FIONl8)
