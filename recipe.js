/* =========================================
KENYA FOOD HUB
RECIPE DATABASE
========================================= */

/* =========================================
RECIPE DATA
========================================= */

const recipes = {

```
"matumbo": {

    title: "Matumbo (Tripe Stew)",

    image: "images/matumbo.jpeg",

    description:
        "Tender beef tripe cooked slowly with onions, tomatoes and aromatic spices to create a hearty Kenyan-style stew.",

    prepTime: "20 minutes",

    cookTime: "1 hour 30 minutes",

    servings: "4",

    nutrition:
        "Estimated per serving: approximately 350–450 kcal, depending on the amount of tripe, oil and accompanying ingredients. Tripe provides protein, vitamin B12, iron and other minerals.",

    benefits:
        "Tripe provides high-quality protein and vitamin B12, which supports normal blood formation and nervous-system function. It also provides minerals such as zinc and iron.",

    precautions:
        "Tripe should be cleaned thoroughly and cooked completely. Because the dish can contain significant amounts of fat and sodium depending on preparation, moderate portions may be appropriate for people watching their saturated fat or sodium intake.",

    ingredients: [

        "1 kg cleaned beef tripe (matumbo)",

        "3 large tomatoes, chopped",

        "2 large onions, chopped",

        "3 cloves garlic, minced",

        "1 tablespoon cooking oil",

        "1 teaspoon ginger, minced",

        "1 teaspoon curry powder",

        "1 teaspoon paprika",

        "Salt to taste",

        "2 cups water or cooking stock",

        "Fresh coriander for garnish"

    ],

    instructions: [

        "Wash and clean the tripe thoroughly.",

        "Boil the tripe in water until tender. Drain and cut into bite-sized pieces.",

        "Heat cooking oil in a large pot and sauté the onions until softened.",

        "Add garlic and ginger and cook for about one minute.",

        "Add tomatoes, paprika and curry powder. Cook until the tomatoes form a thick sauce.",

        "Add the cooked tripe and mix thoroughly with the sauce.",

        "Add water or stock, cover and simmer for about 30 minutes.",

        "Season with salt to taste.",

        "Garnish with fresh coriander and serve hot."

    ]

}
```

};

/* =========================================
GET SELECTED RECIPE
========================================= */

const urlParams = new URLSearchParams(
window.location.search
);

const foodName = urlParams.get("food");

/* =========================================
FIND RECIPE
========================================= */

const recipe = recipes[foodName];

/* =========================================
DISPLAY RECIPE
========================================= */

if (recipe) {

```
document.title =
    recipe.title + " | Kenya Food Hub";


document.getElementById("recipe-title")
    .textContent = recipe.title;


document.getElementById("recipe-image")
    .src = recipe.image;


document.getElementById("recipe-image")
    .alt = recipe.title;


document.getElementById("recipe-description")
    .textContent = recipe.description;


document.getElementById("prep-time")
    .textContent = recipe.prepTime;


document.getElementById("cook-time")
    .textContent = recipe.cookTime;


document.getElementById("servings")
    .textContent = recipe.servings;


document.getElementById("nutrition")
    .textContent = recipe.nutrition;


document.getElementById("benefits")
    .textContent = recipe.benefits;


document.getElementById("precautions")
    .textContent = recipe.precautions;


/* Ingredients */

const ingredientsList =
    document.getElementById("ingredients");


recipe.ingredients.forEach(
    ingredient => {

        const li =
            document.createElement("li");

        li.textContent = ingredient;

        ingredientsList.appendChild(li);

    }
);


/* Instructions */

const instructionsList =
    document.getElementById("instructions");


recipe.instructions.forEach(
    instruction => {

        const li =
            document.createElement("li");

        li.textContent = instruction;

        instructionsList.appendChild(li);

    }
);


/* Background image */

const background =
    document.getElementById(
        "recipe-background"
    );


background.style.backgroundImage =
    `url("${recipe.image}")`;
```

}
