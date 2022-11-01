const rows = document.querySelector(".rows");
const gridContainer = document.querySelector(".grid-container");
const dropdown = document.querySelector(".dropdown");
const options = document.querySelector(".options");

const etchASketch = () => {
	const childDiv = document.createElement("div");
	childDiv.classList.add("square");
	childDiv.addEventListener("mouseover", () => {
		childDiv.classList.replace("square", "colorized");
	});
	gridContainer.appendChild(childDiv);
};

show = (value) => {
	rows.value = value;
	gridContainer.innerHTML = "";
	gridContainer.style.setProperty(
		"grid-template-columns",
		`repeat(${rows.value}, 2fr)`
	);
	gridContainer.style.setProperty(
		"grid-template-rows",
		`repeat(${rows.value}, 2fr)`
	);
	rowsValue = rows.value * rows.value;
	for (let i = 0; i < rowsValue; i++) {
		etchASketch();
	}
};

dropdown.onclick = () => {
	options.classList.toggle("active");
};

createGrid = () => {
	rows.value = null;
	for (let i = 0; i < 256; i++) {
		const childDiv = document.createElement("div");
		childDiv.classList.add("square");
		gridContainer.appendChild(childDiv);
	}
};

reset = () => {
	if (rows.value) {
		rows.value = null;
		gridContainer.innerHTML = null;
		gridContainer.style.setProperty("grid-template-columns", "repeat(16, 2fr)");
		gridContainer.style.setProperty("grid-template-rows", "repeat(16, 2fr)");
		createGrid();
	}
};

createGrid();
