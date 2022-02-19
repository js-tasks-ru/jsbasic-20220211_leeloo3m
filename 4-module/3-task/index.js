const { clearLine } = require("inquirer/lib/utils/readline");

function highlight(table) {
  let rows = table.rows;
  let cells = table.cells;
  let cellStatus = rows[0].cells[3];

  for(let i=0; i<rows.length; i++) {
    cellStatus=rows[i].cells[3];
    if (cellStatus.dataset.available=='true') {
      rows[i].className.add('available');
    } else if (cellStatus.dataset.available=='false') {
      rows[i].className.add('unavailable');
    } else {
      rows[i].setAttribute('hidden');
    }
  }

}
