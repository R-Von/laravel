let mix = require('laravel-mix');

const BabiliPlugin = require('babili-webpack-plugin');

const webpack = require('webpack');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */





const webpackConfig = {
    output: {
          publicPath: "/",
          chunkFilename: 'js/lazy/[name].[chunkhash].js'
      },
      plugins:[]
}

if (mix.config.inProduction) {
    webpackConfig.plugins.push(new BabiliPlugin());

    mix.options({
        uglify: true
    });
    mix.disableNotifications();
    //    mix.version();
    
} else {
    mix.sourceMaps();
}

mix.webpackConfig(webpackConfig);

mix.js('resources/assets/js/app.js', 'public/js')
   .extract(['vue', 'vue-router','element-ui'])
   // .version()