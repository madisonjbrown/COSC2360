"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: Madison Brown
      Date:   9/29/24

      Filename: project05-03.js
*/
// Declare variables and constants
let sourceDoc = document.getElementById("source_doc");
let toc = document.getElementById("toc");
let headingCount = 1;
const HEADING = "H2";
// Create a for loop 
for(let n = sourceDoc.firstElementChild; n != null; n = n.nextElementSibling) {
   if (n.nodeName === HEADING) {
      let anchor = document.createElement("a");
      anchor.name = "doclink" + headingCount;
      n.insertBefore(anchor, n.firstChild);
      let listItem = document.createElement("li");
      let link = document.createElement("a");
      listItem.appendChild(link);
      link.textContent = n.textContent;
      link.href = "#doclink" + headingCount;
      toc.appendChild(listItem);
      headingCount++;
   } 
}