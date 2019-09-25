const express = require('express');
const dotenv = require('dotenv');
const webpack = require('webpack');
const config = require('./webpack.config');

const app = express();
const compiler = webpack(config);
const env = process.env

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.get('*', (req, res) => {
  res.sendFile('dist/index.html', { root: __dirname });
});

const port = env.PORT || 80;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
