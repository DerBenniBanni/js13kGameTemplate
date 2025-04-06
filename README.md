# js13kGameTemplate
A Template for js13kgames using webpack and roadroller to minify the game during build

This is mostly for my private usage during gamejams (js13kgames, gamedev.js)

The folder src contains a very simple sample game, in the style I (currently) prefer to use for my games.

The code will be packed using webpack and minified using roadroller by the gulp process.
The gulpfile.js contains a config object where you can define the desired maximal size of the resulting zipfile. Currently it is set to 13kB.

Usage: npm run build

The zipfile will be created in the dist-folder, the webpacked and roadrolled game can be tested in the build-folder.
