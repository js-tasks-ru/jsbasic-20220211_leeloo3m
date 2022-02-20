

function highlight(table) {
  let rows = table.rows;
  let cells = table.cells;
  let cellStatus = rows[0].cells[3];

  for(let i=0; i<rows.length; i++) {
    cellStatus=rows[i].cells[3];
    if (cellStatus.dataset.available=='true') {
      rows[i].classList.add('available');
    } else if (cellStatus.dataset.available=='false') {
      rows[i].classList.add('unavailable');
    } else {
      rows[i].setAttribute('hidden', 'true');
    }
  }

  let gender = rows[0].cells[2];

  for(let i=0; i<rows.length; i++) {
    gender=rows[i].cells[2];
    if (gender.innerHTML=='m') {
      rows[i].classList.add('male');
    } else {
      rows[i].classList.add('female');
    }
  }

  let age = rows[0].cells[1];

  for(let i=0; i<rows.length; i++) {
    age=rows[i].cells[1];
    if (age.innerHTML < 18) {
      rows[i].style="text-decoration: line-through";
    } 
  }

}
