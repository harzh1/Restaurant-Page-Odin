import loadHomePage from "./loadPage";
import menuPage from "./menu";
import "./style.css";

const contentDiv = document.getElementById("content");

const topBar = document.getElementById("top-bar");

// Button for loading the menu
const menuButton = document.createElement("button");
menuButton.id = "menu-tab";
menuButton.innerHTML = "Menu";
const homeButton = document.createElement("button");
homeButton.id = "home-tab";
homeButton.innerHTML = "Home";

const contactButton = document.createElement("button");
contactButton.id = "contact-tab";
contactButton.innerHTML = "Contact Us";

menuButton.onclick = function () {
  contentDiv.innerHTML = "";
  menuPage();
};
homeButton.onclick = function () {
  contentDiv.innerHTML = "";
  loadHomePage();
};

contactButton.onclick = function () {
  contentDiv.innerHTML = "";
  const contactSection = document.createElement("section");
  contactSection.innerHTML =
    "<h2>Contact Us</h2><p>Feel free to reach out to us!</p>" +
    "<p>Email : dbr.restaurant@gmail.com</p>";
  contentDiv.appendChild(contactSection);
};
topBar.appendChild(homeButton);
topBar.appendChild(menuButton);
topBar.appendChild(contactButton);
loadHomePage();

console.log("Working fine");
