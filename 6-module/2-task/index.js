export default class ProductCard {
  elem;
  constructor(product) {
    this.name = product.name;
    this.price = product.price;
    this.category = product.category;
    this.image = product.image;
    this.id = product.id;
    this.elem = document.createElement('div');
    this.card();
    this.userEvent();
  }

  get elem() {
    return this.elem;
  }

  card() {
    let c = `<div class="card">
    <div class="card__top">
        <img src="/assets/images/products/${this.image}" class="card__image" alt="product">
        <span class="card__price">€${this.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${this.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
</div>`
    this.elem.innerHTML = c;


  }

  userEvent() {

    const btn = this.elem.querySelector('.card__button');
    btn.onclick = 'dispatch()';
    const dispatch = ()=>{
      const customEvent = new CustomEvent("product-add", 
        {detail: this.id,
        bubbles: true}
      );
      this.elem.dispatchEvent(customEvent);

    }
    

   
  }


}