module.exports = [ {

    mode: 'production',

    // devtool: 'hidden-source-map',

	entry: {
        'index': './index.js'
    },

	output: {
        filename: '[name].js',
        library: 'counterUp',
        libraryTarget: 'umd'
    },

	module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
    					cacheDirectory: true,
                        plugins: [
                            'transform-es2015-destructuring',
                        ]
                    }
                }
			},
        ]
    }
} ]