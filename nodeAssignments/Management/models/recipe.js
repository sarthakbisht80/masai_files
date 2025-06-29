const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  recipe_id: { type: Number, required: true, unique: true },
  name: String,
  ingredients: [String],
  cuisine: String,
  prep_time: Number,
  difficulty: String,
  price: Number
});

module.exports = mongoose.model("Recipe", RecipeSchema);
