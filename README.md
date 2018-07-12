# lbry-redux
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

## License

[MIT © LBRY](LICENSE)
