const express = require('./node_modules/express');
const recipesDb = require('./recipeModel');
const router = express.router();


router.get('/', async (req, res, next) => {
    try {
      const recipes = await recipesDb.getRecipes();
      res.status(200).json(recipes);
    } catch (error) {
      next(new Error('We are unable to retrieve recipes. Kindly try again.'))
    }
  })
  
  router.get('/:id/shoppingList', async (req, res, next) => {
    const { id } = req.params;
    try {
      const shoppingList = await recipesDb.getShoppingList(id);
      res.status(200).json(shoppingList);
    } catch (error) {
      next(new Error('We could not get the shopping list'));
    }
  })
  
  router.get('/:id/instructions', async (req, res, next) => {
    const { id } = req.params;
    try {
      const instructions = await recipesDb.getInstructions(id);
      res.status(200).json(instructions);
    } catch (error) {
      next(new Error('We could not get the instructions'));
    }
  })
  
  
  module.exports = router;