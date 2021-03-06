const mix = require('laravel-mix');
const webpack = require('webpack');
const config = require('./webpack.config')
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.webpackConfig(config).sourceMaps();
mix.js('resources/js/app.js', 'public/js')
  .vue({ version: 3 })
  .webpackConfig((webpack) => {
    return {
      plugins: [
        new webpack.DefinePlugin({
          __VUE_OPTIONS_API__: true,
          __VUE_PROD_DEVTOOLS__: false,
        }),
      ],
    };
  })
  .postCss("resources/css/app.css", "public/css", [
    require("tailwindcss"),
  ]);
