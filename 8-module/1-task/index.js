import createElement from '../../assets/lib/create-element.js';

export default class CartIcon {
  constructor() {
    this.render();

    this.addEventListeners();
  }

  render() {
    this.elem = createElement('<div class="cart-icon"></div>');
  }

  update(cart) {
    if (!cart.isEmpty()) {
      this.elem.classList.add('cart-icon_visible');

      this.elem.innerHTML = `
        <div class="cart-icon__inner">
          <span class="cart-icon__count">${cart.getTotalCount()}</span>
          <span class="cart-icon__price">€${cart.getTotalPrice().toFixed(2)}</span>
        </div>`;

      this.updatePosition();

      this.elem.classList.add('shake');
      this.elem.addEventListener('transitionend', () => {
        this.elem.classList.remove('shake');
      }, {once: true});

    } else {
      this.elem.classList.remove('cart-icon_visible');
    }
  }

  addEventListeners() {
    document.addEventListener('scroll', () => this.updatePosition());
    window.addEventListener('resize', () => this.updatePosition());
  }

  updatePosition() {
    // убеждаемся что cart-icon есть на странице
    let cartIcon =document.querySelector('.cart-icon');
    let isVisible = cartIcon.offsetWidth > 0||cartIcon.offsetHeight > 0;
    if(isVisible==false) {
      return
    }
    //ширина окна браузера
    let widthWindow = document.documentElement.clientWidth;
    if(widthWindow<=767) {
      return
    }
    //контейнер
    let cont = document.querySelector('div.container');//988
    // расстояние от верха корзины до окна браузера
    let cartTop = cartIcon.getBoundingClientRect().top;
    //сколько проскролили вниз
    let scrollTop = document.documentElement.scrollTop;
    //расстояние от верха контейнера до окна браузера
    let contTop = cont.getBoundingClientRect().top;
    //расстояние от низа корзины до верха браузера
    let cartBottom = cartIcon.getBoundingClientRect().bottom;
    //растояние до правого края контейнера
    let contRight = cont.getBoundingClientRect().right;
    //расстояние до левого края корзины
    let cartLeft = cartIcon.getBoundingClientRect().left;
    //расстояние между ними
    let b = cartLeft-contRight;
       
    if (scrollTop>cartTop) {
      cartIcon.style.position = 'fixed';
      if(contTop<cartBottom) {
        cartIcon.style.top = 50 + 'px';
        cartIcon.style.right = 18.56 + 'px'; 
      }

    } else if (scrollTop<cartTop) {
      cartIcon.style.position = 'absolute';
    }
   
       
  }
}
