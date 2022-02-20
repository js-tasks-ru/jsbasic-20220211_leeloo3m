function makeDiagonalRed(table) {
  let td = table.rows[0].cells[0].style.backgroundColor = 'red';
  for (let i = 0; i < table.rows.length; i++) {
    td = table.rows[i].cells[i].style.backgroundColor = 'red';

  }

  return td;
}
