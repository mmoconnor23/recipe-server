import * as express from 'express';

const app = express();

app.post('/addrecipe', (req, res) => {
  console.log('hit a route', req, res);
});

const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log('server listening on port', port);
});

export default app;
