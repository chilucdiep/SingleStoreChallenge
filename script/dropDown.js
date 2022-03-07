const selected = document.getElementById("selected")
const selectedText = document.getElementById("selected-text")
const optionsContainer = document.getElementById("options-container")
const optionsList = document.querySelectorAll(".option");

let businessSize = "";

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});

optionsList.forEach(option => {
    option.addEventListener("click", () => {
        selectedText.innerHTML = option.querySelector("p").innerHTML;
        businessSize = selectedText.innerHTML;
        optionsContainer.classList.remove("active");
    });
});

document.addEventListener("click", (e) => {
    if (!e.target.matches(".selected") && !e.target.matches('.option')) {
        optionsContainer.classList.remove("active");
    }
})
