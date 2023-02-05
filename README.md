
# Color Thief

Grab the color palette from an image using just Javascript.Works in the browser and in Node.

### View the [demo page](https://lokeshdhakar.com/projects/color-thief/) for examples, API docs, and more.

---

## Contributing

### Project structure

+ `build/` - Simple script that copies and renames files into the /dist folder.
+ `dist/` - Generated module files created by [microbundle](https://github.com/developit/microbundle) for use in a browser.
+ `examples/` - CSS, JS, and Images for the index.html example page.
+ `src/color-thief-node.js` - Source for the NodeJS version of the script.
+ `src/color-thief.js` - Source for the browser (ES6, AMD, Global var) compatible version of the script.
+ `src/core.js` - Functions shared between the node and browser versions of the script.
+ `test/` - Node integration tests. Uses Chai.


### Running NodeJS test
- `npm run test`

### Build browser files
- `npm run build`

### Making a new release

- Merge `dev` into `master`
- Pull down `master`
- Update version number in `src/color-thief.js` and `package.json`
- Run `npm run build`
- Commit and push built files back up to `master`
- Create a new Github release along with tag. Naming convention for both ```v2.8.1```
- `npm publish`
