const mongoose = require("mongoose");
const recipeschema = mongoose.Schema({
  title: String,
  summery: String,
  image: String,
  id: Number,
  analyzedInstructions: [{ name: String, steps: Array }],
  nutrition: { nutrients: Array, ingredients: Object },
});
const Recipemodel = mongoose.model("recipe", recipeschema);
module.exports = { Recipemodel };
