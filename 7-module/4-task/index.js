export default class StepSlider {
  elem = null;
  constructor({ steps, value = 0 }) {
    this.elem = document.createElement('div');
    this.elem.classList.add('slider');
    this.steps = steps;
    this.value = value;
    this.makeHTML(); 
    this.span();
    this.dragndrop();
    this.changeVolume();
    
  }

  makeHTML() {
    let a = `
  <div class="slider__thumb">
    <span class="slider__value">0</span>
  </div>
  <div class="slider__progress"></div>
  <div class="slider__steps">  
  </div>
    `
    this.elem.innerHTML = a;   
  }

  span() {
    let sliderSteps = this.elem.querySelector('.slider__steps');
    let spans = Array.from(sliderSteps.querySelectorAll('span')).length;
    
     while (spans < this.steps) {
      sliderSteps.insertAdjacentHTML('afterbegin', "<span></span>");
      spans++;
    }
  }
  
  changeVolume() {
    
    this.elem.addEventListener('click', (event)=>{
      
      let left = event.clientX - this.elem.getBoundingClientRect().left;
      
      let leftRelative = left / this.elem.offsetWidth;
      
      let segments = this.steps - 1;
      let approximateValue = leftRelative * segments;
      this.value = Math.round(approximateValue);
      
      let sliderValue = this.elem.querySelector('.slider__value');
      sliderValue.innerHTML = this.value;
      let valuePercents = this.value / segments * 100;
      
      let sliderSteps = this.elem.querySelector('.slider__steps');
      let spans = Array.from(sliderSteps.querySelectorAll('span'));
      
      let span = spans[this.value];
      span.classList.add('slider__step-active');
      
      

      const customEvent = new CustomEvent('slider-change', { 
        detail: this.value, 
        bubbles: true 
      })
      this.elem.dispatchEvent(customEvent);
      
      
      let thumb = this.elem.querySelector('.slider__thumb');
      let progress = this.elem.querySelector('.slider__progress');
      thumb.style.left = `${valuePercents}%`;
      progress.style.width = `${valuePercents}%`;

     
          })
  }

  dragndrop(){
    let progress = this.elem.querySelector('.slider__progress');
    let thumb = this.elem.querySelector('.slider__thumb');

    thumb.ondragstart = (event) => {
      event.preventDefault()
    };

    thumb.addEventListener('pointerdown', ()=>{
      
      const onMove = (event) => {
        this.elem.classList.add('slider_dragging');
        let left = event.clientX - this.elem.getBoundingClientRect().left;
      
      let leftRelative = left / this.elem.offsetWidth;
      if (leftRelative < 0) {
        leftRelative = 0;
      }
      
      if (leftRelative > 1) {
        leftRelative = 1;
      }
      let leftPercents = leftRelative * 100;
      let segments = this.steps - 1;
      let approximateValue = leftRelative * segments;
      this.value = Math.round(approximateValue);
      
      let sliderValue = this.elem.querySelector('.slider__value');
      sliderValue.innerHTML = this.value;
     
      let thumb = this.elem.querySelector('.slider__thumb');
      let progress = this.elem.querySelector('.slider__progress');
      thumb.style.left = `${leftPercents}%`;
      progress.style.width = `${leftPercents}%`;
      };
    

    document.addEventListener('pointermove', onMove);

    document.addEventListener('pointerup', ()=>{
      const customEvent = new CustomEvent('slider-change', { 
        detail: this.value, 
        bubbles: true 
      })
      this.elem.dispatchEvent(customEvent);

      document.removeEventListener('pointermove', onMove);
    }, {once: true});
  })   
  };

  }


