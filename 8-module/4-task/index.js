import createElement from '../../assets/lib/create-element.js';
import escapeHtml from '../../assets/lib/escape-html.js';

import Modal from '../../7-module/2-task/index.js';

export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
   // this.onProductUpdate();
    this.addEventListeners();
    
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
    

        if(amount==1){
          cartItem.count++;
        } else if(amount==-1){
          cartItem.count--;
          if(cartItem.count==0){
            let i = this.cartItems.indexOf(cartItem);
            
            this.cartItems.splice(i, 1);
           
            //console.log(this.cartItems)
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
     this.cartItems.forEach(cart=>{
       return totalCount+=cart.count;
     })
     return totalCount;
     //console.log(this.cartItems)
  }

  getTotalPrice() {
    
     let totalPrice = 0;
     this.cartItems.forEach(cart=>{
       return totalPrice+=cart.count*cart.product.price;
     })
    return totalPrice;
  }

  renderProduct(product, count) {
    return createElement(`
    <div class="cart-product" data-product-id="${
      product.id
    }">
      <div class="cart-product__img">
        <img src="/assets/images/products/${product.image}" alt="product">
      </div>
      <div class="cart-product__info">
        <div class="cart-product__title">${escapeHtml(product.name)}</div>
        <div class="cart-product__price-wrap">
          <div class="cart-counter">
            <button type="button" class="cart-counter__button cart-counter__button_minus">
              <img src="/assets/images/icons/square-minus-icon.svg" alt="minus">
            </button>
            <span class="cart-counter__count">${count}</span>
            <button type="button" class="cart-counter__button cart-counter__button_plus">
              <img src="/assets/images/icons/square-plus-icon.svg" alt="plus">
            </button>
          </div>
          <div class="cart-product__price">€${product.price.toFixed(2)}</div>
        </div>
      </div>
    </div>`);
  }

  renderOrderForm() {
    return createElement(`<form class="cart-form">
      <h5 class="cart-form__title">Delivery</h5>
      <div class="cart-form__group cart-form__group_row">
        <input name="name" type="text" class="cart-form__input" placeholder="Name" required value="Santa Claus">
        <input name="email" type="email" class="cart-form__input" placeholder="Email" required value="john@gmail.com">
        <input name="tel" type="tel" class="cart-form__input" placeholder="Phone" required value="+1234567">
      </div>
      <div class="cart-form__group">
        <input name="address" type="text" class="cart-form__input" placeholder="Address" required value="North, Lapland, Snow Home">
      </div>
      <div class="cart-buttons">
        <div class="cart-buttons__buttons btn-group">
          <div class="cart-buttons__info">
            <span class="cart-buttons__info-text">total</span>
            <span class="cart-buttons__info-price">€${this.getTotalPrice().toFixed(2)}</span>
          </div>
          <button type="submit" class="cart-buttons__button btn-group__button button">order</button>
        </div>
      </div>
    </form>`);
  }

  renderModal() {

  let modal = new Modal();
  
  modal.setTitle('Your order');  
  
  
  let node = createElement(`<div></div`);
  for(let i = 0; i<this.cartItems.length; i++){
    node.append(this.renderProduct(this.cartItems[i].product, this.cartItems[i].count));
  }
  
  node.append(this.renderOrderForm())
  modal.setBody(node);
  modal.open();
  let btnM = document.querySelectorAll('.cart-counter__button_minus');
  let btnP = document.querySelectorAll('.cart-counter__button_plus');

  btnM.forEach(btnMinus=> btnMinus.addEventListener('click', (event)=>{
    let productId = btnMinus.closest('[data-product-id]').dataset.productId;
    //console.log(productId)
    let amount = -1;
    this.updateProductCount(productId, amount);
    

   }));

  btnP.forEach(btnPlus=> btnPlus.addEventListener('click', (event)=>{
    
    let productId =  btnPlus.closest('[data-product-id]').dataset.productId;
    let amount = 1;
    this.updateProductCount(productId, amount);
  }));

   let form =  document.querySelector('.cart-form');
   
   form.addEventListener('submit', this.onSubmit);
  
  }

  onProductUpdate(cartItem) {
    this.cartIcon.update(this);
    if(document.querySelector('body').classList.contains('is-modal-open')){
      let productId = cartItem.product.id;
      let modalBody = document.querySelector('.modal__body');
      
      let productCount = modalBody.querySelector(`[data-product-id="${productId}"] .cart-counter__count`);
      
      let productPrice = modalBody.querySelector(`[data-product-id="${productId}"] .cart-product__price`);
      let infoPrice = modalBody.querySelector(`.cart-buttons__info-price`);

      productCount.innerHTML = cartItem.count;

      if(cartItem.count==0){
        document.querySelector(`[data-product-id="${productId}"]`).remove()
      }
   
      productPrice.innerHTML = `€${cartItem.product.price.toFixed(2)}`;
      infoPrice.innerHTML = `€${this.getTotalPrice().toFixed(2)}`;
      let fullCount = this.getTotalCount();
     
      if(fullCount==0){
        
        let body = document.querySelector('body');
        body.classList.remove('is-modal-open');
        let modal = document.querySelector('.modal');
        if (!modal) {
          return
        }
        modal.remove();
      }

    } 
  }
  onSubmit=(event)=>{
    event.preventDefault();
    document.querySelector('button[type="submit"]').classList.add('is-loading');
    let form = document.querySelector('.cart-form');
    fetch("https://httpbin.org/post", {
      method: "POST",
      body: new FormData(form)
      
    })
   .then(response=>{
    if(response.ok) {
      document.querySelector('.modal__title').textContent= 'Success!';
      this.cartItems.splice(0, this.cartItems.length);
      document.querySelector('.modal__body').innerHTML = '';
      let node = createElement(`
        <div class="modal__body-inner">
        <p>
          Order successful! Your order is being cooked :) <br>
          We’ll notify you about delivery time shortly.<br>
          <img src="/assets/images/delivery.gif">
        </p>
      </div>
        `);
      document.querySelector('.modal__body').append(node);
        

    }

   }) 
  }

 

  addEventListeners() {
    this.cartIcon.elem.onclick = () => this.renderModal();
  
  }
}

