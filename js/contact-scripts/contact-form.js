function initValidation() {
    const MSG_FORM = document.getElementById("msg-form");
    MSG_FORM.addEventListener("submit", validateEmail);
}

function validateEmail(event) {

    event.preventDefault();
    const DISPLAYER = document.getElementById("submit-success-msg");
    DISPLAYER.classList.remove("fade-out");

    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const EMAIL = event.target.email.value;
    const MSG_SENT = event.target.message.value;
    const MSG_TYPE = event.target.elements["msg-type"].value;

    //check email
    if (!EMAIL || !EMAIL_REGEX.test(EMAIL) || !MSG_TYPE || !MSG_SENT) {

        if (!EMAIL || !EMAIL_REGEX.test(EMAIL)) {
            if (!EMAIL) {
                showError("email", "empty email");
            }
            else if (!EMAIL_REGEX.test(EMAIL)) {
                showError("email", "email format error");
            }
        }
        else {
            rstFormColor("email");
        }

        //check msg
        if (!MSG_TYPE) {
            showError("msg-type", "message type not selected");
        }
        else {
            rstFormColor("msg-type");
        }

        if (!MSG_SENT) {
            showError("message-box", "empty message");
        }
        else {
            rstFormColor("message-box");
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

    rstFormColor("email");
    rstFormColor("msg-type");
    rstFormColor("message-box");

    //fade out DISPLAYER
    setTimeout(() => {
        DISPLAYER.classList.add("fade-out");
    }, 5000);
}

function rstFormColor(elementId) {
    const DISPLAYER = document.getElementById(elementId);
    DISPLAYER.style.backgroundImage = "linear-gradient(to bottom right, rgb(236, 245, 236), rgb(196, 226, 196), rgb(136, 199, 136))";
    DISPLAYER.style.borderColor = "rgba(20, 128, 20, 0.5)"
}

initValidation();