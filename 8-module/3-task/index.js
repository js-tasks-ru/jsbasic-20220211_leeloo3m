export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    
    this.cartIcon = cartIcon;
    //this.addProduct();
    //this.updateProductCount();
    //this.isEmpty();
    //this.getTotalCount();
    this.getTotalPrice();
  }

  addProduct(product) {
    if(product==null||product.length==0||product==undefined){
     return
      }

    let foundProduct = this.cartItems.some(item=>item.id==product.id);
    let cartItem = {
      product: product,
      count: 1
    };
    
     if(foundProduct==false){
      this.cartItems.push(cartItem);
    } else if(foundProduct==true) {
      let cartItem = this.cartItems.find(cart=>cart.id==product.id);
      cartItem.count++;
    };
    
   this.onProductUpdate(cartItem);
  }

  updateProductCount(productId, amount) {
    let cartItem = this.cartItems.find(cartItem=>
       cartItem.product.id==productId
      );
   
        if(amount==1){
          cartItem.count++;
        } else if(amount==-1){
          cartItem.count--;
          if(cartItem.count==0){
            let i = this.cartItems.indexOf(cartItem);
            this.cartItems.splice(i, 1);
          } 
        }
   // this.getTotalPrice();
   this.onProductUpdate(cartItem);
   // console.log(this.cartItems);
  }

  isEmpty() {
    // Возвращает true если корзина пустая и false если в корзине есть хотя бы один товар.
    if(this.cartItems.length==0) {
      return true;
    } else {
      return false;
    }
  }

  getTotalCount() {
    // Возвращает общее количество товаров в корзине. Обратите внимание, что один товар может быть добавлен несколько раз и это нужно учесть.
      let totalCount = 0;
     this.cartItems.forEach(cartItem=>{
       return totalCount+=cartItem.count;
     })
     //console.log(this.cartItems)
  }

  getTotalPrice() {
    //Возвращает стоимость всех товаров в корзине. Для этого нужно сложить все цены товаров с учетом количества каждого из них. Цену товара можно найти в свойстве price объекта товара.
    let totalPrice = 0;
  
    this.cartItems.forEach(cartItem=>{
      
      return totalPrice+=cartItem.count*cartItem.product.price;
    })
    
  }

  onProductUpdate(cartItem) {
   
    //console.log(totalPrice);
    console.log(this.cartItems)
     if(document.querySelector('body').classList.contains('is-modal-open')){
      let productId = cartItem.id;
      let modalBody = this.renderModal();
      let productCount = modalBody.querySelector(`[data-product-id="${productId}"] .cart-counter__count`);
      let productPrice = modalBody.querySelector(`[data-product-id="${productId}"] .cart-product__price`);
      let infoPrice = modalBody.querySelector(`.cart-buttons__info-price`);

      productCount.innerHTML = cartItem.count;
      productPrice.innerHTML = `€${cartItem.product.price.toFixed(2)}`;
      infoPrice.innerHTML = `€${this.getTotalPrice}`;

    } else {
      return
    }
    this.cartIcon.update(this);

  }
}

