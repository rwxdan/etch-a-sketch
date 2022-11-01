let textBox = document.querySelector(".text-box");
function show(value) {
	textBox.value = value;
}

const dropdown = document.querySelector(".dropdown");
const options = document.querySelector(".options");
dropdown.onclick = () => {
	options.classList.toggle("active");
};

const reset = () => {
	if (textBox.value) {
		textBox.value = null;
	}
	return;
};
