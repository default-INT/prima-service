const COOKIE_NOTIFIER_KEY = 'cookie-notifier-key-ls';

const cookieNotifier = document.getElementById('cookieAccept');

const isVisible = JSON.parse(window.localStorage.getItem(COOKIE_NOTIFIER_KEY) || 'true');

if (isVisible) cookieNotifier.style.display = 'flex';

const button = cookieNotifier.querySelector('button');

button.addEventListener('click', (e) => {
  e.preventDefault();
  cookieNotifier.style.display = 'none';
  window.localStorage.setItem(COOKIE_NOTIFIER_KEY, 'false');
})

