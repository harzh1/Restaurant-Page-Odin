function loadHomePage() {
  const contentDiv = document.getElementById("content");

  //Header
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  h1.innerHTML = "Delicious Bites Restaurant";
  header.appendChild(h1);
  contentDiv.appendChild(header);

  //Image

  const resImage = document.createElement("img");
  resImage.id = "restaurant-image";
  resImage.src = "../dist/restaurant_img.jpg";
  resImage.alt = "Delicious Bites Restaurant Interior";
  contentDiv.appendChild(resImage);

  //Welcome Section
  const welcomeSection = document.createElement("section");
  welcomeSection.id = "welcome-section";
  const h2 = document.createElement("h2");
  h2.innerHTML = "Welcome to our Wonderful Restaurant!";
  const p1 = document.createElement("p");
  p1.textContent =
    "Indulge in a delightful culinary experience at Delicious Bites. Our chefs craft mouth-watering dishes using the finest ingredients, ensuring a memorable dining experience for every guest.";
  const p2 = document.createElement("p");
  p2.textContent =
    "Whether you're here for a casual meal, a celebration, or a special event, we guarantee exceptional service and flavors that will tantalize your taste buds.";

  welcomeSection.appendChild(h2);
  welcomeSection.appendChild(p1);
  welcomeSection.appendChild(p2);
  contentDiv.appendChild(welcomeSection);
}

export default loadHomePage;
