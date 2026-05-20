const pages = {
  profile: document.getElementById('profile-page'),
  chats: document.getElementById('chats-page'),
  channels: document.getElementById('channels-page'),
  contacts: document.getElementById('contacts-page')
};

const navItems = document.querySelectorAll('.nav-item');

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navItems.forEach((node) => node.classList.remove('active'));
    item.classList.add('active');

    Object.values(pages).forEach((page) => page.classList.remove('active'));
    pages[item.dataset.page]?.classList.add('active');
  });
});

const generatedDescription =
  'Люблю создавать лаконичные цифровые продукты, где визуальная чистота сочетается с удобством. Интересуюсь интерфейсами, типографикой и быстрыми прототипами для командных проектов.';

document.getElementById('auto-description').textContent = generatedDescription;

const dialogs = {
  irina: {
    name: 'Ирина',
    messages: [
      { text: 'Привет! Как идёт подготовка к презентации?', side: 'incoming' },
      { text: 'Отлично, финализирую слайды и анимации.', side: 'outgoing' },
      { text: 'Супер, встречаемся в 19:00 в Zoom?', side: 'incoming' }
    ]
  },
  maksim: {
    name: 'Максим',
    messages: [
      { text: 'Скинь макет главной страницы, пожалуйста.', side: 'incoming' },
      { text: 'Уже отправила, проверь в общем чате.', side: 'outgoing' },
      { text: 'Спасибо, выглядит очень аккуратно!', side: 'incoming' }
    ]
  }
};

const chatItems = document.querySelectorAll('.chat-item');
const messagesContainer = document.getElementById('messages');
const chatTitle = document.getElementById('chat-title');
const composer = document.getElementById('composer');
const input = document.getElementById('message-input');

let activeChat = 'irina';

const renderMessages = () => {
  const current = dialogs[activeChat];
  chatTitle.textContent = current.name;
  messagesContainer.innerHTML = '';

  current.messages.forEach((msg) => {
    const bubble = document.createElement('div');
    bubble.className = `bubble ${msg.side}`;
    bubble.textContent = msg.text;
    messagesContainer.appendChild(bubble);
  });

  messagesContainer.scrollTop = messagesContainer.scrollHeight;
};

chatItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    if (event.target.closest('.mini-call')) return;
    chatItems.forEach((node) => node.classList.remove('active'));
    item.classList.add('active');
    activeChat = item.dataset.chat;
    renderMessages();
  });
});

composer.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  dialogs[activeChat].messages.push({ text, side: 'outgoing' });
  input.value = '';
  renderMessages();
});

renderMessages();
