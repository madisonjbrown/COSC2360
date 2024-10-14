"use strict";
/*    JavaScript 7th Edition
      Midterm 
      Midterm Project

      Project to validate a form used for setting up a new account
      Author: Madison Brown
      Date:   10/12/24

      Filename: midternproject.js
*/

// Declare document.getElementById variables
let small = document.getElementById("small");
let medium = document.getElementById("medium");
let large = document.getElementById("large");
let neapolitan = document.getElementById("neapolitan");
let newYork = document.getElementById("newYork");
let chicago = document.getElementById("chicago");
let stLouis = document.getElementById("stLouis");
let cheese = document.getElementById("cheese");
let pepperoni = document.getElementById("pepperoni");
let sausage = document.getElementById("sausage");
let pineapple = document.getElementById("pineapple");
let jalapenos = document.getElementById("jalapenos");
let olives = document.getElementById("olives");
let bacon = document.getElementById("bacon");
let onion = document.getElementById("onion");
let mushrooms = document.getElementById("mushrooms");
let ham = document.getElementById("ham");
let chicken = document.getElementById("chicken");
let bbqSauce = document.getElementById("bbqSauce");
let bellPeppers = document.getElementById("bellPeppers");
let basil = document.getElementById("basil");
let extraCheese = document.getElementById("extraCheese");
let card = document.getElementById("card");
let cash = document.getElementById("cash");
let applePay = document.getElementById("applePay");
let order = document.getElementById("button");
let form1 = document.getElementById("pizzaSize");
let form2 = document.getElementById("crustType");
let form3 = document.getElementById("toppingList");
let form4 = document.getElementById("paymentType");
// Create validitity
let sizeB = [small, medium, large];
let crustB = [neapolitan, newYork, chicago, stLouis];
let toppingsB = document.getElementsByName("toppings");
let paymentB = [card, cash, applePay];
let sizeS = false;
let crustS = false;
let toppingsS = false;
let paymentS = false;
let size = ' ';
let crust = ' ';
let toppingList = ' ';
let paymentMethod = ' ';

order.onclick = function() {
    for (let i = 0; i< sizeB.length; i++) {
        if (sizeB[i].checked) {
            size += sizeB[i].value;
            sizeS = true;
        } else {
            small.setCustomValidity(" ");
        }
    }
    if (sizeS === false) {
        window.alert("Please select a size then confirm again.");
    }
        for (let i = 0; i < crustB.length; i++) {
            if (crustB[i].checked) {
                crustS = true;
                crust = crustB[i].value;
            } else {
                neapolitan.setCustomValidity(" ");
            }
        }
        if (crustS === false) {
            window.alert("Please select a crust type then confirm again.");
        }
        for (let i = 0; i < toppingsB.length; i++) {
            if (toppingsB[i].checked) {
                toppingsS = true;
                toppingList += toppingsB[i] + ",";
            } else {
                cheese.setCustomValidity(" ");
            }
        }
        if(toppingsS === false) {
            window.alert("Plese select a topping then confrim again.");
        }


        for (let i = 0; i < paymentB.length; i++) {
            if (paymentB[i].checked) {
                paymentS = true;
                paymentMethod += paymentB[i];
            } else {
                card.setCustomValidity(" ");
            }
        }

        if (paymentS === false) {
            window.alert("Please select a payment method then confrim again.");
        }
        if (sizeS === true) {
            if (crustS === true) {
                if(toppingsS === true) {
                    if (paymentS === true) {
                        window.alert("The order was submitted. Thank you for ordering with the Crust & Crumb pizzeria.")
                    }
                }
            }
        }

    }       
  
// Add funciton with all functions

// Determine crust type
/* function crustCheck() {
    if (neapolitan.checked) {
        crust += "Neapolitan style crust";
    } else if (newYork.checked) {
        crust += "New York style crust";
    } else if (chicago.checked) {
        crust += "Chicago style crust";
    } else if (stLouis.checked) {
        crust += "St. Louis style crust";
    } else {
        neapolitan.setCustomValidity("Please select a crust type for your pizza.");
    }
}

// Determine selected toppings
function toppingCheck() {
    if (pepperoni.checked) {
        toppings += " ,pepperoni";
    } else if (sausage.checked) {
        toppings += " ,sausage";
    } else if (pineapple.checked) {
        toppings += " ,pineapple";
    } else if (jalapenos.checked) {
        toppings += " ,jalapenos";
    } else if (olives.checked) {
        toppings += " ,olives";
    } else if (bacon) {
        toppings += " ,bacon";
    } else if (onion.checked) {
        toppings += " ,onion";
    } else if (mushrooms.checked) {
        toppings += " ,mushrooms";
    } else if (ham.checked) {
        toppings += " ,ham";
    } else if (chicken.checked) {
        toppings += " ,chicken";
    } else if (bbqSauce) {
        toppings += " ,bbq sauce";
    } else if (bellPeppers.checked) {
        toppings += " ,bell peppers";
    } else if (basil.checked) {
        toppings += " ,basil";
    } else if (extraCheese.checked) {
        toppings += " ,extra cheese";
    } else {
        pepperoni.setCustomValidity("please select toppings for your pizza.");
    }
}
// Determine selected toppings
function cheeseCheck() {
    if (cheese.checked) {
        toppings += "cheese";
    } else {
        toppingCheck
    }
}
*/