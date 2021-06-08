
import presentDrinks from './src/presentDrinks.js';
import  './src/searchForm.js';


const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';


window.addEventListener('DOMContentLoaded', () =>{
    presentDrinks(URL);
})












//scroll btn....

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document

mybutton.addEventListener('click', topFunction);

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}