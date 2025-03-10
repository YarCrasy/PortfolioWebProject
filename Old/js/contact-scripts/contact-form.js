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
            if (!EMAIL) showError("email");
            else if (!EMAIL_REGEX.test(EMAIL)) showError("email");
        }
        else rstFormColor("email");

        //check msg type
        if (!MSG_TYPE) showError("msg-type");
        else rstFormColor("msg-type");

        //check message
        if (!MSG_2_SEND) showError("message-box");
        else rstFormColor("message-box");

        let aux = document.getElementById("terms-p");
        //check checkbox
        if (!CHECKBOX) showError("checkbox");
        else aux.style.color = "rgb(189, 209, 193)";

        aux = document.getElementById("submit-btn");
        aux.style.backgroundImage = "linear-gradient(to bottom right, rgb(236, 245, 236), rgb(226, 196, 196), rgb(199, 136, 136))";
        aux.style.borderColor = "rgba(128, 20, 20, 0.5)";

        const DISPLAYER = document.getElementById("submit-success-msg");
        DISPLAYER.style.visibility = "hidden";
    }
    else {
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

function getLanguageData() {
    const MSG_LANG_DATA = [
        { by: "By", type: "Type", msg: "Message" },
        { by: "Por", type: "Tipo", msg: "Mensaje" },
        { by: "发件人", type: "类型", msg: "信息" },
    ];

    const MSG_TYPE_LANG = [
        { report: "Bug report", bussiness: "Bussiness", other: "Other" },
        { report: "Reporte de error", bussiness: "Negocios", other: "Otro" },
        { report: "错误报告", bussiness: "商业", other: "其他" },
    ];

    let langIndex = 0;
    if (document.documentElement.lang === "es") langIndex = 1;
    else if (document.documentElement.lang === "zh") langIndex = 2;

    return { LANG: MSG_LANG_DATA[langIndex], TYPE_LANG: MSG_TYPE_LANG[langIndex] };
}

//show form data at set message panel
function showFormData() {
    let dataArray = JSON.parse(localStorage.getItem("dataArray"));
    const { LANG, TYPE_LANG } = getLanguageData();
    let typeToDisplay;

    if (dataArray) {
        const MSGS_CONTAINER = document.getElementById("sent-msgs-container");
        MSGS_CONTAINER.innerHTML = "";
        for (let i = 0; i < dataArray.length; i++) {

            if (dataArray[i].msgType == "report") typeToDisplay = TYPE_LANG.report;
            else if (dataArray[i].msgType == "bussiness") typeToDisplay = TYPE_LANG.bussiness;
            else typeToDisplay = TYPE_LANG.other;

            let aux = document.createElement("div");
            aux.classList.add("sent-msg");
            aux.id = `sent-msg-${i}`;
            MSGS_CONTAINER.appendChild(aux);
            aux.innerHTML = `<div class="sent-msg-data">
                <div class="by">
                    <p>${LANG.by}: ${dataArray[i].email}</p>
                </div>
                <div class="sent-type">
                    <p>${LANG.type}: ${typeToDisplay}</p>
                </div>
                <div class="msg" id="msg-${i}">
                    <p>${LANG.msg}:<br>${dataArray[i].msg}</p>
                </div>
                <div class="msg-editor" id="msg-edit-${i}">
                    <p>${LANG.msg}:</p>
                    <div class="horizontal-display">
                    <textarea name="edit-msg-${i}" id="edit-textarea-${i}" placeholder="${dataArray[i].msg}" class="msg"></textarea>
                    <button onclick="editLocalStorageAt(${i})">
                        <img src="../../imgs/icon-imgs/save-icon.svg" alt="save">
                    </button>
                    <button onclick="updateMsgAt(${i}, false)">
                        <img src="../../imgs/icon-imgs/cancel-icon.svg" alt="save">
                    </button>
                    </div>
                </div>
            </div>
            <div class="sent-msg-ctrl">
                <button onclick="deleteLocalStorageAt(${i})">
                    <img src="../../imgs/icon-imgs/trash-icon.svg" alt="delete">
                </button>
                <button onclick="updateMsgAt(${i}, true)">
                    <img src="../../imgs/icon-imgs/edit-icon.svg" alt="edit">
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

function updateMsgAt(index, set) {
    setActive(`msg-${index}`, !set);
    setActive(`msg-edit-${index}`, set);
}

function editLocalStorageAt(index) {
    let dataArray = JSON.parse(localStorage.getItem("dataArray"));

    let aux = document.getElementById(`edit-textarea-${index}`);

    if (!aux.value) {
        aux.style.borderColor = "red";
    }
    else {
        aux.style.borderColor = "rgb(139, 139, 139)";
        dataArray[index].msg = aux.value;
        localStorage.setItem("dataArray", JSON.stringify(dataArray));

        showFormData();
        setActive(`msg-${index}`, true);
        setActive(`msg-edit-${index}`, false);
    }
}

function setActive(elementeId, active) {
    const ELEMENT = document.getElementById(elementeId);
    if (!active) ELEMENT.style.display = "none";
    else ELEMENT.style.display = "flex";
}

function updateMsg(index) {
    const MSG = document.getElementById(`edit-textarea-${index}`);
    let dataArray = JSON.parse(localStorage.getItem("dataArray"));
    dataArray[index].msg = MSG.value;
    localStorage.setItem("dataArray", JSON.stringify(dataArray));
}

initValidation();
showFormData();
