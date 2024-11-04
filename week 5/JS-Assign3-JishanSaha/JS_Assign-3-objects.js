var recipe = {
    name: "Dahi Chicken",
    servings: 4,
    ingredients: ["Curd", "Chicken", "Ginger Garlic paste", "Black pepper", "Onion", "Green Chili", "Sahi Garam Masala"],
    cookingTime: 20, // in minutes

    updateCookingTime(newTime) {
        recipe.cookingTime = newTime;
        alert(`The updated cooking time is now ${recipe.cookingTime} minutes.`);
    }
};

//Output of initial object to console
console.log(recipe);

//Popup to update recipe name
var newName = prompt(`Current recipe: ${recipe.name}. Enter new recipe name:`, recipe.name);
recipe.name = newName;

//Popup to update number of servings
var newServings = prompt(`Current servings: ${recipe.servings}. Enter new number of servings:`, recipe.servings);
recipe.servings = newServings;

//Update cook time via method
var newTime = prompt(`Current cook time: ${recipe.cookingTime} minutes. Enter new cook time (minutes):`, recipe.cookingTime);
recipe.updateCookingTime(newTime);

//Output of updated object to console
console.log(recipe);