import { createMenu, getContent } from "./menubar.js";
import { aboutImg } from "./about.js";
import { aboutText } from "./about.js";


function updateMain(){
	createMenu();
	aboutImg();
	aboutText();
	//hometImg();
	//homeText();
	getContent();
}


function mobileMenuf(){
	const mobileMenu = document.getElementById("mobile-menu") as HTMLElement;
	const menu = document.querySelector(".menu") as HTMLElement;

	mobileMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
});

}

document.addEventListener("DOMContentLoaded", () => {
	updateMain();
	mobileMenuf();
});

