export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    
    this.cartIcon = cartIcon;
    this.addProduct();
    this.updateProductCount();
    this.isEmpty();
    this.getTotalCount();
    this.getTotalPrice();
  }

  addProduct(product) {
    let foundProduct = this.cartItems.some(item=>item.id==product.id);
    let obj = {};
    obj.product=product;
    obj.count = 1;

    if(product==null||product.length==0||product==undefined){
      try {
        this.addProduct();
      }
      catch (e) {
        //error
      }
      return;
    }else if(foundProduct==false){
      this.cartItems.push(obj);
    } else if(foundProduct==true) {
      let cart = this.cartItems.find(cart=>cart.id==product.id);
      cart.count++;
    }
    
   this.onProductUpdate(this.cartItems);
  }

  updateProductCount(productId, amount) {
   
    this.cartItems.forEach(cart=>{
      if(cart.product.id==productId){
        if(amount==1){
          cart.count++;

        } else if(amount==-1){
          cart.count--;
          if(cart.count==0){
            let i = this.cartItems.indexOf(cart);
            this.cartItems.splice(i, 1);
          }
        }
      }
      
    })
    this.onProductUpdate(this.cartItems);
    //console.log(this.cartItems);
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
     this.cartItems.forEach(cart=>{
       return totalCount+=cart.count;
     })
     //console.log(this.cartItems)
  }

  getTotalPrice() {
    //Возвращает стоимость всех товаров в корзине. Для этого нужно сложить все цены товаров с учетом количества каждого из них. Цену товара можно найти в свойстве price объекта товара.
    let totalPrice = 0;
    this.cartItems.forEach(cart=>{
      return totalPrice+=cart.count*cart.product.price;
    })
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

