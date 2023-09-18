let getRecipe = async (query, page, limit,sort,sortDirection) => {
  apikey = `ca284320ec884164935e9de2e0b7484d`;
  let recipe = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apikey}&addRecipeInformation=true&addRecipeNutrition=true&instructionsRequired=true&offset=${
      page * limit
    }&number=${limit}&sort=${sort}&sortDirection=${sortDirection}`
  );
  let data = await recipe.json();
  return data.results;
};
module.exports = { getRecipe };
