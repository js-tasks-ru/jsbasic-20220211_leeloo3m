import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  elem=null;
  constructor(products) {
    this.products = products;
    this.filters = {
     
    };
    this.elem = createElement(this.makeHTML());
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
  updateFilter(filters){
    
    this.filters = Object.assign(this.filters, filters);
    let filteredProducts = [];
  
      for (let product in this.products) {
       
        if(this.filters.noNuts&&this.products[product].nuts)
         { continue;}
         
        if(this.filters.vegeterianOnly&&!this.products[product].vegeterian)
        { continue;}
        
        if(this.filters.maxSpiciness!==undefined&&this.products[product].spiciness>this.filters.maxSpiciness)
        { continue;}
        
        if(this.filters.category&&this.products[product].category!=this.filters.category)
        { continue;}
        
        filteredProducts.push(this.products[product]);

      }
    
      let a = `${filteredProducts.map(item=>`<div class="card">
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