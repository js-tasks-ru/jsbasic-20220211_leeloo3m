function hideSelf() {
  let btn = document.querySelector('.hide-self-button');
  return btn.addEventListener('click', () => {
    btn.setAttribute('hidden', 'true');
  })
}
