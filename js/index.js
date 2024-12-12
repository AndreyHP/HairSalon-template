import { createMenu } from "./menubar.js";
function createImg() {
    var div = document.getElementById("imgs");
    var img = document.createElement("img");
    img.src = "../img/002.png";
    img.className = "land-scape";
    div === null || div === void 0 ? void 0 : div.appendChild(img);
}
function createButton() {
    //var div = document.getElementById("div") as HTMLElement;
    //var btn = document.createElement("button");
    //btn.textContent = "Home";
    //btn.className = "center-btn";
    //div?.appendChild(btn);
    // Add an event listener to the button
    //btn.addEventListener('click', () => {
    //	window.location.href = "./lauren.html";
    //});
}
;
function mobileMenuf() {
    const mobileMenu = document.getElementById("mobile-menu");
    const menu = document.querySelector(".menu");
    mobileMenu.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}
document.addEventListener("DOMContentLoaded", () => {
    //createButton();
    //createImg();
    createMenu("./index.html", "../pages/about.html");
    mobileMenuf();
});
