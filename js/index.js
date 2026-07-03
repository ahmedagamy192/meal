
const mealsData = [
  {
    id: 0,
    title: "Premium fish Burger",
    price: 14.5,
    icon: "fa-burger",
    rating: 4.0,
    reviewsCount: "(367 reviews)",
    descrption: "cows feed by orginc food",
    img: "images/meal4.jpg",
    cockTime: "20 min",
    cockPrep: "5 min",
    services: 2,
    ingredients: [
      "400g Fresh Beef Patty",
      "2 Brioche Burger Buns",
      "1 Sliced Tomato",
      "2 Cheddar Cheese Slices",
      "Signature Secret Sauce",
    ],
    instructions: [
      "Grill the beef patty on high heat for 4 minutes each side.",
      "Toast the brioche buns until golden brown.",
      "Assemble the burger placing cheese over the hot patty, then veggies and sauce.",
    ],
    chef: [
      "Don't press down on burgers while cooking - keeps them juicy",
      "Make indent in center to prevent burger from puffing up",
      "Let patties rest for 2-3 minutes before serving",
      "Toast buns for better texture and flavor",
    ],
    calories: "650 kcal",
    protein: "42g",
    Carbohydrates: "42g",
    fiber: "2g",
    Fat: "30g",
    Sodium: "40mg",
  },
  {
    id: 1,
    title: "Italian Margherita pizza",
    price: 10,
    icon: "fa-pizza-slice",
    rating: 4.5,
    reviewsCount: "(350 reviews)",
    descrption: " orginc food",
    img: "images/images10.jpg",
    cockTime: "20 min",
    cockPrep: "5 min",
    services: 1,
    ingredients: [
      "300g Homemade Pizza Dough",
      "1/2 cup Italian Tomato Sauce",
      "150g Fresh Mozzarella Cheese",
      "Fresh Basil Leaves",
      "1 tablespoon Olive Oil",
    ],
    instructions: [
      "Roll out the pizza dough onto a baking sheet.",
      "Spread tomato sauce evenly, then scatter mozzarella pieces and basil.",
      "Bake in a preheated oven at 220°C for 10-12 minutes until crust is crispy.",
    ],
    chef: [
      "Use cold, crisp lettuce for best texture",
      "Make homemade croutons for better flavor",
      "Add grilled chicken for a complete meal",
      "Don't dress salad until ready to serve",
    ],
    calories: "520 kcal",
    protein: "18g",
    Carbohydrates: "295g",
    fiber: "2g",
    Fat: "50g",
    Sodium: "40mg",
  },
  {
    id: 2,
    title: "Fresh Caesar Salad",
    price: 5.5,
    icon: "fa-leaf",
    rating: 4.8,
    reviewsCount: "(400 reviews)",
    descrption: "healthy food",
    img: "images/meal3.jpg",
    cockTime: "30 min",
    cockPrep: "10 min",
    services: 1,
    ingredients: [
      "2 cups Crisp Romaine Lettuce",
      "1/2 cup Crunchy Croutons",
      "1/4 cup Grated Parmesan Cheese",
      "3 tablespoons Creamy Caesar Dressing",
    ],
    instructions: [
      "Wash and chop the romaine lettuce into bite-sized pieces.",
      "In a large bowl, toss lettuce with croutons and Caesar dressing.",
      "Top with grated parmesan cheese before serving.",
    ],
    chef: [
      "Use cold, crisp lettuce for best texture",
      "Make homemade croutons for better flavor",
      "Add grilled chicken for a complete meal",
      "Don't dress salad until ready to serve",
    ],
    calories: "310 kcal",
    protein: "12g",
    Carbohydrates: "2g",
    fiber: "35g",
    Fat: "0g",
    Sodium: "0mg",
  },
  {
    id: 4,
    title: "Premium pieces of fish with rice",
    price: 14.5,
    icon: "fa-burger",
    rating: 4.0,
    reviewsCount: "(367 reviews)",
    descrption: "fish feed by orginc food",
    img: "images/images8.jpg",
    cockTime: "20 min",
    cockPrep: "5 min",
    services: 2,
    ingredients: [
      "400g Fresh fish Patty",
      "2 Brioche Burger Buns",
      "1 Sliced Tomato",
      "2 Cheddar Cheese Slices",
      "Signature Secret Sauce",
    ],
    instructions: [
      "Grill the fish patty on high heat for 4 minutes each side.",
      "Toast the brioche buns until golden brown.",
      "Assemble the burger placing cheese over the hot patty, then veggies and sauce.",
    ],
    chef: [
      "Don't press down on burgers while cooking - keeps them juicy",
      "Make indent in center to prevent burger from puffing up",
      "Let patties rest for 2-3 minutes before serving",
      "Toast buns for better texture and flavor",
    ],
    calories: "650 kcal",
    protein: "42g",
    Carbohydrates: "42g",
    fiber: "2g",
    Fat: "30g",
    Sodium: "40mg",
  },
  {
    id: 5,
    title: "delecious fish",
    price: 14.5,
    icon: "fa-burger",
    rating: 4.0,
    reviewsCount: "(367 reviews)",
    descrption: "fish feed by orginc food",
    img: "images/images7.jpg",
    cockTime: "20 min",
    cockPrep: "5 min",
    services: 2,
    ingredients: [
      "400g Fresh fish Patty",
      "2 Brioche Burger Buns",
      "1 Sliced Tomato",
      "2 Cheddar Cheese Slices",
      "Signature Secret Sauce",
    ],
    instructions: [
      "Grill the fish patty on high heat for 4 minutes each side.",
      "Toast the brioche buns until golden brown.",
      "Assemble the burger placing cheese over the hot patty, then veggies and sauce.",
    ],
    chef: [
      "Don't press down on burgers while cooking - keeps them juicy",
      "Make indent in center to prevent burger from puffing up",
      "Let patties rest for 2-3 minutes before serving",
      "Toast buns for better texture and flavor",
    ],
    calories: "650 kcal",
    protein: "42g",
    Carbohydrates: "42g",
    fiber: "2g",
    Fat: "30g",
    Sodium: "40mg",
  },
];

