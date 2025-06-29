const Recipe = require("../models/recipe");

exports.getAll = async (req, res) => {
  const recipes = await Recipe.find();
  res.json(recipes);
};

exports.getByCuisine = async (req, res) => {
  const recipes = await Recipe.find({ cuisine: req.params.cuisine });
  res.json(recipes);
};

// POST new recipe
exports.createRecipe = async (req, res) => {
  const newRecipe = await Recipe.create(req.body);
  res.json(newRecipe);
};

// PUT update price
exports.updatePrice = async (req, res) => {
  const { id } = req.params;
  const updated = await Recipe.findOneAndUpdate(
    { recipe_id: parseInt(id) },
    { $set: { price: req.body.price } },
    { new: true }
  );
  res.json(updated);
};

exports.deleteRecipe = async (req, res) => {
  const result = await Recipe.deleteOne({ recipe_id: parseInt(req.params.id) });
  res.json(result);
};
