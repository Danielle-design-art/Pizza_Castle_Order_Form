console.log("Help Wanted ;)")

let myForm = document.getElementById("myForm");
let table = document.getElementById("orderTablet");
let fname  = document.getElementById("fname");
let pnumber = document.getElementById("pnumber");
let language = document.getElementById("language");

let pizza1 = document.getElementById("Cheese Pizza") ;
let pizza2 = document.getElementById("Supreme Pizza");
let pizza3 = document.getElementById("Meat Lovers");
let pizza4 = document.getElementById("Hawaiian pizza");
let pizza5 = document.getElementById("Buffalo Chicken");
let pizza6 = document.getElementById("Breakfast Pizza");
let specialInstructionsText = document.getElementById("specialInstructionsText");
let submitOrderButton = document.getElementById("submitOrderButton");

function makeThisWork (event) {
    event.preventDefault();

    let orderTablet = document.getElementById("orderTablet");
    let row = document.createElement("tr");
    let fname = document.createElement("td");
    let lname = document.createElement("td");
    let pnumber = document.createElement("td");
    let language = document.createElement("td");
    

    let pizza1 = document.createElement("td");
    let pizza2 = document.createElement("td");
    let pizza3 = document.createElement("td");
    let pizza4 = document.createElement("td");
    let pizza5 = document.createElement("td");
    let pizza6 = document.createElement("td");
    
    let specialInstructionsText = document.createElement("td");


let newRow = orderTablet.insertRow(-1);
newRow.insertCell(0).innerHTML =custName;
newRow.insertCell(1).innerHTML =specialInstructions;
newRow.insertCell(2).innerHTML =order;
newRow.insertCell(3).innerHTML =contactNumber;
newRow.insertCell(4).innerHTML =orderPreferrence;

FormData.reset();







    myForm.addEventListener("submit", )
  
}
 


