const selected = document.getElementById("selected")
const optionsContainer = document.getElementById("options-container")
const optionsList = document.querySelectorAll(".option");

let businessSize = "";

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});

optionsList.forEach(option => {
    option.addEventListener("click", () => {
        selected.innerHTML = option.querySelector("p").innerHTML;
        businessSize = selected.innerHTML;
        optionsContainer.classList.remove("active");
    });
});