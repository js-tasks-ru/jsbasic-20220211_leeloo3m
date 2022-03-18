import createElement from '../../assets/lib/create-element.js';

export default class Modal {

  constructor() {

  }
  open() {
    let body = document.querySelector('body');
    body.classList.add('is-modal-open');
    let conteiner = document.querySelector('.container');

    let modalWindow = createElement(`
    
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
    `)
    conteiner.append(modalWindow);


    let btnClose = document.querySelector('.modal__close');
    btnClose.addEventListener('click', () => {
      body.classList.remove('is-modal-open');
      let modal = document.querySelector('.modal');
      modal.remove();
      document.removeEventListener('keydown', handle);

    })

    function handle(e) {
      if (e.code == 'Escape') {
        body.classList.remove('is-modal-open');
        let modal = document.querySelector('.modal');
        modal.remove();
      }
    }
    document.addEventListener('keydown', handle);


  }

  setTitle(str) {
    let modalTitle = document.querySelector('.modal__title');
    modalTitle.innerHTML = str;
  }

  setBody(node) {
    let modalBody = document.querySelector('.modal__body');
    modalBody.innerHTML = "";
    modalBody.append(node);
  }

  close() {
    let body = document.querySelector('body');
    body.classList.remove('is-modal-open');
    let modal = document.querySelector('.modal');
    modal.remove();
    document.removeEventListener('keydown', handle);

  }

}
