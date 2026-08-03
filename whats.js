const btn = document.getElementById('whatsapp-button');
const dialog = document.getElementById('whatsapp-dialog');
let isOpen = false;

btn.addEventListener('click', () => {
  isOpen = !isOpen;
  dialog.style.display = isOpen ? 'block' : 'none';

  // Remove notificação ao abrir
  if (isOpen) {
    const badge = document.querySelector('.notification-badge');
    if (badge) badge.style.display = 'none';
  }
});
