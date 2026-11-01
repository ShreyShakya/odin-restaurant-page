import { loadHome } from "./pages/home.js";
import { loadMenu } from "./pages/menu.js";
import { loadContact } from "./pages/contact.js";

const content = document.querySelector("#content");
const homeButton = document.querySelector('.homeButton')
const menuButton = document.querySelector('.menuButton')
const contactButton = document.querySelector('.contactButton')

loadHome()

homeButton.addEventListener("click", function() {
    content.textContent = "";
    loadHome()
})

menuButton.addEventListener("click", function() {
    content.textContent = "";
    loadMenu()
})

contactButton.addEventListener("click", function() {
    content.textContent = "";
    loadContact()
})