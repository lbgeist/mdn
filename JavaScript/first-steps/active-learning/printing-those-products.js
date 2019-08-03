/*
Let's return to the example we described earlier — printing out product names and prices on an invoice, 
then totaling the prices and printing them at the bottom. In the editable example below there are 
comments containing numbers — each of these marks a place where you have to add something to the code. 
They are as follows:

1. Below the // number 1 comment are a number of strings, each one containing a product name and price 
separated by a colon. We'd like you to turn this into an array and store it in an array called products.
2. On the same line as the // number 2 comment is the beginning of a for loop. In this line we currently 
have i <= 0, which is a conditional test that causes the for loop to only run once, because it is saying 
"stop when i is no longer less than or equal to 0", and i starts at 0. We'd like you to replace this with 
a conditional test that stops the loop when i is no longer less than the products array's length.
3. Just below the // number 3 comment we want you to write a line of code that splits the current array 
item (name:price) into two separate items, one containing just the name and one containing just the price. 
If you are not sure how to do this, consult the Useful string methods article for some help, or even 
better, look at the Converting between strings and arrays section of this article.
4. As part of the above line of code, you'll also want to convert the price from a string to a number. 
If you can't remember how to do this, check out the first strings article.
5. There is a variable called total that is created and given a value of 0 at the top of the code. 
Inside the loop (below // number 4) we want you to add a line that adds the current item price to that 
total in each iteration of the loop, so that at the end of the code the correct total is printed onto 
the invoice. You might need an assignment operator to do this.
6. We want you to change the line just below // number 5 so that the itemText variable is made equal 
to "current item name — $current item price", for example "Shoes — $23.99" in each case, so the correct 
information for each item is printed on the invoice. This is just simple string concatenation, which 
should be familiar to you.
*/

// My Solution: 

var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1
let products = [
                'Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99'
];


for (var i = 0; i < products.length; i++) { // number 2
  // number 3
  products[i] = products[i].split(':');
  products[i][1] = Number(products[i][1]);
  // number 4
  total += products[i][1];
  // number 5
  itemText = products[i][0] + ' - $' + products[i][1];
  
  var listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);



// MDN Solution:

var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';

var products = ['Underpants:6.99',
 'Socks:5.99',
 'T-shirt:14.99',
 'Trousers:31.99',
 'Shoes:23.99'];

for(var i = 0; i < products.length; i++) {
 var subArray = products[i].split(':');
 var name = subArray[0];
 var price = Number(subArray[1]);
 total += price;
 itemText = name + ' — $' + price;

 var listItem = document.createElement('li');
 listItem.textContent = itemText;
 list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);