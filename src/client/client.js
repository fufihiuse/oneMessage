const socket = io();

const nameSection = document.querySelector('#name');
const messageSection = document.querySelector('#message');

const updateMessage = (msg) => {
    nameSection.textContent = msg.name;
    messageSection.textContent = msg.message;
}

const init = () => {
    socket.on('messagePosted', updateMessage);
};

window.onload = init;