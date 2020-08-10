# Browser Extension Template

Fully featured cross platform browser extension template using Webpack/Babel/React

Please file any issues or feature requests at https://github.com/samueljun/browser-extension-template/issues.

## Development

0. Clone this repo and rename for your extension.

1. [Install node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

2. Install the required node modules:

```sh
npm install
```

3. Run the following command so that webpack can watch and recompile the `/src` files live to the `/dist` folder:

```sh
npm run watch
```

### Firefox

To run the extension with live reloading in a clean Firefox instance, run the following command in a separate terminal:

```sh
npm run watch-firefox
```

To temporarily load the extension in a normal Firefox instance:

1. Go to `about:debugging`
2. Click `Load Temporary Add-on`
3. Load the `src` folder

### Chromium

1. Go to `chrome://extensions/`
2. Enable developer mode
3. Click `Load unpacked extension...`
4. Load the `/dist` folder

### Updating the version number

Run the following command with the appropriate `npm version {patch/minor/major}` to bump the package.json version based on [semver](http://semver.org/):

```sh
npm version patch && git push && git push --tags
```

### Building submission file

Run the following command so that webpack can recompile the `/src` files in production mode to the `/dist` and `/dist-zip` folder:

```sh
npm run build
```
