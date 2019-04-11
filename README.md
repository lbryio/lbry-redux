# lbry-redux

[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

lbry-redux is a module which contains common React and redux code shared between lbry-desktop and lbry-android.

## Installation
Add `lbry-redux` as a dependency to your `package.json` file.
`"lbry-redux": "lbryio/lbry-redux"`

### Local development
If you intend to make changes to the module and test immediately, you can use `npm link` to add the package to your `node_modules` folder. This will create a symlink to the folder where `lbry-redux` was cloned to.
```
cd lbry-redux
sudo npm link
cd /<path>/<to>/<project>/node_modules
npm link lbry-redux
````

### Build
Run `$ yarn build`. If the symlink does not work, just build the file and move the `bundle.js` file in to the `node_modules/` folder.

#### Local Development with `lbry-desktop`
If you're working with the desktop app and you've followed the steps above, then you'll want to
run `$ yarn dev` (or equivalently `$ webpack --watch`). This will allow any changes made to the code
to be automatically reflected in `dist/bundle.js`.

Once you've made your changes, running `(lbry-desktop)$ yarn dev` should have it automatically
reloading changes. If this doesn't happen, just rebuild `lbry-redux` and
[relink it to `lbry-desktop`](.README.md:11)

## Contributing 
We :heart: contributions from everyone! We welcome [bug reports](https://github.com/lbryio/lbry-redux/issues/), [bug fixes](https://github.com/lbryio/lbry-redux/pulls) and feedback on the module is always appreciated.

## [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/lbryio/lbry-redux/issues) [![GitHub contributors](https://img.shields.io/github/contributors/lbryio/lbry-redux.svg)](https://GitHub.com/lbryio/lbry-redux/graphs/contributors/)

## License

This module is released under the [MIT License](license)
