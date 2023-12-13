const search = document.querySelector('.search');
const input = document.querySelector('.search-box');
const btn = document.querySelector('.search-button');

btn.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus();
});
