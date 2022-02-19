
function highlight(table) {
 let status = table.rows(0).cells(3);

 for (let i = 0; i < table.rows.length; i++) {
   status = table.rows(i).cells(3);
   if (status.classList.contains('data-available="true"')) {
     status.classList.add('available');
   } else if (status.classList.contains('data-available="false"')) {
    status.classList.add('unavailable');
   } else {
    status.classList.add('hidden');
   }
 }
   return status;
}
