/*
In this exercise we have the names of cities in the United Kingdom, but the capitalization is all 
messed up. We want you to change them so that they are all lower case, except for a capital first 
letter. A good way to do this is to:

1. Convert the whole of the string contained in the input variable to lower case and store it in a 
new variable.
2. Grab the first letter of the string in this new variable and store it in another variable.
3. Using this latest variable as a substring, replace the first letter of the lowercase string with 
the first letter of the lowercase string changed to upper case. Store the result of this replace 
procedure in another new variable.
4. Change the value of the result variable to equal to the final result, not the input.
*/

// My solution: 
const list = document.querySelector('.output ul');
list.innerHTML = '';
let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (let i = 0; i < cities.length; i++) {
  let input = cities[i];
  // write your code just below here
  let lowerCase = input.toLowerCase();
  let capitalCase = input[0].toUpperCase();
  let result = capitalCase + lowerCase.slice(1);
  let listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}


//MDN solution:
const list = document.querySelector('.output ul');
list.innerHTML = '';
let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (let i = 0; i < cities.length; i++) {
  let input = cities[i];
  let lower = input.toLowerCase();
  let firstLetter = lower.slice(0,1);
  let capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());
  let result = capitalized;
  let listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);

}