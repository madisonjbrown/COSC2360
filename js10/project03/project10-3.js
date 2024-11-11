"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-03

    Boulder Cycling Directions
    Author: Madison Brown
    Date:   11/10/24

    Filename: project10-03.js
*/


function showMap() {
   
   // Page objects
   let bikeMap = document.getElementById("bikeMap");
   let bikeDirections = document.getElementById("bikeDirections");
   let startingPoint = document.getElementById("startingPoint");
   let endingPoint = document.getElementById("endingPoint");  

   let bikeFind = new google.maps.DirectionsService();
   let bikeDraw = new google.maps.DirectionsRenderer();
   let Boulder = new google.maps.LatLng(40.01753, -105.26496);
   let myMap = new google.maps.Map(bikeMap, {
    zoom: 12,
    center: Boulder
   });
   startingPoint.addEventListener("change", drawRoute);
   endingPoint.addEventListener("change", drawRoute);
   // Create drawRoute() function
   function drawRoute() {
    if (startingPoint.selectedIndex !== 0 && endingPoint.selectedIndex !== 0) {
        var bikeRoute = {
            origin:startingPoint.value,
            destination:endingPoint.value,
            travelMode:"BICYCLING"
        };
    }
            bikeFind.route(bikeRoute, function(result, status){
                if (status === "OK") {
                    bikeDraw.setDirections(result);
                    bikeDraw.setMap(myMap);
                    bikeDraw.setPanel(bikeDirections);
                } else {
                    bikeDirections.textContent = "Directions Unavailable: " + status;
            }
        });
   }
} 


