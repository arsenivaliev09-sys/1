const chatForm = document.getElementById('chatForm');
const messageInput = document.getElementById('messageInput');
const chatMessages = document.getElementById('chatMessages');
const chatUser = document.getElementById('chatUser');
const dialogs = document.querySelectorAll('.dialog');

const nowTime = () =>
  new Date().toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit'
  });

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = messageInput.value.trim();
  if (!text) {
    return;
  }

  const msg = document.createElement('article');
  msg.className = 'message message--outgoing';
  msg.innerHTML = `<p></p><time>${nowTime()}</time>`;
  msg.querySelector('p').textContent = text;

  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  messageInput.value = '';
});

dialogs.forEach((dialog) => {
  dialog.addEventListener('click', () => {
    dialogs.forEach((item) => item.classList.remove('dialog--active'));
    dialog.classList.add('dialog--active');
    chatUser.textContent = dialog.dataset.user || 'Собеседник';
  });
});
