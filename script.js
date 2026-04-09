const navItems = document.querySelectorAll('.nav-item');
const views = {
  profile: document.getElementById('view-profile'),
  chats: document.getElementById('view-chats'),
  channels: document.getElementById('view-channels'),
  contacts: document.getElementById('view-contacts')
};

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    const target = item.dataset.view;

    navItems.forEach((btn) => btn.classList.remove('active'));
    item.classList.add('active');

    Object.values(views).forEach((view) => view.classList.remove('active'));
    views[target]?.classList.add('active');
  });
});

const messageForm = document.querySelector('.message-form');
const messageInput = messageForm?.querySelector('input');
const messages = document.querySelector('.messages');

messageForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const value = messageInput.value.trim();
  if (!value) return;

  const bubble = document.createElement('div');
  bubble.className = 'bubble outgoing';
  bubble.textContent = value;
  messages.appendChild(bubble);

  messageInput.value = '';
  messages.scrollTop = messages.scrollHeight;
});
