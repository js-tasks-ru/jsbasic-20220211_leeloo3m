import createElement from '../../assets/lib/create-element.js';

export default class Modal {
modalWindow;

  constructor() {

   this.modalWindow = createElement(`
    
        <div class="modal">
          <div class="modal__overlay"></div>
          <div class="modal__inner">
            <div class="modal__header">        
              <button type="button" class="modal__close">
                <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
              </button>
              <h3 class="modal__title">        
              </h3>
            </div>
            <div class="modal__body">       
            </div>
          </div>
        </div>
      </div>
    `);
    
    
   
    this.btnClose();
  }
  
  
  open() {
  
    let body = document.querySelector('body');
    body.classList.add('is-modal-open');
    body.append(this.modalWindow);
    
    document.addEventListener('keydown', this.handle);
    
  }
  setTitle(str) {
    let modalTitle = this.modalWindow.querySelector('.modal__title');
    modalTitle.innerHTML = str;
  }

  setBody(node) {
    let modalBody = this.modalWindow.querySelector('.modal__body');
    modalBody.innerHTML = "";
    modalBody.append(node);
  }
  
    handle(e) {
      if (e.code === 'Escape') {
        let body = document.querySelector('body');
        body.classList.remove('is-modal-open');
        let modal = document.querySelector('.modal');
        if(!modal) {
          return
        }
        modal.remove();
      }
  }
  btnClose() {
    let btnClose = this.modalWindow.querySelector('.modal__close');
    btnClose.addEventListener('click', () => {
      let body = document.querySelector('body');
      body.classList.remove('is-modal-open');
      let modal = document.querySelector('.modal');
      if(!modal) {
        return
      }
      modal.remove();
      document.removeEventListener('keydown', this.handle);

    })
  }
  close() {
    let body = document.querySelector('body');
    body.classList.remove('is-modal-open');
    let modal = document.querySelector('.modal');
    if(!modal) {
      return
    }
    modal.remove();
    document.removeEventListener('keydown', this.handle);

  }

}
