/*
A good use for array methods like push() and pop() is when you are maintaining a record of currently 
active items in a web app. In an animated scene for example, you might have an array of objects 
representing the background graphics currently displayed, and you might only want 50 displayed at once, 
for performance or clutter reasons. As new objects are created and added to the array, older ones can be 
deleted from the array to maintain the desired number.

In this example we're going to show a much simpler use — here we're giving you a fake search site, with 
a search box. The idea is that when terms are entered in the search box, the top 5 previous search terms 
are displayed in the list. When the number of terms goes over 5, the last term starts being deleted each 
time a new term is added to the top, so the 5 previous terms are always displayed.

Note: In a real search app, you'd probably be able to click the previous search terms to return to 
previous searches, and it would display actual search results! We are just keeping it simple for now.

To complete the app, we need you to:

1. Add a line below the // number 1 comment that adds the current value entered into the search input 
to the start of the array. This can be retrieved using searchInput.value.
2. Add a line below the // number 2 comment that removes the value currently at the end of the array.
*/

// My Solution:

var list = document.querySelector('.output ul');
var searchInput = document.querySelector('.output input');
var searchBtn = document.querySelector('.output button');

list.innerHTML = '';

var myHistory = [];

searchBtn.onclick = function() {
  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== '') {
    // number 1
    myHistory.unshift(searchInput.value);
    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list.innerHTML = '';

    // loop through the array, and display all the search terms in the list
    for (var i = 0; i < myHistory.length; i++) {
      itemText = myHistory[i];
      var listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= 5) {
      // number 2
      myHistory.pop();
    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = '';
    searchInput.focus();
  }
}


// MDN Solution:

var list = document.querySelector('.output ul');
var searchInput = document.querySelector('.output input');
var searchBtn = document.querySelector('.output button');

list.innerHTML = '';

var myHistory= [];

searchBtn.onclick = function() {
 if(searchInput.value !== '') {
 myHistory.unshift(searchInput.value);

 list.innerHTML = '';

 for(var i = 0; i < myHistory.length; i++) {
 itemText = myHistory[i];
 var listItem = document.createElement('li');
 listItem.textContent = itemText;
 list.appendChild(listItem);
 }

 if(myHistory.length >= 5) {
 myHistory.pop();
 }

 searchInput.value = '';
 searchInput.focus();
 }
}
