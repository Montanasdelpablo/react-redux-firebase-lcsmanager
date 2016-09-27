module.exports = {
     entry: './src/app.js',
     output: {
         path: './src',
         filename: 'app.bundle.js',
     },
     module: {
         loaders: [{
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['es2015', 'react', 'stage-0'],
                plugins: ['transform-decorators-legacy']
             }
         }]
     }
 }
