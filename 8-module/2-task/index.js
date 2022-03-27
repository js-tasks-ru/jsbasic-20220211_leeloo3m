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
    const filteredProducts = [];
     
    

    for(let i = 0; i<this.products.length; i++){
      
      for (const product in this.products) {
        //console.log()
         
          for (let fil in this.filters){
            if(fil=='category') {
              fil='category';
            } else if (fil=='noNuts'){
              fil='nuts';
            } else if (fil=='vegeterianOnly'){
              fil='vegeterian';
            } else if (fil=='maxSpiciness'){
              fil='spiciness';
            }
            //console.log(fil, this.filters[fil])
            
           if(product==fil) 
      
            continue;
            //if(this.products[product][fil]==this.filters[fil]) 
            console.log(this.products[product][fil]);
            //filteredProducts.push(this.products[i][fil])
            continue;

          
            
            
            //
          }
          
          }
          
      }
    
     // console.log(filteredProducts)
    


   
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