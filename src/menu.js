function menuPage() {
  const element = document.createElement("div");

  //Header
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  h1.innerHTML = "MENU";
  header.appendChild(h1);
  element.appendChild(header);

  //Beverages
  const beverages = document.createElement("div");

  const dish = document.createElement("div");
  dish.id = "dish";
  const h21 = document.createElement("h2");
  h21.textContent = "Honey Tea - $2";
  const p1 = document.createElement("p");
  p1.textContent =
    "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!";
  const dishImg = document.createElement("img");
  dishImg.classList.add("dish-image");
  dishImg.src = "../src/honey-tea.jpg";
  dishImg.alt = "Honey Tea";
  dish.appendChild(h21);
  dish.appendChild(p1);
  dish.appendChild(dishImg);
  beverages.appendChild(dish);
  element.appendChild(beverages);
  return element;
}

export default menuPage();
