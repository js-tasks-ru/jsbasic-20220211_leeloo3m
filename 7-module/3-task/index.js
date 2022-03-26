export default class StepSlider {
  elem = null;
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.elem = document.createElement('div');
    this.elem.classList.add('slider');
    this.elem.innerHTML = this.makeHTML();
    
    this.span();
    this.changeVolume();
    
  }

  makeHTML() {
    return `
  <div class="slider__thumb">
    <span class="slider__value"></span>
  </div>
  <div class="slider__progress"></div>
  <div class="slider__steps">
  <span class="slider__step-active"></span>
  </div>
</div>
    `;
  }

  span() {
    let sliderSteps = this.elem.querySelector('.slider__steps');
    let spans = Array.from(sliderSteps.querySelectorAll('span')).length;
    let span = Array.from(sliderSteps.querySelectorAll('span'));
    
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

      let ss = this.elem.querySelector('.slider__steps').classList.add('slider__step-activ')
      let el = ss.children;
      for(let i of el) {
        i.innerHTML
      }
      
      
      
      console.log(this.value, this.elem)
      
      

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
  
}
