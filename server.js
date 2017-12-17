const express = require('express');
const cors = require('cors');

const app = express();
 
app.use(cors());

//enable pre-flight across-the-board
app.options('*', cors());

app.post('/addrecipe', (req, res) => {
  console.log('hit a route', req, res);
  res.send('melissa');
});

const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log('server listening on port', port);
});