let image = document.querySelector(".image-meal");
let title = document.getElementById("title");
let randomBtn = document.getElementById("random-btn");
let descrpition = document.getElementById("descrpition");
let prepTime = document.getElementById("prepTime");
let cockTime = document.getElementById("cockTime");
let services = document.getElementById("services");
let review = document.getElementById("review");
let star = document.getElementById("star");
let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById("next-btn");
console.log(prevBtn,nextBtn)


/////
let ingredientsList = document.getElementById("ingredients-list");
let instructionsList = document.getElementById("instructions-list");
let caloriesVal = document.getElementById("calories-val");
let proteinVal = document.getElementById("protein-val");
let carbsVal = document.getElementById("carbs-val");
let fiberVal = document.getElementById("fiber-val");
let fatVal = document.getElementById("fat-val");
let sodiumVal = document.getElementById("sodium-val");
let chefList = document.getElementById("chef-list");


console.log(caloriesVal);

window.addEventListener("DOMContentLoaded", function () {
  showMeal();
});

let currentMeal=0;
function showMeal() {
  let item = mealsData[currentMeal];
  image.src = item.img;
  title.textContent = item.title;
  descrpition.textContent = item.descrption;
  prepTime.textContent = item.cockPrep;
  cockTime.textContent = item.cockTime;
  services.textContent = item.services;
  review.textContent = item.reviewsCount;
  star.textContent = item.rating;
  let ingredientsHTML = "";
  for (let i = 0; i < item.ingredients.length; i++) {
    ingredientsHTML += `<li class="d-flex align-items-center gap-3 mb-3 fw-medium">
    <span class="li-bg d-inline-flex align-items-center justify-content-center">${i + 1}</span>
    <span>${item.ingredients[i]}</span></li>`;
  }
  ingredientsList.innerHTML = ingredientsHTML;

  let instructionsHTML = "";
  for (let j = 0; j < item.instructions.length; j++) {
    instructionsHTML += `
  <li class="d-flex align-items-center gap-3 mb-3 fw-medium">
    <span class="li-bg d-inline-flex align-items-center justify-content-center">${j + 1}</span>
    <span>${item.instructions[j]}</span>
  </li>
`;
  }
  instructionsList.innerHTML = instructionsHTML;

  let chefListInnerHTML = "";
  for (let i = 0; i < item.chef.length; i++) {
    chefListInnerHTML += `  <li class="d-flex align-items-center gap-3 mb-3 fw-medium">
    <span class="li-bg d-inline-flex align-items-center justify-content-center">${ i+ 1}</span>
    <span>${item.chef[i]}</span>
  </li>`;
  }
  chefList.innerHTML = chefListInnerHTML;

    caloriesVal.textContent = item.calories;
    carbsVal.textContent = item.Carbohydrates;
    fiberVal.textContent = item.fiber;
    proteinVal.textContent = item.protein;
    fatVal.textContent = item.Fat;
    sodiumVal.textContent = item.Sodium;
}



  
randomBtn.addEventListener("click",function(){
  let randomNumer = Math.floor(Math.random() * mealsData.length);
  if (randomNumer === currentMeal) //لمنع تكرار نفس الوجبة
  {
    currentMeal = (randomNumer + 1) % mealsData.length;
  } else {
    currentMeal = randomNumer;
  }
     showMeal();
})

nextBtn.addEventListener("click",function(){
   currentMeal++;
   // اذا تم الوصول لنهاية المصفوفة تبدا من جديد
   if(currentMeal > mealsData.length-1){
    currentMeal = 0
   }
   showMeal()
})

prevBtn.addEventListener("click",function(){
  currentMeal--
  if(currentMeal < 0){
    currentMeal = mealsData.length-1;
  }
  showMeal();
})
