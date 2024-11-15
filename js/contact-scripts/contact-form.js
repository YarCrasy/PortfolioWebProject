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
    const MSG_2_SEND = event.target.message.value;
    const MSG_TYPE = event.target.elements["msg-type"].value;
    const CHECKBOX = event.target.elements["temrs"].checked

    //check email
    if (!EMAIL || !EMAIL_REGEX.test(EMAIL) || !MSG_TYPE || !MSG_2_SEND || !CHECKBOX) {

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

        //check msg type
        if (!MSG_TYPE) {
            showError("msg-type", "message type not selected");
        }
        else {
            rstFormColor("msg-type");
        }

        //check message
        if (!MSG_2_SEND) {
            showError("message-box", "empty message");
        }
        else {
            rstFormColor("message-box");
        }

        let aux;
        //check checkbox
        if (!CHECKBOX) {
            showError("checkbox", "please agree to the terms");
        }
        else {
            aux = document.getElementById("terms-p");
            aux.style.color = "rgb(189, 209, 193)";
        }

        aux = document.getElementById("submit-btn");
        aux.style.backgroundImage = "linear-gradient(to bottom right, rgb(236, 245, 236), rgb(226, 196, 196), rgb(199, 136, 136))";
        aux.style.borderColor = "rgba(128, 20, 20, 0.5)";
    }
    else {
        showSuccessMsg();
        saveFormData(EMAIL, MSG_TYPE, MSG_2_SEND);
    }

}

function showError(elementId, msg) {
    const DISPLAYER = document.getElementById(elementId);

    if (elementId == "checkbox") {
        const TXT = document.getElementById("terms-p");
        TXT.style.color = "red";
    } else {
        DISPLAYER.style.backgroundImage = "linear-gradient(to bottom right, rgb(236, 245, 236), rgb(226, 196, 196), rgb(199, 136, 136))";
        DISPLAYER.style.borderColor = "rgba(128, 20, 20, 0.5)";
        DISPLAYER.placeholder = msg;
    }
}

function showSuccessMsg() {
    const DISPLAYER = document.getElementById("submit-success-msg");
    DISPLAYER.style.visibility = "visible";

    rstFormColor("email");
    rstFormColor("msg-type");
    rstFormColor("message-box");

    let aux = document.getElementById("terms-p");
    aux.style.color = "rgb(189, 209, 193)";

    aux = document.getElementById("submit-btn");
    aux.style.backgroundImage = "linear-gradient(to bottom right, rgb(236, 245, 236), rgb(196, 226, 196), rgb(136, 199, 136))";
    aux.style.borderColor = "rgba(20, 128, 20, 0.5)"

    //fade out DISPLAYER
    setTimeout(() => {
        DISPLAYER.classList.add("fade-out");
    }, 5000);
}

function rstTermsColor() {
    const TXT = document.getElementById("terms-p");
    TXT.style.color = "rgb(189, 209, 193)";
}

function rstFormColor(elementId) {
    const DISPLAYER = document.getElementById(elementId);
    DISPLAYER.style.backgroundImage = "linear-gradient(to bottom right, rgb(236, 245, 236), rgb(196, 226, 196), rgb(136, 199, 136))";
    DISPLAYER.style.borderColor = "rgba(20, 128, 20, 0.5)"
}

function saveFormData(email, msgType, msg) {
    localStorage.setItem("email", email);
    localStorage.setItem("msgType", msgType);
    localStorage.setItem("msg", msg);

    const FORM = document.getElementById("msg-form");
    FORM.reset();
    showFormData();
}

//show form data at set message panel
function showFormData() {
    const EMAIL = localStorage.getItem("email");
    const MSG_TYPE = localStorage.getItem("msgType");
    const MSG = localStorage.getItem("msg");

    if(EMAIL || MSG_TYPE || MSG){
        const MSGS_CONTAINER = document.getElementById("sent-msgs-container");
        let aux = document.createElement("div");
        aux.classList.add("sent-msg");
        MSGS_CONTAINER.appendChild(aux);
        aux.innerHTML = `<div class="by">
                <p>By: ${EMAIL}</p>
            </div>
            <div class="sent-type">
                <p>Type: ${MSG_TYPE}</p>
            </div>
            <div class="msg">
                <p>Message:<br>${MSG}</p>
            </div>`;
    }

}

initValidation();
showFormData();