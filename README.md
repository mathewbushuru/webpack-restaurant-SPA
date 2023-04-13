## Restaurant Page

This is a Single Page Application that uses vanilla JS to dynamically render the HTML and manipulate the DOM. It uses a custom webpack configuration to bundle all the JS,CSS and image source files and inject it to a div in the starting HTML (The same way a framework like React works).

The webpage is a multi-tabbed landing page for a fictional restaurant in the Star Wars Universe.

##### Webpack

I am also using my custom webpack config to bundle the source files. You can check out my setup at `./webpack.config.js`

### Roadmap

- [x] Set up webpack
- [x] Set up HTML skeleton with desired markup that will be rendered dynamically by JS later (`./src/skeleton/index.html`)
- [x] Style  the HTML skeleton (`./src/skeleton/style.css`)
- [x] CSS-only parallax effect for section images
- [ ] Make site mobile responsive
