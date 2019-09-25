const express = require('express');
const dotenv = require('dotenv');
const webpack = require('webpack');
const config = require('./webpack.config');

const app = express();
const compiler = webpack(config);
const env = process.env

const NODE_ENV = env.NODE_ENV;

if (NODE_ENV === 'dev') {
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
  }));
}

app.get('*', (req, res) => {
  res.sendFile('dist/index.html', { root: __dirname });
});

const PORT = env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
