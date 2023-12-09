function menuPage() {
  const element = document.getElementById("content");

  //Header
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  h1.innerHTML = "MENU";
  header.appendChild(h1);
  element.appendChild(header);

  //Beverages
  const beverages = document.createElement("div");
  const h11 = document.createElement("h1");
  h11.innerHTML = "BEVERAGES";
  element.appendChild(h11);
  beverages.id = "beverages";
  beverages.classList.add("centered");

  const dish1 = document.createElement("div");
  dish1.classList.add("dish");
  const h21 = document.createElement("h2");
  h21.textContent = "Honey Tea - $2";
  const p11 = document.createElement("p");
  p11.textContent =
    "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!";
  const dishImg1 = document.createElement("img");
  dishImg1.classList.add("dish-image");
  dishImg1.src = "../src/honey-tea.jpg";
  dishImg1.alt = "Honey Tea";
  dish1.appendChild(h21);
  dish1.appendChild(p11);
  dish1.appendChild(dishImg1);
  beverages.appendChild(dish1);

  const dish2 = document.createElement("div");
  dish2.classList.add("dish");
  const h22 = document.createElement("h2");
  h22.textContent = "Beary Tea - $3";
  const p12 = document.createElement("p");
  p12.textContent =
    "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.";
  const dishImg2 = document.createElement("img");
  dishImg2.classList.add("dish-image");
  dishImg2.src = "../src/beary-tea.jpg";
  dishImg2.alt = "Beary Tea";
  dish2.appendChild(h22);
  dish2.appendChild(p12);
  dish2.appendChild(dishImg2);
  beverages.appendChild(dish2);

  element.appendChild(beverages);
}

export default menuPage;
