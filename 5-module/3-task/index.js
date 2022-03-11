function initCarousel() {
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let carousel = document.querySelector('.carousel__inner');
  let offsetWidth = carousel.offsetWidth;
  let startPosition = 0;
  

  arrowLeft.addEventListener('click', () => {
    startPosition-=1;
    carousel.style.transform = 'translateX(' +(-offsetWidth * startPosition) + 'px)';
    buttons();
})

  arrowRight.addEventListener('click', () => {
    startPosition+=1;
    carousel.style.transform = 'translateX(' +(-offsetWidth * startPosition) + 'px)';
    buttons();
  })

  const buttons = () => {
    startPosition==0 ? arrowLeft.style.display = 'none' :  arrowLeft.style.display = '';

    startPosition==3 ? arrowRight.style.display = 'none' : arrowRight.style.display = '';
  }

 buttons();


}
