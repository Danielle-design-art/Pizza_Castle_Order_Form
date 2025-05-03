console.log("Help Wanted ;)")

document.addEventListener('DOMContentLoaded',function ()  {


    
const button = document.getElementById('submitOrderButton');
const form =document.getElementById('myForm');


form.addEventListener('submit', function (e) {


const myForm = document.getElementById("myForm").value;
const table = document.getElementById("orderTablet").value;
const fname1  = document.getElementById("fname").value;
const pnumber1 = document.getElementById("pnumber").value;
const language1 = document.getElementById("language");
const specialInstructionsText = document.getElementById("specialInstructionsText").value;
const submitOrderButton = document.getElementById("submitOrderButton").value;

const pizza1 = document.createElement("Cheese Pizza").value;
const pizza2 = document.createElement("Supreme Pizza").value;
const pizza3 = document.createElement("Meat Lovers").value;
const pizza4 = document.createElement("Hawaiian pizza").value;
const pizza5 = document.createElement("Buffalo Chicken").value;
const pizza6 = document.createElement("Breakfast Pizza").value;
console.log(getElementById)

function addRow(DOMContentLoaded) {
  const tableBody = document.getElementById('orderTablet');
  const newRow = table.insertRow(0);
  console.log('DOMContentLoaded', "newRow");
 
  const cell1 = newRow.insertCell(1);
  cell1.textContent = 'New Row, Cell 1';

  const cell2 = newRow.insertCell(2);
  cell2.textContent = 'New Row, Cell 2';

  const checkboxCell = row.insertCell(3);
  cell3.checkboxCell = 'New Row, Cell 3';

  const cell4 = newRow.insertCell(4);
  cell4.textContent = 'New Row, Cell 4';



 
}

tableBody.append(newRow);

FormData.reset();


  
});
});