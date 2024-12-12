import { createMenu } from "./menubar.js";
function aboutImg() {
    var div = document.getElementById("imgs");
    var img = document.createElement("img");
    img.src = "../img/istockphoto-2153275892-1024x1024.jpg";
    div === null || div === void 0 ? void 0 : div.appendChild(img);
}
function aboutText() {
    var div = document.getElementById("about-div");
    var text = document.createElement("p");
    text.className = "about-text";
    text.textContent = "Omnis corrupti ipsum dolor qui soluta. Commodi amet velit sunt. Porro pariatur assumenda itaque architecto. Nesciunt dolore id reprehenderit nisi fugiat eligendi esse est.Facilis tempora non repellendus commodi repellendus explicabo et. Aut ut eos sunt culpa. Nulla iure non iste recusandae ut sapiente esse consequatur.Earum possimus et ut quia molestiae quos. Est placeat sint qui voluptatum amet. Voluptatem non minus modi. Aspernatur ducimus architecto blanditiis. Pariatur quidem quo ex incidunt et. Magni ipsam aut voluptas quaerat tenetur molestiae ut eum.Fugit expedita non perspiciatis placeat soluta occaecati. Voluptates quam nulla aut illo non. Aut officiis dolorem numquam dolorum rerum incidunt harum quidem.Nulla ullam harum nemo ipsa. Voluptatem nihil exercitationem quos temporibus similique. Minima non iure voluptas molestiae officiis laborum. Quia molestiae nihil sint nemo et dolores.";
    div === null || div === void 0 ? void 0 : div.appendChild(text);
}
document.addEventListener("DOMContentLoaded", () => {
    //createButton();
    //createImg();
    createMenu("../index.html", "../pages/about.html");
    aboutText();
    aboutImg();
    //mobileMenuf();
});
