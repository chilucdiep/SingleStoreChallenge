const businessEmail = document.getElementById('email')
const emailValidationIcon = document.getElementById('email-validation-icon')

const analyticsOption = document.getElementById('analytics')
const storageOption = document.getElementById('storage')
const searchOption = document.getElementById('search')
const priceOption = document.getElementById('price')

const form = document.getElementById('form')

analyticsOption.checked = true;
let errorMessage = "";
const errorElement = document.createElement("p");

businessEmail.addEventListener("click", () => {
    removeErrorMessage();
    emailValidationIcon.className = "validation-icon";
})

businessEmail.addEventListener("change", (e) => {
    validateEmail(e);
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateEmail(e);


    validateQualification();
})

const validateEmail = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const personalEmailRegex = /gmail|hotmail|outlook|yahoo/;

    if (!emailRegex.test(businessEmail.value)) {
        errorMessage = "Please enter a valid emaild adress";
    }

    if (businessEmail.value === '' || businessEmail.value === null) {
        errorMessage = "Please enter a valid email adress";
    }

    if (personalEmailRegex.test(businessEmail.value)) {
        errorMessage = "Please make sure this isn't a personal email address";
    }

    if (errorMessage !== "") {
        addError()
    } else {
        addSuccess()
    }
}

const addError = () => {
    addErrorMessage();

    businessEmail.className = "error"
    emailValidationIcon.classList.add("fa-solid");
    emailValidationIcon.classList.remove("fa-circle-check");
    emailValidationIcon.classList.add("fa-triangle-exclamation");
}

const addErrorMessage = () => {
    console.log(errorElement)
    errorElement.innerHTML = errorMessage;
    errorElement.className = "annotation-error"
    document.getElementById("text-input").appendChild(errorElement);
}

const addSuccess = () => {
    removeErrorMessage();

    businessEmail.className = "success"
    emailValidationIcon.classList.add("fa-solid");
    emailValidationIcon.classList.remove("fa-triangle-exclamation");
    emailValidationIcon.classList.add("fa-circle-check");
}

const removeErrorMessage = () => {
    errorMessage = ""
    errorElement.remove()
    businessEmail.classList.remove('error')
}

const validateQualification = () => {
    if (errorMessage === "" || errorMessage === null) {
        if (businessSize === "1-10" || storageOption.checked || searchOption.checked || priceOption.checked) {
            window.location = "/unqualified.html";
        } else {
            window.location = "/qualified.html";
        }
    }
}
