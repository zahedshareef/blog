module.exports = {
    loader: 'postcss-loader',
    options: {
        plugins: (loader) => [ require('autoprefixer')({ browsers: [ 'last 3 versions', 'iOS 9' ] }) ]
    }
};
