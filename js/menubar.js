export function createMenu(homehref, abouthref) {
    var div = document.getElementById("div");
    var div2 = document.getElementById("div2");
    var home = document.createElement("a");
    var about = document.createElement("a");
    home.textContent = "Home";
    home.href = homehref;
    about.textContent = "About";
    about.href = abouthref;
    div === null || div === void 0 ? void 0 : div.appendChild(home);
    div2 === null || div2 === void 0 ? void 0 : div2.appendChild(about);
}
