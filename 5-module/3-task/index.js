function initCarousel() {
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let carousel = document.querySelector('.carousel__inner');
  let offsetWidth = carousel.offsetWidth;
  let startPosition = 0;
  

  arrowLeft.addEventListener('click', () => {
    startPosition+=1;
    carousel.style.transform = 'translateX('+ (-offsetWidth * startPosition) + 'px)';
    buttons();
})

  arrowRight.addEventListener('click', () => {
    startPosition-=1;
    carousel.style.transform = 'translateX(' +(-offsetWidth * startPosition) + 'px)';
    buttons();
  })

  const buttons = () => {

    if(startPosition==3) {
    arrowLeft.style.display = 'none';
  } else {
    arrowLeft.style.display = '';
  }

  if(startPosition==0) {
    arrowRight.style.display = 'none';
  } else {
    arrowRight.style.display = '';
  }
  
}

buttons();


}
