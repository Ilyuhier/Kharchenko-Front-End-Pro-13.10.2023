const table = document.createElement('table');
const body = document.querySelector('body');
body.appendChild(table);
let counter = 1;
for(let i = 0; i < 10; i++){
  const tr = document.createElement('tr');
  table.appendChild(tr);
  for(let i = 0; i < 10; i++){
    const td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = counter;
    counter ++;
  }
}