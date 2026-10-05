/* =========================================
KENYA FOOD HUB
JAVASCRIPT
========================================= */

/* =========================================
FOOD CARD BACKGROUND IMAGES
========================================= */

const foodCards = document.querySelectorAll(".food-card");

foodCards.forEach(card => {

```
const image = card.getAttribute("data-image");

card.style.setProperty(
    "--food-background",
    `url("${image}")`
);
```

});

/* =========================================
OPEN RECIPE
========================================= */

function openRecipe(recipeName) {

```
window.location.href =
    "recipe.html?food=" + recipeName;
```

}
