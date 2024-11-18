"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Madison Brown
      Date:   11/17/24

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function() {
    let codeValue = postalCode.value;
    let countryValue = country.value;
    place.value = " ";
    region.value = " ";
    fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)
    .then(response => {
        if(response.status !== 200) {
            console.log("Network response was not ok");
        }
        return response.json();
    })
    .then((json) => {
        place.value = json.places[0]["place name"];
        region.value = json.places[0]["state abbreviation"];
    })
    .catch(error => console.log("There was an error with the fetch operations."))
    
}




