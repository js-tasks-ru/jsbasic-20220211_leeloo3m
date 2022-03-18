import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  elem=null;
  constructor(slides) {
    this.slides = slides;
    this.elem = document.createElement('div');
    this.elem.classList.add('carousel');
    this.arrow();
    this.slide();
    this.initCarousel();
    this.userEvent();
   

  }

  get elem() {
    return this.elem;
  }

  arrow() {
    let a = ` <div class="carousel__arrow carousel__arrow_right">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </div>
  <div class="carousel__arrow carousel__arrow_left">
    <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
  </div>`
  this.elem.innerHTML = a;

  }

  slide() {
    let s = `<div class='carousel__inner'>
     ${this.slides.map(item=>`
     <div class="carousel__slide" data-id="${item.id}">
     <img src="/assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
     <div class="carousel__caption">
       <span class="carousel__price">€${item.price.toFixed(2)}</span>
       <div class="carousel__title">${item.name}</div>
       <button type="button" class="carousel__button">
         <img src="/assets/images/icons/plus-icon.svg" alt="icon">
       </button>
     </div>
   </div>`).join('')}
    </div>`
  
    this.elem.innerHTML += s;
  
  }

  initCarousel() {
    let arrowLeft = this.elem.querySelector('.carousel__arrow_left');
    let arrowRight = this.elem.querySelector('.carousel__arrow_right');
    let carousel = this.elem.querySelector('.carousel__inner');
    
  
    let startPosition = 0;

    arrowLeft.addEventListener('click', () => {
      let offsetWidth = carousel.offsetWidth;
      startPosition-=1;
      carousel.style.transform = 'translateX(' +(-offsetWidth * startPosition) + 'px)';
      buttons();
  })
  
    arrowRight.addEventListener('click', () => {
      let offsetWidth = carousel.offsetWidth;
      startPosition+=1;
      carousel.style.transform = 'translateX(' +(-offsetWidth * startPosition) + 'px)';
      buttons();
    })

    const buttons = () => {
      startPosition==0 ? arrowLeft.style.display = 'none' :  arrowLeft.style.display = '';
  
      startPosition==this.slides.length-1 ? arrowRight.style.display = 'none' : arrowRight.style.display = '';
    }
  
   buttons();

  }

  userEvent() {

    let btn = this.elem.querySelectorAll('.carousel__button');
    
    btn.forEach( el=> el.addEventListener('click', (event)=>{
     
     let id = event.target.parentNode.parentNode.parentNode.getAttribute('data-id');
     
     
      const customEvent = new CustomEvent("product-add", 
        {detail: id,
        bubbles: true}
      );
      this.elem.dispatchEvent(customEvent);


    }))
  }  
}