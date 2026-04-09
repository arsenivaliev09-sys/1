const menu = document.getElementById('menu');
const menuItems = [...menu.querySelectorAll('.menu-item')];
const tabs = [...document.querySelectorAll('.tab-content')];

menu.addEventListener('click', (event) => {
  const btn = event.target.closest('.menu-item');
  if (!btn) return;

  const targetTab = btn.dataset.tab;

  menuItems.forEach((item) => item.classList.toggle('active', item === btn));
  tabs.forEach((tab) => tab.classList.toggle('active', tab.id === targetTab));
});
