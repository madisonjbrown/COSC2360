"use strict";
/*  JavaScript 7th Edition
    Final
    Final Project

    Author: Madison Brown
    Date:   12/2/24

    Filename: final.js
*/

function showMaps() {
    // Getting the user's location
    navigator.geolocation.getCurrentPosition(getPos, handleError);
    function getPos(pos) {
        let userLocation = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
        };
    
        // Create the users current location map
        let userMap = new google.maps.Map(document.getElementById("userMap"), {
            center: userLocation,
            zoom: 11
        });
        // Adding a marker for the user's current location
        new google.maps.Marker({
            position: userLocation,
            map: userMap,
            title: "Your Current Location"
        });
    }
    // Show error message if geolocation fails.
    function handleError(err) {
        console.log("Geolocation error: " + err.message);
    }
    // Center second map on New York City
    const cityLocation = { lat: 40.730610, lng: -73.935242};
    let cityMap = new google.maps.Map(document.getElementById("cityMap"), {
        center: cityLocation,
        zoom: 10
    });
    // Set the landmarks
    let sOlCoor = {lat: 40.6892, lng: -74.0445};
    let sOl = document.getElementById("sOl");
    let cPCoor = {lat: 40.7829, lng: -73.9654};
    let cP = document.getElementById("cP");
    let eSbCoor = {lat: 40.748817, lng: -73.985428};
    let eSb = document.getElementById("eSb");
    // Determine which landmark is checked
    sOl.onclick = landMarkS;
    cP.onclick = landMarkC;
    eSb.onclick = landMarkE;
    function landMarkS() {
        if (sOl.checked) {
            new google.maps.Marker({
                position: sOlCoor,
                map: cityMap,
                title: "Statue Of Liberty"
            })
        }
    }
    function landMarkC() {
        if (cP.checked) {
            new google.maps.Marker ({
                position: cPCoor,
                map: cityMap,
                title: "Central Park"
            })
        }
    }
    function landMarkE() {
        if (eSb.checked) {
            new google.maps.Marker ({
                position: eSbCoor,
                map: cityMap,
                title: "Empire State Building"
            })
        }
    }
}