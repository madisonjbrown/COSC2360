/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Madison Brown
      Date:   9/15/24

      Filename: project03-01.js
*/
let menuItems = document.getElementsByClassName('menuItem');
for (let i=0; i < menuItems.length; i++ ) {
    menuItems[i].addEventListener('click', calcTotal);
}
function calcTotal() {
    let orderTotal = 0
    for (let i=0; i < menuItems.length; i++) {
        if (menuItems[i].checked) {
            orderTotal += Number(menuItems[i].value);
        } else {
            orderTotal += 0;
        }
    document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}}

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }