/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Madison Brown
      Date:   9/7/24

      Filename: project02-04.js
 */
 
CHICKEN_PRICE = 10.95
HALIBUT_PRICE = 13.95
BURGER_PRICE = 9.95
SALMON_PRICE = 18.95
SALAD_PRICE = 7.95
SALES_TAX = 0.07

document.getElementById("chicken").onclick = calcTotal;
document.getElementById("halibut").onclick = calcTotal;
document.getElementById("burger").onclick = calcTotal;
document.getElementById("salmon").onclick = calcTotal;
document.getElementById("salad").onclick = calcTotal;
function calcTotal(){
    let cost = 0
    let buyChicken = document.getElementById("chicken").checked;
    let buyHalibut = document.getElementById("halibut").checked; 
    let buyBurger = document.getElementById("burger").checked; 
    let buySalmon = document.getElementById("salmon").checked;
    let buySalad = document.getElementById("salad").checked;
    buyChicken ? cost += CHICKEN_PRICE : cost += 0;
    buyHalibut ? cost += HALIBUT_PRICE : cost += 0;
    buyBurger ? cost += BURGER_PRICE : cost += 0;
    buySalmon ? cost += SALMON_PRICE : cost += 0;
    buySalad ? cost += SALAD_PRICE : cost += 0;
    document.getElementById("foodTotal").innerHTML = formatCurrency(cost);
    let tax = cost * SALES_TAX;
    document.getElementById("foodTax").innerHTML = formatCurrency(tax);
    let totalCost = cost + tax;
    document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}



// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
