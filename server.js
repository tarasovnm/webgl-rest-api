const express = require('express');

const cors = require('cors')
const parser = require('body-parser');
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
    vectors: geometryFromSize(dimensions.length, dimensions.width, dimensions.height)
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

function geometryFromSize(length = 1, width = 1, height = 1) {

  /*
    6----7
   /|   /|
  2----3 |
  | |  | |
  | 4--|-5
  |/   |/
  0----1
  */

  return [
    [-length / 2, -height / 2, width / 2],    // 0 = 0
    [length / 2, height / 2, width / 2],      // 1 = 3
    [-length / 2, height / 2, width / 2],     // 2 = 2

    [-length / 2, -height / 2, width / 2],    // 3 = 0
    [length / 2, -height / 2, width / 2],     // 4 = 1
    [length / 2, height / 2, width / 2],      // 5 = 3

    [length / 2, -height / 2, width / 2],     // 6 = 1
    [length / 2, height / 2, -width / 2],     // 7 = 7
    [length / 2, height / 2, width / 2],      // 8 = 3

    [length / 2, -height / 2, width / 2],     // 9 = 1
    [length / 2, -height / 2, -width / 2],    // 10 = 5
    [length / 2, height / 2, -width / 2],     // 11 = 7

    [length / 2, -height / 2, -width / 2],    // 12 = 5
    [-length / 2, height / 2, -width / 2],    // 13 = 6
    [length / 2, height / 2, -width / 2],     // 14 = 7

    [length / 2, -height / 2, -width / 2],    // 15 = 5
    [-length / 2, -height / 2, -width / 2],   // 16 = 4
    [-length / 2, height / 2, -width / 2],    // 17 = 6

    [-length / 2, -height / 2, -width / 2],   // 18 = 4
    [-length / 2, height / 2, width / 2],     // 19 = 2
    [-length / 2, height / 2, -width / 2],    // 20 = 6

    [-length / 2, -height / 2, -width / 2],   // 21 = 4
    [-length / 2, -height / 2, width / 2],    // 22 = 0 
    [-length / 2, height / 2, width / 2],     // 23 = 2

    [-length / 2, height / 2, width / 2],     // 24 = 2
    [length / 2, height / 2, -width / 2],     // 25 = 7
    [-length / 2, height / 2, -width / 2],    // 26 = 6

    [-length / 2, height / 2, width / 2],     // 27 = 2
    [length / 2, height / 2, width / 2],      // 28 = 3
    [length / 2, height / 2, -width / 2],     // 29 = 7

    [-length / 2, -height / 2, -width / 2],   // 30 = 4
    [length / 2, -height / 2, width / 2],     // 31 = 1
    [-length / 2, -height / 2, width / 2],    // 32 = 0

    [-length / 2, -height / 2, -width / 2],   // 33 = 4
    [length / 2, -height / 2, -width / 2],    // 34 = 5
    [length / 2, -height / 2, width / 2],     // 35 = 1
  ]

  // [
  //   [-length / 2, -height / 2, width / 2],    // 0 
  //   [length / 2, -height / 2, width / 2],     // 1
  //   [-length / 2, height / 2, width / 2],     // 2
  //   [length / 2, height / 2, width / 2],      // 3
  //   [-length / 2, -height / 2, -width / 2],   // 4
  //   [length / 2, -height / 2, -width / 2],    // 5
  //   [-length / 2, height / 2, -width / 2],    // 6
  //   [length / 2, height / 2, -width / 2],     // 7
  // ]
}