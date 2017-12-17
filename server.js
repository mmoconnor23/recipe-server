import * as express from 'express';

const app = express();

app.all('/addrecipe', (req, res) => {
  console.log('hit a route', req, res);
  res.addHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.addHeader('Access-Control-Allow-Headers', 'X-Requested-With');
  res.send('melissa');
});

const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log('server listening on port', port);
});

export default app;
