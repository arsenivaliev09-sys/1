const menuItems = document.querySelectorAll('.menu-item');
const tabs = document.querySelectorAll('.tab-content');

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    const targetTabId = item.dataset.tab;

    menuItems.forEach((el) => el.classList.remove('active'));
    tabs.forEach((tab) => tab.classList.remove('active'));

    item.classList.add('active');
    document.getElementById(targetTabId).classList.add('active');
  });
});
