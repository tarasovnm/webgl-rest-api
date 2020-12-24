const express = require('express');
const cors = require('cors')
const parser = require('body-parser');
const { vectorsFromSize } = require('./vectors');
const { trianglesFromSize } = require('./triangles');

const app = express();

const PORT = process.env.PORT || 80

let dimensions = {
  length: 1,
  width: 1,
  height: 1,
}

app.use(parser.json());

app.use(cors());

app.get('/', (req, res) => {
  res.end('<h1>WebGl REST api</h1>');
});

app.get('/vectors', (req, res) => {
  return res.status(200).send({
    succes: 'true',
    message: 'vectors',
    vectors: vectorsFromSize(dimensions.length, dimensions.width, dimensions.height)
  });
});

app.get('/triangles', (req, res) => {
  return res.status(200).send({
    succes: 'true',
    message: 'triangles',
    vectors: trianglesFromSize(dimensions.length, dimensions.width, dimensions.height)
  });
});

app.post('/setSizes', (req, res) => {
  console.log(req.body);
  dimensions.length = req.body.length;
  dimensions.width = req.body.width;
  dimensions.height = req.body.height;

  res.send('Dimensions is set');
});

app.listen(PORT, () => {
  console.log('App has been started...')
});

