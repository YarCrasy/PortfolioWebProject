import firebase from "./firebase-setup.js";

function listenToNewMessages() {
    const db = firebase.getDatabase();
    const messagesRef = firebase.ref(db, 'messages/');
    firebase.onValue(messagesRef, showMessages);
}

function listenToSentMessageButton() {
    document.getElementById("form-send-message").addEventListener("onClick", sendMessage);
}

function showMessages(snapshot) {
    let data = snapshot.val();

    let messageList = "";
    for (let item in data) {
        messageList = `
            <div class="sent-msg">
              <p>${data[item].sentBy}:</p>
              <p>${data[item].message}</p>
            </div>
        `;
    }

    let messageListElement = document.getElementById("chat-displayer");
    messageListElement.innerHTML = messageList;
}

function sendMessage(event) {
    event.preventDefault();
    let formSendMessage = event.target;

    const db = firebase.getDatabase();
    const messagesRef = firebase.ref(db, 'messages/');
    const newMessageRef = firebase.push(messagesRef);
    firebase.set(newMessageRef, {
        message: formSendMessage.message.value,
        sentBy: formSendMessage["sent-by"].value
    })
}

listenToNewMessages();
listenToSentMessageButton();