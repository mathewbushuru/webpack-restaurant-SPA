## Coruscant Cafe Landing Page

This is a Single Page Application that uses vanilla JS to dynamically render the HTML and manipulate the DOM. It uses a custom webpack configuration to bundle all the JS,CSS and image source files and inject it into a div in the starting HTML (The same way a framework like React works).

The webpage is a multi-tabbed landing page for a fictional restaurant in the Star Wars Universe.

`yarn build`

This takes our entry point script at `src/index.js` and generates `dist/bundle.js` that hydrates the HTML page

### Project configuration.

##### Directory structure

```sh
webpack-restaurant-SPA
|- webpack.config.js            // webpack setup, plugins, etc
|- package.json                 // project dependencies
|- yarn.lock
|- /dist
    |- index.html               // empty html to be hydrated with JS
    |- bundle.js                // webpack's output of bundled files
|- /src
    |- /skeletonFiles           // desired end result
    |- index.js                 // app entry point
    |- utils.js                 // utility functions e.g createElement
    |- /components              // reusable app blocks
        |- Header.js            // header component
        ...            
```

### Webpack

I am also using my custom webpack config to bundle the source files. You can check out my setup at `./webpack.config.js`.

The CSS styling is also done from the entry point javascript file. To be able to import a CSS file into a javascript module, I am using `style-loader` and `css-loader`.

### Roadmap

- [x] Set up webpack
- [x] Set up HTML skeleton with desired markup that will be rendered dynamically by JS later (`./src/skeleton/index.html`)
- [x] Style the HTML skeleton (`./src/skeleton/style.css`)
- [x] CSS-only parallax effect for section images
- [x] Set up webpack CSS and image loaders
- [ ] Dynamically generate page content from JS
- [ ] Make site mobile responsive
- [ ] Set up JSX Parser
