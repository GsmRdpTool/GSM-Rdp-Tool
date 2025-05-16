const searchInput = document.getElementById('searchModel');
const modelList = document.getElementById('modelList');

searchInput.addEventListener('input', () => {
  const filter = searchInput.value.toLowerCase();
  const items = modelList.querySelectorAll('.model-item');
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(filter) ? 'flex' : 'none';
  });
});
