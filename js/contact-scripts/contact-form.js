function initValidation() {
    const MSG_FORM = document.getElementById("msg-form");
    MSG_FORM.addEventListener("submit", validateEmail);
}

function validateEmail(event) {

    event.preventDefault();

    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const EMAIL = event.target.email.value;
    const MSG_SENT = event.target.message.value;

    //check email
    if (!EMAIL || !EMAIL_REGEX.test(EMAIL) || !MSG_SENT) {
        if (!EMAIL) {
            showError("email", "empty email");
        }
        else if (!EMAIL_REGEX.test(EMAIL)) {
            showError("email", "email format error");
        }

        //check msg
        if (!MSG_SENT) {
            showError("message-box", "empty message");
        }
    }
    else {
        showSuccessMsg();
    }

}

function showError(elementId, msg) {
    const DISPLAYER = document.getElementById(elementId);
    DISPLAYER.style.backgroundImage = "linear-gradient(to bottom right, rgb(236, 245, 236), rgb(226, 196, 196), rgb(199, 136, 136))";
    DISPLAYER.style.borderColor = "rgba(128, 20, 20, 0.5)"
    DISPLAYER.placeholder = msg;

}

function showSuccessMsg() {
    const DISPLAYER = document.getElementById("submit-success-msg");
    DISPLAYER.style.visibility = "visible";

    //fade out DISPLAYER
    setTimeout(() => {
        DISPLAYER.classList.add("fade-out");
    }, 3000);
}

function showDebugMessage(msg) {
    const DISPLAYER = document.getElementById("submit-success-msg");
    DISPLAYER.style.visibility = "visible";
    DISPLAYER.textContent = msg;
}

initValidation();