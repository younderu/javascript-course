const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", humbergerMenu);

function humbergerMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const itemsContainer = document.querySelector(".items");
  const indicatorsContainer = document.querySelector(".indicators");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let slideIndex = 0;

 function nextItem(n) {
    slideIndex += n;
    showItems(slideIndex);
  }

  function currentSlide(n) {
    slideIndex = n;
    showItems(slideIndex);
  }


  function loadItems() {
    fetch("data/items.json")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((slide, index) => {
          const img = document.createElement("img");
          img.src = slide.src;
          itemsContainer.appendChild(img);

          const indicator = document.createElement("span");
          indicator.addEventListener("click", () => currentSlide(index));
          indicatorsContainer.appendChild(indicator);
        });

        showItems(slideIndex);

        prevBtn.addEventListener("click", () => nextItem(-1));
        nextBtn.addEventListener("click", () => nextItem(1));

        setInterval(() => {
          nextItem(1);
        }, 3000);
      });
  }

  loadItems();

  function showItems(n) {
    const items = document.querySelectorAll(".items img");
    const indicators = document.querySelectorAll(".indicators span");

    if (n >= items.length) {
      slideIndex = 0;
    }
    if (n < 0) {
      slideIndex = items.length - 1;
    }

    itemsContainer.style.transform = `translateX(${-slideIndex * 100}%)`;

    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === slideIndex);
    });
  }

  function createIndicators() {
    const itemsCount = document.querySelectorAll(".items img").length;
    for (let i = 0; i < itemsCount; i++) {
      const indicator = document.createElement("span");
      indicator.addEventListener("click", () => currentSlide(i));
      indicatorsContainer.appendChild(indicator);
    }
    showItems(slideIndex);
  }

  createIndicators();

  ///// /////

  fetch("data/large.json")
    .then((response) => response.json())
    .then((data) => {
      const largeImagesContainer = document.getElementById(
        "large-images-container"
      );
      data.forEach((image) => {
        const imgElement = document.createElement("img");
        imgElement.classList.add("large-img");
        imgElement.src = image.url;
        largeImagesContainer.appendChild(imgElement);
      });
    });

  fetch("data/medium.json")
    .then((response) => response.json())
    .then((data) => {
      const mediumImagesContainer = document.getElementById(
        "medium-images-container"
      );
      data.forEach((image) => {
        const imgElement = document.createElement("img");
        imgElement.classList.add("medium-img");
        imgElement.src = image.url;
        mediumImagesContainer.appendChild(imgElement);
      });
    });
});
