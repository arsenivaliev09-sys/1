const menuItems = document.querySelectorAll('.menu-item');
const tabs = document.querySelectorAll('.tab-content');

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menuItems.forEach((btn) => btn.classList.remove('active'));
    tabs.forEach((tab) => tab.classList.remove('active'));

    item.classList.add('active');
    const tabId = item.dataset.tab;
    const targetTab = document.getElementById(tabId);

    if (targetTab) {
      targetTab.classList.add('active');
    }
  });
});

const dialogItems = document.querySelectorAll('.dialog-item');
const chatThreads = document.querySelectorAll('.chat-thread');

function setActiveChat(chatId) {
  dialogItems.forEach((item) => {
    item.classList.toggle('active', item.dataset.chat === chatId);
  });

  chatThreads.forEach((thread) => {
    thread.classList.toggle('active', thread.id === chatId);
  });
}

dialogItems.forEach((item) => {
  item.addEventListener('click', () => {
    setActiveChat(item.dataset.chat);
  });
});

const sendBtn = document.getElementById('sendBtn');
const messageInput = document.getElementById('messageInput');

function appendMessage() {
  const text = messageInput.value.trim();

  if (!text) {
    return;
  }

  const activeThread = document.querySelector('.chat-thread.active');

  if (!activeThread) {
    return;
  }

  const message = document.createElement('div');
  message.className = 'message outgoing';
  message.textContent = text;

  activeThread.appendChild(message);
  messageInput.value = '';
  activeThread.scrollTop = activeThread.scrollHeight;
}

sendBtn.addEventListener('click', appendMessage);
messageInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    appendMessage();
  }
});
