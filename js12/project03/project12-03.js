"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Madison Brown
      Date:   11/24/24

      Filename: project12-03.js
*/

// Apply the click method to the >h2 article selector
$("article > h2").click(function() {
    let heading = $(this);
    let list = $(heading).next();
    let headingImage = $(heading).children("img");
    // Alternate between hiding and showing the content of the lists
    $(list).slideToggle(500);
    // Change the symbol displayed in the heading
    let imageSrc = $(headingImage).attr("src");
    if (imageSrc === "plus.png") {
        $(headingImage).attr("src", "minus.png");
    } else {
        $(headingImage).attr("src", "plus.png");
    }
});
    

