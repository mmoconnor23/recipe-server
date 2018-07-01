function add(recipes, newRecipes) {
  recipes.insert(newRecipes, (err, result) => {
    if (err) throw err;

    console.log('add');
  });
}

function getAll(recipes) {
  return new Promise((resolve, reject) => {
    recipes.find({}).toArray((err, docs) => {
      if (err) {
        reject();
      }

      resolve(docs);
    });
  });
}

module.exports = {
  add,
  getAll
};