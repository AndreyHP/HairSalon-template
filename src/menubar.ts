export function createMenu(homehref: string, abouthref: string){
	var div = document.getElementById("div") as HTMLAreaElement;
	var div2 = document.getElementById("div2") as HTMLAreaElement;

	var home = document.createElement("a");
	var about = document.createElement("a");

	home.textContent = "Home";
	home.href = homehref;

	about.textContent = "About";
	about.href = abouthref;

	div?.appendChild(home);
	div2?.appendChild(about);
}
