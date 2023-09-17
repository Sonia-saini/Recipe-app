const express = require("express");
const { Recipemodel } = require("../Model/RecipeModel");
const { authentication } = require("../Middlewares/authentication");
const { getRecipe } = require("../ExternalApicall/RecipeApi");
require("dotenv").config();
const recipeRouter = express.Router();
recipeRouter.get("/getrecipe", authentication, async (req, res) => {
  const { query, page, limit, sortby, sort } = req.query;
  try {
    let recipes = await getRecipe(query, page - 1, limit, sortby, sort);
    await Recipemodel.insertMany(recipes);
    res.status(200).json({ recipes });
  } catch (err) {
    res
      .status(400)
      .json({ msg: "Recipe search request have some error", error: err });
  }
});
recipeRouter.get("/getdetailedrecipe/:id", authentication, async (req, res) => {
  const { id } = req.params;
  try {
    let Recipe = await Recipemodel.findOne({ id });

    res.status(200).json({ recipe: Recipe });
  } catch (err) {
    res.status(400).json({ msg: "Recipe get request have some error" });
  }
});
module.exports = { recipeRouter };
