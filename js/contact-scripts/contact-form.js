function initValidation() {
    const MSG_FORM = document.getElementById("msg-form");
    MSG_FORM.addEventListener("submit", validateEmail);
}

/** @param {SubmitEvent} event */
function validateEmail(event) {

    event.preventDefault();

    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const EMAIL = event.target.email.value;
    const MSG_SENT = event.target.message.value;

    let valid = !EMAIL;
    if (!valid) {
        showError("email", "empty email");
    }

    valid = EMAIL_REGEX.test(EMAIL);
    if (!valid) {
        showError("email", "email format error");
    }

    valid = !MSG_SENT;
    if (!valid) {
        showError("message-box", "message empty");
    }
    else {
        showSuccessMsg();
    }

}

function showError(elementId, msg) {
    const displayer = document.getElementById(elementId);
    displayer.textContent = msg;

    //fade out displayer
    setTimeout(() => {
        displayer.classList.add("fade-out");
    }, 3000);
}

function showSuccessMsg(){
    const displayer = document.getElementById("submit-success");
    displayer.textContent = "message sent";
}

initValidation();