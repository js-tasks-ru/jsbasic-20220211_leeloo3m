import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  elem=null;
  constructor(products) {
    this.products = products;
    this.filters = {
    noNuts: true, // true/false
    vegeterianOnly: false, // true/false
    maxSpiciness: 3, // числа от 0 до 4
    category: 'soups' // уникальный идентификатор категории товара
    };
    this.elem = createElement(this.makeHTML());
    //this.updateFilter(this.filters);
    this.productCard();
    
  }
  makeHTML(){
    return `
    <div class="products-grid">
  <div class="products-grid__inner">
    <!--ВОТ ТУТ БУДУТ КАРТОЧКИ ТОВАРОВ-->
  </div>
</div>
    `
  }
  updateFilter(){
    
    let category = this.products.filter((item)=>item.category==`${this.filters.category}`);
    
    let maxSpiciness = this.products.filter((item)=>item.spiciness==`${this.filters.maxSpiciness}`);

    let vegetarian = this.products.filter((item)=>item.vegeterian==`${this.filters.vegeterianOnly}`);

    let noNuts = this.products.filter((item)=>item.nuts==`${this.filters.noNuts}`);
    console.log(noNuts)
   this.products=category;
   this.productCard();
  };
  productCard(){
    let a = `${this.products.map(item=>`<div class="card">
    <div class="card__top">
        <img src="/assets/images/products/${item.image}" class="card__image" alt="product">
        <span class="card__price">€${item.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${item.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
</div>`).join('')}`
    this.elem.querySelector('.products-grid__inner').innerHTML = a; 
  }

  

}