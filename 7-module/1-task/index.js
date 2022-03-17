import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  elem = null;
  constructor(categories) {
    this.categories = categories;
    this.elem = document.createElement('div');
    this.elem.classList.add('ribbon');
    this.arrowLeft();
    this.ribbonInner();
    this.arrowRight();
    this.scroll();
    this.choiceCategory();
  }

arrowLeft() {
  let l = `
  <button class="ribbon__arrow ribbon__arrow_left ">
  <img src="/assets/images/icons/angle-icon.svg" alt="icon">
</button>
  `
this.elem.innerHTML = l;
} 

ribbonInner() {
  let r = `
  <nav class="ribbon__inner">
      <a href="#" class="ribbon__item ribbon__item_active" data-id="">All</a>
      <a href="#" class="ribbon__item" data-id="salads">Salads</a>
      <a href="#" class="ribbon__item" data-id="soups">Soups</a>
      <a href="#" class="ribbon__item" data-id="chicken-dishes">Chicken dishes</a>
      <a href="#" class="ribbon__item" data-id="beef-dishes">Beef dishes</a>
      <a href="#" class="ribbon__item" data-id="seafood-dishes">Seafood dishes</a>
      <a href="#" class="ribbon__item" data-id="vegetable-dishes">Vegetable dishes</a>
      <a href="#" class="ribbon__item" data-id="bits-and-bites">Bits and bites</a>
      <a href="#" class="ribbon__item" data-id="on-the-side ribbon__item_active">On the side</a>
    </nav>
  `
  this.elem.innerHTML += r;

}

arrowRight() {
  let r = `
  <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible ">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>`
    
    this.elem.innerHTML += r;
}

scroll() {
  let btnL = this.elem.querySelector('.ribbon__arrow_left');
  let btnR = this.elem.querySelector('.ribbon__arrow_right');
  let lenta = this.elem.querySelector('.ribbon__inner');
  
  btnL.addEventListener('click', ()=>{
    lenta.scrollBy(-350, 0);
    }    
  )

  btnR.addEventListener('click', ()=>{
    lenta.scrollBy(350, 0);   
  })

  lenta.addEventListener('scroll', ()=>{
    let scrollLeft = lenta.scrollLeft;
    let scrollWidth = lenta.scrollWidth;
    let clientWidth = lenta.clientWidth;
    let scrollRight = scrollWidth - scrollLeft - clientWidth;

    if(scrollRight<1) {
      btnR.classList.remove('ribbon__arrow_visible')
    } else {
      btnR.classList.add('ribbon__arrow_visible')
    }

    if(scrollLeft==0) {
      btnL.classList.remove('ribbon__arrow_visible')
    } else {
      btnL.classList.add('ribbon__arrow_visible')
    }

  })

}

choiceCategory() {
let categoryes = this.elem.querySelectorAll('a');

categoryes.forEach(el => el.addEventListener('click', (event)=> {
event.preventDefault();

let id = event.target.getAttribute('data-id');
const customEvent = new CustomEvent("ribbon-select", 
        {detail: id,
        bubbles: true}
      );
 this.elem.dispatchEvent(customEvent);

categoryes.forEach(el=> el.classList.remove('ribbon__item_active'));
event.target.classList.add('ribbon__item_active');

})
  
);
}

}
