const express = require('express');
const cors = require('cors');
const mongo = require('mongodb');
const recipe = require('./src/recipe');

const app = express();

app.use(cors());

//enable pre-flight across-the-board
app.options('*', cors());

// const mongoURI = process.ENV.MONGOLAB_URI;
const mongoURI = 'mongodb://heroku_b9mnnff3:jc3d1397mlba0qasee0nm52o05@ds123181.mlab.com:23181/heroku_b9mnnff3';
mongo.MongoClient.connect(mongoURI, {useNewUrlParser: true}, (err, client) => {
  if (err) throw err;

  // recipes = db.collection('recipes');
  console.log('connected to db');
  const db = client.db('heroku_b9mnnff3');

  app.post('/addRecipe', (req, res) => {
    const recipes = req.params;

    //TODO: do array check on recipes
    recipe.add(getRecipes(db), recipes);
    res.send('melissa');
  });

  app.get('/all', (req, res) => {
    recipe.getAll(getRecipes(db)).then((response) => {
      res.send(response);
    });
  });
});

function getRecipes(db) {
  return db.collection('recipes');
}

const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log('server listening on port', port);
});
