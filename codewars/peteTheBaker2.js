// https://www.codewars.com/kata/5267e5827526ea15d8000708/train/javascript
const recipe = { flour: 200, eggs: 1, sugar: 100 };

const getMissingIngredients = (recipe, added) => {
  const result = {};

  for (const property in recipe) {
    if (added[property] === undefined) {
      added[property] = 0;
    }
    result[property] = recipe[property] - added[property];
    if (result[property] === 0) {
      delete result[property];
    }
  }
  if (added.sugar > 100 || added.eggs > 1 || added.flour > 200) {
    if (added.sugar > 100) {
      const times = Math.ceil(added.sugar / recipe.sugar);
      result.eggs = times * 1 - added.eggs;
      result.flour = times * 200 - added.flour;
      result.sugar = times * 100 - added.sugar;

      if (result.flour === 0) {
        delete result.flour;
      }
      if (result.sugar === 0) {
        delete result.sugar;
      }
      if (result.eggs === 0) {
        delete result.eggs;
      }
    }

    if (added.eggs > 1) {
      const times = Math.ceil(added.eggs / recipe.eggs);

      result.eggs = times * 1 - added.eggs;
      result.flour = times * 200 - added.flour;
      result.sugar = times * 100 - added.sugar;

      if (result.flour === 0) {
        delete result.flour;
      }
      if (result.sugar === 0) {
        delete result.sugar;
      }
      if (result.eggs === 0) {
        delete result.eggs;
      }
    }

    if (added.flour > 200) {
      const times = Math.ceil(added.flour / recipe.flour);
      result.eggs = times * 1 - added.eggs;
      result.flour = times * 200 - added.flour;
      result.sugar = times * 100 - added.sugar;

      if (result.flour === 0) {
        delete result.flour;
      }
      if (result.sugar === 0) {
        delete result.sugar;
      }
      if (result.eggs === 0) {
        delete result.eggs;
      }
    }
  }

  return result;
};

console.log(getMissingIngredients(recipe, { flour: 1, eggs: 1, sugar: 300 }));
console.log(getMissingIngredients(recipe, {}));
