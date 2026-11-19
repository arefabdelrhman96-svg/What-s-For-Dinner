/* ====== بيانات الـ 7 وصفات — غيّر كل النصوص والصور هنا ====== */
const N = (cal, pro, carb, fat, fib, sod) => ({ cal, pro, carb, fat, fib, sod });
const recipes = [
  {
    title: "Caesar Salad",
    desc: "Classic salad with crispy romaine and creamy dressing",
    level: "Easy",
    cuisine: "Mediterranean",
    image: "images/recipe1 (1).avif",
    rating: 4.5,
    reviews: 324,
    prep: "15 min",
    cook: "15 min",
    servings: "4 people",
    ingredients: [
      "1 large romaine lettuce",
      "1/2 cup Caesar dressing",
      "1/4 cup parmesan cheese",
      "1/2 cup croutons",
      "1 clove garlic, minced",
      "2 anchovy fillets (optional)",
      "Black pepper",
       
    ],
    steps: ["Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.", 
      "Place lettuce in a large salad bowl.",
       "Add Caesar dressing and toss until evenly coated.",
        "Add croutons and half the parmesan cheese. Toss gently.",
         "Top with remaining parmesan shavings and anchovies if using."],
    nutrition: N("320 kcal", "34g", "18g", "12g", "5g", "840mg"),
    tips: ["Use cold, crisp lettuce for best texture",
       "Make homemade croutons for better flavor",
        "Add grilled chicken for a complete meal", 
        "Don't dress salad until ready to serve"],
  },
  // الوصفة الثانية 
  {
    title: "French Onion Soup",
    desc: "Rich beef broth with caramelized onions and melted cheese",
    level: "Intermediate",
    cuisine: "Mediterranean",
    image: "images/recipe1 (2).avif",
    rating: 4.7,
    reviews: 267,
    prep: "15 min",
    cook: "60 min",
    servings: "4 people",
    alert:{ title:"Extended Preparation Time", text:"This recipe requires more than 45 minutes to prepare. Plan accordingly!" },
    ingredients: ["Ingredient 1",
       "4 large onions, thinly sliced",
        "4 tablespoons butter", 
        "1 liter beef broth",
         "1/2 cup white wine",
          "2 bay leaves",
        "Fresh thyme",
        "Baguette slices",
        "200g Gruyère cheese, grated",
      ],
    steps: ["Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
       "Add white wine and deglaze the pot, scraping up brown bits.", 
       "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
        "Meanwhile, toast baguette slices until golden."
        ],
    nutrition: N("380 kcal", "18g", "36g", "18g", "4g", "980mg"),
    tips: ["Patience is key - don't rush the onion caramelization",
       "Use good quality beef broth for best flavor",
        "Watch carefully when broiling to avoid burning"],
  },
  // الوصفة الثالثة 
 {
    title: "Pad Thai",
    desc: "Popular Thai stir-fried noodles with shrimp and peanuts",
    level: "Intermediate",
    cuisine: "Asian",
    image: "images/recipe1 (3).avif",
    rating: 4.8,
    reviews: 445,
    prep: "20 min",
    cook: "15 min",
    servings: "2 people",
    ingredients: [
      "200g rice noodles",
      "200g shrimp, peeled",
      "2 eggs",
      "3 tablespoons tamarind paste",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Bean sprouts",
    ],
    steps: [
      "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
      "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
      "Heat wok over high heat. Scramble eggs and set aside.",
      "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
      "Add scrambled eggs and bean sprouts. Toss everything together.",
      "Serve topped with crushed peanuts, lime wedges, and cilantro.",
    ],
    nutrition: N("540 kcal", "32g", "62g", "16g", "4g", "1120mg"),
    tips: [
      "Don't oversoak noodles or they'll be mushy",
      "Cook on high heat for authentic wok flavor",
      "Balance sweet, sour, and salty flavors",
      "Prepare all ingredients before starting to cook",
    ],
  },
  // الوصفة الرابعة 
 {
    title: "Thai Green Curry",
    desc: "Vibrant and aromatic curry with vegetables and coconut milk",
    level: "Intermediate",
    cuisine: "Asian",
    image: "images/recipe1 (4).avif",
    rating: 4.7,
    reviews: 312,
    prep: "15 min",
    cook: "25 min",
    servings: "4 people",
    ingredients: [
      "2 tablespoons green curry paste",
      "400ml coconut milk",
      "300g chicken breast, sliced",
      "1 red bell pepper, sliced",
      "100g green beans",
      "1 eggplant, cubed",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
    ],
    steps: [
      "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
      "Add half the coconut milk and stir to combine with the curry paste.",
      "Add sliced chicken and cook until no longer pink, about 5 minutes.",
      "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
      "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
      "Stir in fresh Thai basil leaves. Serve hot with jasmine rice.",
    ],
    nutrition: N("420 kcal", "26g", "22g", "26g", "5g", "890mg"),
    tips: [
      "Adjust spice level by using more or less curry paste",
      "Add vegetables in stages based on cooking time needed",
      "Fresh Thai basil is essential for authentic flavor",
      "Use full-fat coconut milk for richest, creamiest sauce",
    ],
  },
  // الوصفة الخامسة 
 {
    title: "Honey Garlic Salmon",
    desc: "Pan-seared salmon with a sweet and savory glaze",
    level: "Easy",
    cuisine: "Seafood",
    image: "images/recipe1 (5).avif",
    rating: 4.9,
    reviews: 187,
    prep: "10 min",
    cook: "15 min",
    servings: "2 people",
    ingredients: [
      "2 salmon fillets (6oz each)",
      "3 tablespoons honey",
      "2 tablespoons soy sauce",
      "4 cloves garlic, minced",
      "1 tablespoon olive oil",
      "1 teaspoon fresh ginger, grated",
      "Sesame seeds for garnish",
      "Green onions, sliced",
    ],
    steps: [
      "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
      "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
      "Heat olive oil in a large skillet over medium-high heat.",
      "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
      "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
      "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice.",
    ],
    nutrition: N("380 kcal", "35g", "28g", "14g", "0g", "720mg"),
    tips: [
      "Don't overcook salmon - it should be slightly pink in the center",
      "Use wild-caught salmon for best flavor and nutrition",
      "Let the sauce caramelize slightly for deeper flavor",
      "Pair with steamed broccoli or asparagus for a complete meal",
    ],
  },
  // الوصفة السادسة 
 {
    title: "Classic Beef Burger",
    desc: "Juicy homemade burger with all the fixings",
    level: "Easy",
    cuisine: "American",
    image: "images/recipe1 (6).avif",
    rating: 4.6,
    reviews: 421,
    prep: "15 min",
    cook: "20 min",
    servings: "4 people",
    ingredients: [
      "500g ground beef (80/20)",
      "4 burger buns",
      "4 slices cheddar cheese",
      "Lettuce leaves",
      "Tomato slices",
      "Red onion, sliced",
      "Pickles",
      "Burger sauce or condiments",
    ],
    steps: [
      "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
      "Season patties generously with salt and pepper on both sides.",
      "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
      "Add cheese slices in the last minute of cooking and cover to melt.",
      "Toast burger buns lightly on the grill or in a pan.",
      "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce.",
    ],
    nutrition: N("650 kcal", "38g", "42g", "35g", "2g", "920mg"),
    tips: [
      "Don't press down on burgers while cooking - keeps them juicy",
      "Make indent in center to prevent burger from puffing up",
      "Let patties rest for 2-3 minutes before serving",
      "Toast buns for better texture and flavor",
    ],
  },
  // الوصفة السابعة 
 {
    title: "Margherita Pizza",
    desc: "Classic Italian pizza with fresh mozzarella and basil",
    level: "Intermediate",
    cuisine: "Italian",
    image: "images/recipe1 (7).avif",
    rating: 4.9,
    reviews: 512,
    prep: "90 min",
    cook: "12 min",
    servings: "2 people",
    alert:{ title:"Extended Preparation Time", text:"This recipe requires more than 45 minutes to prepare. Plan accordingly!" },
    ingredients: [
      "300g pizza dough",
      "200g crushed tomatoes",
      "250g fresh mozzarella",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "Salt and pepper to taste",
      "Parmesan cheese for topping",
    ],
    steps: [
      "Preheat oven to maximum temperature (usually 250°C/480°F).",
      "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
      "Roll out dough on a floured surface to desired thickness.",
      "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
      "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan.",
    ],
    nutrition: N("580 kcal", "24g", "68g", "22g", "4g", "920mg"),
    tips: [
      "Use a pizza stone for crispier crust",
      "Don't overload with toppings - less is more",
      "Add basil after baking to keep it fresh",
      "Let dough rest properly for best texture",
    ],
  },
];

