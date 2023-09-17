let getRecipe = async (query, page, limit) => {
  apikey = `337680e2a1354188922992e1606e5b4b`;
  let recipe = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apikey}&addRecipeInformation=true&addRecipeNutrition=true&instructionsRequired=true&offset=${
      page * limit
    }&number=${limit}`
  );
  let data = await recipe.json();
  return data.results;
};
module.exports = { getRecipe };
