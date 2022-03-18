export default class StepSlider {
  elem = null;
  constructor({ steps, value = 0 }) {
    this.elem = document.createElement('div');
    this.elem.classList.add('slider');
    this.makeHTML();
    this.steps = steps;
    this.value = value;
  }

  makeHTML() {
    let a = `
    <div class="slider__thumb" style="left: 50%;">
      <span class="slider__value">2</span>
    </div>

    <!--Заполненная часть слайдера-->
    <div class="slider__progress" style="width: 50%;"></div>

    <!--Шаги слайдера-->
    <div class="slider__steps">
    for(let i = 0; i<steps; i++) {
      let span = createElement('span');
      let sliderSteps = this.elem.querySelector('.slider__steps');
      
    }
      <span></span>
      <span></span>
      <span class="slider__step-active"></span>
      <span></span>
      <span></span>
    </div>
  </div>

</div>
    `
    this.elem.innerHTML = a;
  }
}
