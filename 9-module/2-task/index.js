import Carousel from '../../6-module/3-task/index.js';
import slides from '../../6-module/3-task/slides.js';

import RibbonMenu from '../../7-module/1-task/index.js';
import categories from '../../7-module/1-task/categories.js';

import StepSlider from '../../7-module/4-task/index.js';
import ProductsGrid from '../../8-module/2-task/index.js';

import CartIcon from '../../8-module/1-task/index.js';
import Cart from '../../8-module/4-task/index.js';


export default class Main {

  constructor() {
  }

  async render() {
   let carouselHolder = document.querySelector(`[data-carousel-holder]`);
   let carousel = new Carousel(slides);
   carouselHolder.append(carousel.elem);

   let ribbonHolder =  document.querySelector(`[data-ribbon-holder]`);
   let ribbon = new RibbonMenu(categories);
   ribbonHolder.append(ribbon.elem);

   let sliderHolder = document.querySelector(`[data-slider-holder]`);
   
   let slider = new StepSlider({
     steps: 5
   });
   
   sliderHolder.append(slider.elem);
   

   let cartIconHolder = document.querySelector(`[data-cart-icon-holder]`);
   let cartIcon = new CartIcon();
   cartIconHolder.append(cartIcon.elem);

   let cart = new Cart(cartIcon);
   let result = await fetch('products.json');
   let productArr = await result.json();
   let productGridHolder = document.querySelector(`[data-products-grid-holder]`);
   
   let productGrid = new ProductsGrid(productArr);
   productGridHolder.append(productGrid.elem);

   productGrid.updateFilter({
    noNuts: document.getElementById('nuts-checkbox').checked,
    vegeterianOnly: document.getElementById('vegeterian-checkbox').checked,
    maxSpiciness: slider.value,
    category: ribbon.value
  });

  let body = document.querySelector('body');
  body.addEventListener('product-add', (event)=>{
    
    let product = productArr.find(item=>item.id==event.detail)
    cart.addProduct(product);
  })
  

  slider.elem.addEventListener('slider-change', (event)=>{
    productGrid.updateFilter({
      
      maxSpiciness: `${event.detail}`
    });
  });

  ribbon.elem.addEventListener('ribbon-select', (event)=>{
    console.log(event.detail)
    productGrid.updateFilter({
      
      category: `${event.detail}`
    });
  });

  let nutsCheckbox = document.querySelector('#nuts-checkbox');
  nutsCheckbox.addEventListener('change', (event)=>{
    if(event.currentTarget.checked){
      productGrid.updateFilter({
        noNuts: true
      });

    } else {
      productGrid.updateFilter({
        noNuts: false
      });
    }
    
  });

  let vegeterianCheckbox = document.querySelector('#vegeterian-checkbox');
  vegeterianCheckbox.addEventListener('change', (event)=>{
    if(event.currentTarget.checked){
      productGrid.updateFilter({
        vegeterianOnly: true
      });

    } else {
      productGrid.updateFilter({
        vegeterianOnly: false
      });
    }
  })
  
   



  }
}
