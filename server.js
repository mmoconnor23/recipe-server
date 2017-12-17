import * as express from 'express';

const app = express();

function allowCORS(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
}

app.configure(() => {
  app.use(allowCrossDomain);
});

app.post('/addrecipe', (req, res) => {
  console.log('hit a route', req, res);
  res.send('melissa');
});

const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log('server listening on port', port);
});
