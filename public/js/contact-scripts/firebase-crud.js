import firebase from "./firebase-setup.js";

function listenToNewMessages() {
  const db = firebase.getDatabase();
  const messagesRef = firebase.ref(db, 'messages/');
  firebase.onValue(messagesRef, showMessages);
}

function listenToSentMessageButton() {
  document.getElementById("chat-input-form").addEventListener("submit", sendMessage);
}

function showMessages(snapshot) {
  let data = snapshot.val();

  let messageList = "";
  for (let item in data) {
    messageList = messageList + `
          <div class="chat-sent-msg">
            <p><b>${data[item].sentBy}:</b>
            ${data[item].message}
            </p>
          </div>
        `;
  }

  let messagesDisplayer = document.getElementById("chat-displayer");
  messagesDisplayer.innerHTML = messageList;
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