/* أيقونات وألوان بطاقات التغذية */
const NUT = [
  ["cal", "Calories", "bi bi-fire", "#fbe3d3", "#e8531a"],
  ["pro", "Protein", "fa-solid fa-dumbbell", "#dce8f8", "#1e56c8"],
  ["carb", "Carbohydrates", "fa-solid fa-wheat-awn", "#f6ecc9", "#c98a1a"],
  ["fat", "Fat", "bi bi-droplet-fill", "#f9dcdc", "#c0211f"],
  ["fib", "Fiber", "bi bi-flower2", "#d9efdc", "#1f8a3b"],
  ["sod", "Sodium", "bi bi-box-fill", "#f6dce8", "#c2185b"],
];

const $ = (id) => document.getElementById(id);
let current = 0;

/* صورة مؤقتة لو الصورة مش موجودة */
const placeholder = (t) =>
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='900'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#6b4a2b'/><stop offset='1' stop-color='#2a2118'/></linearGradient></defs><rect width='100%' height='100%' fill='url(#g)'/><text x='50%' y='50%' fill='#f5e6cf' font-size='36' text-anchor='middle' font-family='sans-serif'>${t}</text></svg>`,
  );

function render(i) {
  const r = recipes[i];
  const img = $("recipeImg");
  img.onerror = () => {
    img.onerror = null;
    img.src = placeholder(r.title);
  };
  img.src = r.image;
  $("rating").textContent = r.rating;
  $("reviews").textContent = `(${r.reviews} reviews)`;
  $("prep").textContent = r.prep;
  $("cook").textContent = r.cook;
  $("servings").textContent = r.servings;
  $("tagLevel").textContent = r.level;
  $("tagCuisine").textContent = r.cuisine;
  $("title").textContent = r.title;
  $("desc").textContent = r.desc;
  // التنبيه
  const box = $("recipeAlert");
  if (r.alert) {
    $("alertTitle").textContent = r.alert.title;
    $("alertText").textContent = r.alert.text;
    box.classList.remove("d-none");
  } else {
    box.classList.add("d-none");
  }
  $("ingList").innerHTML = r.ingredients.map((t, k) => `<li><span class="num">${k + 1}</span>${t}</li>`).join("");
  $("stepList").innerHTML = r.steps.map((t, k) => `<li><span class="num">${k + 1}</span>${t}</li>`).join("");
  $("tipList").innerHTML = r.tips.map((t) => `<li><i class="bi bi-check-circle-fill"></i>${t}</li>`).join("");
  $("nutGrid").innerHTML = NUT.map(
    ([k, name, ic, bg, fg]) => `
    <div class="col-12 col-md-6"><div class="nut-item">
      <div class="nut-ico" style="background:${bg};color:${fg}"><i class="${ic}"></i></div>
      <span class="nut-name">${name}</span><span class="nut-val">${r.nutrition[k]}</span>
    </div></div>`,
  ).join("");

  document.querySelectorAll(".scroll-box").forEach((b) => (b.scrollTop = 0));
}

$("anotherBtn").addEventListener("click", () => {
  let n;
  do {
    n = Math.floor(Math.random() * recipes.length);
  } while (n === current && recipes.length > 1);
  current = n;
  render(current);
});

render(current);
