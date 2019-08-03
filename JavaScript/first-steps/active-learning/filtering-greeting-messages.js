/*
In the first exercise we'll start you off simple — we have an array of greeting card messages, 
but we want to sort them to list just the Christmas messages. We want you to fill in a conditional 
test inside the if( ... ) structure, to test each string and only print it in the list if it is a 
Christmas message.

First think about how you could test whether the message in each case is a Christmas message. What 
string is present in all of those messages, and what method could you use to test whether it is present?
You'll then need to write a conditional test of the form operand1 operator operand2. Is the thing on 
the left equal to the thing on the right? Or in this case, does the method call on the left return 
the result on the right?
Hint: In this case it is probably more useful to test whether the method call isn't equal to a 
certain result.
*/

const list = document.querySelector('.output ul');
list.innerHTML = '';
let greetings = ['Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'];

for (let i = 0; i < greetings.length; i++) {
  let input = greetings[i];
  // Your conditional test needs to go inside the parentheses
  // in the line below, replacing what's currently there
  if (greetings[i].indexOf('Christmas') !== -1) {
    let listItem = document.createElement('li');
    listItem.textContent = input;
    list.appendChild(listItem);
  }
}
