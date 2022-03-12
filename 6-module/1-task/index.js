/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
 export default class UserTable {
  elem;
 constructor(rows) {
    this.rows = rows;
    this.elem = document.createElement('table');
    this.table();

    
  }
  get elem() {
    return this.elem;
  }

  table() {
    let t = 
   `<thead>
    <tr>
        <th>name</th>
        <th>age</th>
        <th>salary</th>
        <th>sity</th>
        <th></th>
    </tr>
    </thead>
    <tbody` + this.rows.map(item => `
    <tr>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>${item.salary}</td>
        <td>${item.city}</td>
        <td><button data-action = 'remove'>X</button></td>
    </tr>
    `).join('') + `</tbody`;

    this.elem.innerHTML = t;

    const buttons  = this.elem.querySelectorAll('button');
    for (let button of buttons) {
      button.addEventListener('click', (event)=>{
        const row = event.target.parentNode.parentNode;
        
        row.remove();

      })
    }
   
    
  }

}
