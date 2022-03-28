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
    //this.updateFilter();
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
     
    

    for(let i = 0; i<this.products.length; i++){
      
      for (const product in this.products[i]) {
        //console.log(this.products[i].name)
        if(this.products[i].category==this.filters.category){
          //continue;
        filteredProducts.push(this.products[i])}
        //console.log(product)
         
         if(this.products[i].nuts==this.filters.noNuts)
         filteredProducts.push(this.products[i])
        // continue;
         if(this.products[i].vegeterian==this.filters.vegeterianOnly)
         filteredProducts.push(this.products[i])
        // continue;
         if(this.products[i].spiciness==this.filters.maxSpiciness)
         filteredProducts.push(this.products[i])
        // continue;
         //console.log(this.products[i])
         //filteredProducts.push(this.products)

         
          
          }
          
      }
    
    //console.log(filteredProducts)
     this.products=filteredProducts;
     this.productCard()
    


   
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