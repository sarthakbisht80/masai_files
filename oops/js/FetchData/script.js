const mealList = document.getElementById("mealList");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const resetBtn = document.getElementById("resetBtn");

let mealsData = [];
let filteredMeals = [];

// Fetch Data
async function fetchMeals() {
  try {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
    const data = await res.json();
    mealsData = data.meals || [];
    filteredMeals = [...mealsData];
    renderMeals(filteredMeals);
  } catch (err) {
    console.error("Error fetching meals:", err);
  }
}

// Render Meals
function renderMeals(meals) {
  mealList.innerHTML = "";
  if (meals.length === 0) {
    mealList.innerHTML = "<p>No meals found</p>";
    return;
  }

  meals.forEach(meal => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <div class="card-body">
        <h3>${meal.strMeal}</h3>
        <p><b>Category:</b> ${meal.strCategory}</p>
        <p><b>Area:</b> ${meal.strArea}</p>
      </div>
    `;

    mealList.appendChild(card);
  });
}

// Search Filter
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  filteredMeals = mealsData.filter(meal =>
    meal.strMeal.toLowerCase().includes(query) ||
    meal.strCategory.toLowerCase().includes(query)
  );
  applySorting();
});

// Sorting
sortSelect.addEventListener("change", () => {
  applySorting();
});

function applySorting() {
  const value = sortSelect.value;
  let sorted = [...filteredMeals];

  if (value === "name-asc") {
    sorted.sort((a, b) => a.strMeal.localeCompare(b.strMeal));
  } else if (value === "name-desc") {
    sorted.sort((a, b) => b.strMeal.localeCompare(a.strMeal));
  } else if (value === "area-asc") {
    sorted.sort((a, b) => a.strArea.localeCompare(b.strArea));
  } else if (value === "area-desc") {
    sorted.sort((a, b) => b.strArea.localeCompare(a.strArea));
  }

  renderMeals(sorted);
}

// Reset
resetBtn.addEventListener("click", () => {
  searchInput.value = "";
  sortSelect.value = "";
  filteredMeals = [...mealsData];
  renderMeals(filteredMeals);
});

// Init
fetchMeals();
