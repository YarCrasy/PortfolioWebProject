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
                showError("email");
            }
            else if (!EMAIL_REGEX.test(EMAIL)) {
                showError("email");
            }
        }
        else {
            rstFormColor("email");
        }

        //check msg type
        if (!MSG_TYPE) {
            showError("msg-type");
        }
        else {
            rstFormColor("msg-type");
        }

        //check message
        if (!MSG_2_SEND) {
            showError("message-box");
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

        const DISPLAYER = document.getElementById("submit-success-msg");
        DISPLAYER.style.visibility = "hidden";
    }
    else {
        console.log("hi");
        const FORM = document.getElementById("msg-form");
        FORM.reset();
        showSuccessMsg();
        saveFormData(EMAIL, MSG_TYPE, MSG_2_SEND);
    }

}


function showError(elementId) {
    const DISPLAYER = document.getElementById(elementId);

    if (elementId == "checkbox") {
        const TXT = document.getElementById("terms-p");
        TXT.style.color = "red";
    } else {
        DISPLAYER.style.backgroundImage = "linear-gradient(to bottom right, rgb(236, 245, 236), rgb(226, 196, 196), rgb(199, 136, 136))";
        DISPLAYER.style.borderColor = "rgba(128, 20, 20, 0.5)";
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

    let dataArray = [];
    if (localStorage.getItem("dataArray")) {
        dataArray = JSON.parse(localStorage.getItem("dataArray"));
    }

    let newData = [{
        email: email,
        msgType: msgType,
        msg: msg
    }];

    dataArray.push(newData[0]);
    localStorage.setItem("dataArray", JSON.stringify(dataArray));
    showFormData();
}

//show form data at set message panel
function showFormData() {
    let dataArray = JSON.parse(localStorage.getItem("dataArray"));

    if (dataArray) {
        const MSGS_CONTAINER = document.getElementById("sent-msgs-container");
        MSGS_CONTAINER.innerHTML = "";
        for (let i = 0; i < dataArray.length; i++) {
            let aux = document.createElement("div");
            aux.classList.add("sent-msg");
            aux.id = `sent-msg-${i}`;
            MSGS_CONTAINER.appendChild(aux);
            aux.innerHTML = `<div class="sent-msg-data">
                <div class="by">
                    <p>By: ${dataArray[i].email}</p>
                </div>
                <div class="sent-type">
                    <p>Type: ${dataArray[i].msgType}</p>
                </div>
                <div class="msg" id="msg-${i}">
                    <p>Message:<br>${dataArray[i].msg}</p>
                </div>
                <div class="msg" id="msg-edit-${i}">
                    <textarea name="edit-msg-${i}" id="edit-textarea-${i}" placeholder="${dataArray[i].msg}" class="msg"></textarea>
                    <button onclick="updateMsg(edit-msg-${i})">Edit</button>
                </div>
            </div>
            <div class="sent-msg-ctrl">
                <button onclick="deleteLocalStorageAt(${i})">
                    <img src="../../imgs/icon-imgs/trash-icon.svg" alt="delete" class="del-btn">
                </button>
                <button onclick="editLocalStorageAt(${i})">
                    <img src="../../imgs/icon-imgs/edit-icon.svg" alt="edit" class="edit-btn">
                </button>
            </div>`;
        }
    }
}

function deleteLocalStorageAt(index) {
    let dataArray = JSON.parse(localStorage.getItem("dataArray"));
    dataArray.splice(index, 1);
    localStorage.setItem("dataArray", JSON.stringify(dataArray));

    showFormData();
}

function editLocalStorageAt(index) {
    let dataArray = JSON.parse(localStorage.getItem("dataArray"));

    setActive(`msg-${index}`, false);
    setActive(`msg-edit-${index}`, true);
    dataArray[index].msg = prompt("Enter new message", dataArray[index].msg);
    localStorage.setItem("dataArray", JSON.stringify(dataArray));
    showFormData();
}

function setActive(elementeId, active) {
    const ELEMENT = document.getElementById(elementeId);
    if (active) {
        ELEMENT.style.display = "none";
    }
    else {
        ELEMENT.style.display = "flex";
    }
}

function updateMsg(index) {
    const MSG = document.getElementById(`edit-textarea-${index}`);	
    let dataArray = JSON.parse(localStorage.getItem("dataArray"));
    dataArray[index].msg = MSG.value;
    localStorage.setItem("dataArray", JSON.stringify(dataArray));
    
}

initValidation();
showFormData();