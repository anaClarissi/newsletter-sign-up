function handleForm() {

    const form = document.querySelector("#form");

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        checkEmail();

    });

}

function handleDismissButton() {

    const btnDismiss = document.querySelector(".btn-dismiss");

    btnDismiss.addEventListener("click", () => {

        cleanInput();

        closeSuccessMessage();

        showContainer();

    });

}

function cleanInput() {

    const email = document.querySelector("#email");

    email.value = "";

}

function checkEmail () {

    const email = document.querySelector("#email").value;

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regex.test(email)) {

        setEmailMessage(email);

        showSuccessMessage();

        closeContainer();

    } else {

        showMessageError();

    }

}

function showMessageError() {

    const form = document.querySelector("#form");

    const messageError = document.querySelector("#error-email");

    form.classList.remove("error");

    form.classList.add("error");

    messageError.hidden = false;

}

function showContainer() {

    const container = document.querySelector(".container");

    container.classList.remove("close");

    container.hidden = false;

}

function closeContainer() {

    const container = document.querySelector(".container");

    container.classList.add("close");

    container.hidden = true;

}

function showSuccessMessage() {

    const form = document.querySelector("#form");

    const messageError = document.querySelector("#error-email");

    const successMessage = document.querySelector("#message-success");
    
    form.classList.remove("error");
    
    messageError.hidden = true;

    successMessage.classList.add("show");

    successMessage.hidden = false;

}

function closeSuccessMessage() {

    const successMessage = document.querySelector("#message-success");

    successMessage.classList.remove("show");

    successMessage.hidden = true;

}

function setEmailMessage(email) {

    const emailContent = document.querySelector("#email-digit");

    emailContent.textContent = email;
    
}

handleForm();

handleDismissButton();