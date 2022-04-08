import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  elem=null;
  constructor(products) {
    this.products = products;
    this.filters = {
     
    };
    this.elem = createElement(`
    <div class="products-grid">
  <div class="products-grid__inner">
    <!--ВОТ ТУТ БУДУТ КАРТОЧКИ ТОВАРОВ-->
  </div>
</div>
    `);
    this.productsCard();
    //this.updateFilter();
    
    
  }

  productsCard(){
    let productGridInner = this.elem.querySelector('.products-grid__inner');
    let productCard = this.products.map(item=>new ProductCard(item) ) ;
   
    for(let i=0; i<productCard.length; i++){
      productGridInner.append(productCard[i].elem)
    }
    
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
    
      let productGridInner = this.elem.querySelector('.products-grid__inner');
      let productCard = filteredProducts.map(item => new ProductCard(item));
      productGridInner.innerHTML = "";
      for (let i = 0; i < productCard.length; i++) {
        productGridInner.append(productCard[i].elem ) 
      }
      }


}