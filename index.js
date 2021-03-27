var recipes = {food: "amount"};

function updateObjectWithKeyAndValue(recipes, food, amount) {
  Object.assign(recipes, [food: amount]);
  return recipes;
}
