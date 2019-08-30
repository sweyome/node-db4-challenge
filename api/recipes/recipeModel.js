const db = require('../../data/dbConfig');

function getRecipes() {
  return db('recipes');
}

function getShoppingList(recipe_id) {
  return db('recipes')
    .select(
      'ingredients.name',
      'recipe_requirements.quantity',
    )
    .innerJoin('ingredients', 'ingredients.id', 'recipe_requirements.ingredient_id')
    .leftJoin('recipe_requirements', 'recipes.id', 'recipe_requirements.recipe_id')
    .where({ recipe_id });
}

function getInstructions(recipe_id) {
  return db('recipes')
    .select(
      'instructions.instruction_number',
      'instructions.instructions'
    )
    .innerJoin('instructions', 'instructions.recipe_id', 'recipes.id')
    .where({ recipe_id })
    .orderBy('instructions.instruction_number', 'asc');
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}
