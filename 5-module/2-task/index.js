function toggleText() {
  let btn = document.querySelector('.toggle-text-button');
  let div = document.querySelector('#text');
  
  return btn.addEventListener('click', () => {
    if(div.hasAttribute('hidden')) {
      div.removeAttribute('hidden')
    } else {
      div.setAttribute('hidden', 'true');
    }
  })
}
