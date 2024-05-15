document.addEventListener("DOMContentLoaded", async function () {
  const homeBtn = document.getElementById("home");
  const catalogBtn = document.getElementById("catalog");
  const categoriesContainer = document.getElementById("categories");
  const categoryContainer = document.getElementById("category-container");

  async function getData(url) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.error("Error", error);
    }
  }

  function displayCategories(categories) {
    categoriesContainer.innerHTML = "";
    categories.forEach((category) => {
      const categoryLink = document.createElement("a");
      categoryLink.textContent = category.name;
      categoryLink.href = `#${category.shortname}`;
      categoryLink.classList.add("d-block");
      categoryLink.addEventListener("click", () => {
        displayItems(category.shortname);
        categoriesContainer.style.display = "none";
      });
      categoriesContainer.appendChild(categoryLink);
    });

    // Specials
    const specialsLink = document.createElement("a");
    specialsLink.textContent = "Specials";
    specialsLink.href = "#specials";
    specialsLink.classList.add("d-block", "font-weight-bold");
    specialsLink.addEventListener("click", () => {
      renderSpecials();
      categoriesContainer.style.display = "none";
    });
    categoriesContainer.appendChild(specialsLink);
  }

  async function displayItems(categoryShortname) {
    try {
      categoryContainer.style.display = "block";

      const data = await getData(`${categoryShortname}.json`);
      const categoryName = document.createElement("h2");
      categoryName.textContent = data.categoryName;
      categoryContainer.innerHTML = "";
      categoryContainer.appendChild(categoryName);

      const itemsContainer = document.createElement("div");
      itemsContainer.classList.add("items-container");
      data.items.forEach((item) => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("item");
        itemElement.innerHTML = `
                  <img src="https://placehold.co/200?text=${item.name}" alt="${item.name}">
                  <h3>${item.name}</h3>
                  <p>${item.description}</p>
                  <p>Price: ${item.price}</p>
              `;
        itemsContainer.appendChild(itemElement);
      });
      categoryContainer.appendChild(itemsContainer);
    } catch (error) {
      console.error(`Error`, error);
    }
  }

  function renderSpecials() {
    const randomNum = Math.floor(Math.random() * categories.length);
    const randomCat = categories[randomNum];
    displayItems(randomCat.shortname);
  }

  let categories = [];
  try {
    categories = await getData("categories.json");
    displayCategories(categories);
  } catch (error) {
    console.error("Error", error);
  }

  homeBtn.addEventListener("click", () => {
    location.reload();
  });

  catalogBtn.addEventListener("click", () => {
    categoriesContainer.style.display = "block";
    categoryContainer.style.display = "none";
    displayCategories(categories);
  });
});
