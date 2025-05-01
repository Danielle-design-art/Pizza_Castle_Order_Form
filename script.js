console.log("Help Wanted ;)")

document.addEventListener('DOMContentLoaded',function ()  {

const button = document.getElementById('submitOrder');
const form =document.getElementById('myForm');
const tableBody= document.getElementById('oderTabconst');

form.addEventListener('submit', function (e) {


const myForm = document.getElementById("myForm").value;
const table = document.getElementById("orderTabconst").value;
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



const newRow = document.createElement('tr');
newRow.innerHTML = 
<td>${custName}</td>;
<td>specialInstructions</td>;
<td>order</td>;
<td>contactNumber</td>;
<td>orderPreferrence</td>


tableBody.append(newRow);

FormData.reset();


  
});
});