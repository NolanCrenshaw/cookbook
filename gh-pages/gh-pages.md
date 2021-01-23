# Github Pages

---

\*\*\*NOTE\*\*\* When cloning a gh-pages repo, specifying the master branch is necessary, as the default branch has been altered to the "gh-pages" branch.

```bash
$ git clone --branch master {repo/url}
```

---

_Links_

- [npm page](https://www.npmjs.com/package/gh-pages)
- [github](https://github.com/tschaub/gh-pages)

_Contents_

---

Install the package as a dev dependency

```bash
$ npm install gh-pages --save-dev
```

##### Inside `package.json`

Add a "homepage" property to the top level

```js
//...
"homepage": "http://{GIT_USERNAME}.github.io"
```

Add `predeploy` and `deploy` as variables defined inside `scripts`

```js
"scripts": {
  //...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

After that, simply pushing the master branch to the repo should automatically deploy the built site.
