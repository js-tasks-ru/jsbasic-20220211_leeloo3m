import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  elem;
  constructor(slides) {
    this.slides = slides;
    this.elem = document.createElement('div');
    this.elem.classList.add('carousel__inner');
    this.slide();
    this.initCarousel();
    this.userEvent();


    console.log(this.elem);



  }

  get elem() {
    return this.elem;
  }


  slide() {

    let penangShrimp = `
      <div class="carousel__slide" data-id="penang-shrimp">
  <img src="/assets/images/carousel/${this.slides[0].image}" class="carousel__img" alt="slide">
  <div class="carousel__caption">
    <span class="carousel__price">€${this.slides[0].price.toFixed(2)}</span>
    <div class="carousel__title">${this.slides[0].name}</div>
    <button type="button" class="carousel__button">
      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
    </button>
  </div>
</div>`
    this.elem.innerHTML = penangShrimp;
   

    let chickenCashew = `
    <div class="carousel__slide" data-id="chicken-cashew">
    <img src="/assets/images/carousel/${this.slides[1].image}" class="carousel__img" alt="slide">
    <div class="carousel__caption">
      <span class="carousel__price">€${this.slides[1].price.toFixed(2)}</span>
      <div class="carousel__title">${this.slides[1].name}</div>
      <button type="button" class="carousel__button">
        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
      </button>
    </div>
  </div>`
    this.elem.innerHTML += chickenCashew;

    let redCurryVeggies = `
      <div class="carousel__slide" data-id="red-curry-veggies">
      <img src="/assets/images/carousel/${this.slides[2].image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">€${this.slides[2].price.toFixed(2)}</span>
        <div class="carousel__title">${this.slides[2].name}</div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>`
    this.elem.innerHTML += redCurryVeggies;

    let chickenSpringrolls = `
        <div class="carousel__slide" data-id="chicken-springrolls">
        <img src="/assets/images/carousel/${this.slides[3].image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${this.slides[3].price.toFixed(2)}</span>
          <div class="carousel__title">${this.slides[3].name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>`
    this.elem.innerHTML += chickenSpringrolls;

 

  }

  initCarousel() {

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