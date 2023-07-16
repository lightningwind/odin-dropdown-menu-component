const btnEle = document.querySelector('.btn');
const dropdownEle = document.querySelector('#myDropdown');

btnEle.addEventListener('click', () => {
  dropdownEle.classList.toggle('visible');
});

window.addEventListener('click', (e) => {
  if (e.target !== btnEle) {
    dropdownEle.classList.remove('visible');
  }
});