"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from a query string
      Author: Madison Brown
      Date:   11/3/24

      Filename: project09-01b.js
*/

// Create query variable
let query = location.search.slice(1);

// Replace + with blank space and replace URI-encoded characters
query = query.replace(/\+/g, " ");
query = decodeURIComponent(query);

// Split text at every occurence of the & character
let cardFields = query.split("&");

// Create a for loop to go through every item in cardFields array.
for (let item of cardFields) {
    let nameValue = item.split("=");
    let name = nameValue[0];
    let value = nameValue[1];
    if (document.getElementById(name)) {
        document.getElementById(name).textContent = value;
    }
}

