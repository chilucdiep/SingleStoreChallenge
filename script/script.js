const businessEmail = document.getElementById('email')
const emailValidationIcon = document.getElementById('email-validation-icon')
const errorElement = document.getElementById('error')

const businessSize = document.getElementById('size')

const analyticsOption = document.getElementById('analytics')
const storageOption = document.getElementById('storage')
const searchOption = document.getElementById('search')
const priceOption = document.getElementById('price')

const form = document.getElementById('form')

analyticsOption.checked = true;
let errorMessage = "";

businessEmail.addEventListener("click", () => {
    errorMessage = "";
    errorElement.innerText = errorMessage;
    emailValidationIcon.className = "validation-icon";
})

form.addEventListener("submit", (e) => {
    const emailRegex = /@|./;
    const personalEmailRegex = /gmail|hotmail|outlook|yahoo/;

    console.log(emailRegex.test(businessEmail.value));

    if (!emailRegex.test(businessEmail.value)) {
        errorMessage = "Please enter a valid emaild adress";
    }

    if (businessEmail.value === '' || businessEmail.value === null) {
        errorMessage = "Please enter a valid email adress";
    }

    if (personalEmailRegex.test(businessEmail.value)) {
        errorMessage = "Please make sure this isn't a personal email address";
    }

    if (errorMessage.length > 0) {
        e.preventDefault()
        errorElement.innerText = errorMessage;
        businessEmail.className = "error"
        emailValidationIcon.classList.add("fa-solid");
        emailValidationIcon.classList.remove("fa-circle-check");
        emailValidationIcon.classList.add("fa-triangle-exclamation");
    } else {
        e.preventDefault()
        errorMessage = "";
        errorElement.innerText = errorMessage;
        businessEmail.className = "success"
        emailValidationIcon.classList.add("fa-solid");
        emailValidationIcon.classList.remove("fa-triangle-exclamation");
        emailValidationIcon.classList.add("fa-circle-check");
    }

    if (errorMessage === "" || errorMessage === null) {
        if (businessSize.value === "small" || storageOption.checked || searchOption.checked || priceOption.checked) {
            window.location = "/unqualified.html";
        } else {
            window.location = "/qualified.html";
        }
    }

})
