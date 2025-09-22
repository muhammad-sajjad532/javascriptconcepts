const ul = document.getElementById('todo');
ul.addEventListener('click', (e) => {
  if (e.target.matches('button.remove')) {
    const li = e.target.closest('li');
    li.remove();
  }
});
