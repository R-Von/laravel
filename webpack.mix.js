let mix = require('laravel-mix');

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

mix.js('resources/assets/js/app.js', 'public/js')
   .extract(['vue', 'vue-router','element-ui'])
   .webpackConfig({
	    output: {
	        publicPath: "/",
	        chunkFilename: 'js/lazy/[name].[chunkhash].js'
	    }
	})
   	.version()
    // .webpackConfig({
    //     resolve: {
    //         extensions: ['.js', '.vue', '.json'],
    //         alias: {
    //             '@': path.resolve(__dirname, 'resources/assets/js'),
    //         },
    //     },
    //     output: {
    //         publicPath: '/',
    //         filename: '[name].js',
    //         chunkFilename: 'js/[name].chunk.js'
    //     },
    // });
