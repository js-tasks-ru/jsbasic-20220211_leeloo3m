export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    
    this.cartIcon = cartIcon;
   
  }

  addProduct(product) {
    if(product==null||product.length==0||product==undefined){
     return
      }    
    let cartItem = {
      product: product,
      count: 1
    };
    let foundProduct = this.cartItems.some(item=>item.product.id==product.id);

     if(foundProduct==false){
      this.cartItems.push(cartItem);
    } else if(foundProduct==true) {
      let cartItem = this.cartItems.find(item=>item.product.id==product.id)
      cartItem.count++;
    };
   this.onProductUpdate(cartItem);
  }

  updateProductCount(productId, amount) {
    let cartItem = this.cartItems.find(cartItem=>{
       return cartItem.product.id==productId
    });
  console.log(productId)
        if(amount==1){
          cartItem.count++;
        } else if(amount==-1){
          cartItem.count--;
          
          if(cartItem.count==0){
            let i = this.cartItems.indexOf(cartItem);
            this.cartItems.splice(i, 1);
          } 
        }
   
   this.onProductUpdate(cartItem);
   
  }

  isEmpty() {
    
    if(this.cartItems.length==0) {
      return true;
    } else {
      return false;
    }
  }

  getTotalCount() {
      let totalCount = 0;
     this.cartItems.forEach(cartItem=>{
       return totalCount += cartItem.count;
     })
     return totalCount;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.cartItems.forEach(cartItem=>{ 
      return totalPrice += cartItem.count * cartItem.product.price;
    })
    return totalPrice;
  }

  onProductUpdate(cartItem) {
    this.cartIcon.update(this);
    

     
  }
}

