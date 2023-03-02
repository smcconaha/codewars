/*Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. 
Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) 
and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the 
amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the 
objects, can be considered as 0.*/

function cakes(recipe, available) {
    //first create an array of the ingredients and the item stock available
    const ingredients = Object.keys(recipe);
    const stock = Object.keys(available);
    //create an array to store the value of ingredients / recipe for each item in the ingredient array
    let cakeArr = []
    ingredients.forEach(element => cakeArr.push(available[element]/recipe[element]));
    //return the minimum value in the cake array
    const maxCakes = Math.floor(Math.min(...cakeArr))
    return maxCakes ? maxCakes : 0;
  }

  //More simply solution

  const cakes = (needs, has) => Math.min(
    ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
  )