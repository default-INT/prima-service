const toggleCollapse = (button, id) => {
  const collapsible = document.getElementById(id);
  if (!collapsible) return;

  collapsible.classList.toggle('collapsed');
  button.classList.toggle('collapsed');

  const title = button.querySelector('.text-button-content')

  title.textContent = collapsible.classList.contains('collapsed') ? 'Скрыть' : 'Показать все'
}
