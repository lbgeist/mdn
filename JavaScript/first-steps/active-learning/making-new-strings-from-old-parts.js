/*
In this last exercise, the array contains a bunch of strings containing information about train 
stations in the North of England. The strings are data items that contain the three-letter station 
code, followed by some machine-readable data, followed by a semicolon, followed by the human-readable 
station name. For example:

MAN675847583748sjt567654;Manchester Piccadilly
We want to extract the station code and name, and put them together in a string with the following 
structure:

MAN: Manchester Piccadilly
We'd recommend doing it like this:

1. Extract the three-letter station code and store it in a new variable.
2. Find the character index number of the semicolon.
3. Extract the human-readable station name using the semicolon character index number as a reference 
point, and store it in a new variable.
4. Concatenate the two new variables and a string literal to make the final string.
5. Change the value of the result variable to equal to the final string, not the input.
*/

//My solution:
const list = document.querySelector('.output ul');
list.innerHTML = '';
let stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (let i = 0; i < stations.length; i++) {
  let input = stations[i];
  // write your code just below here   
  let stn = input.slice(0,3);
  let char = input.indexOf(';');
  let stnName = input.slice(char + 1);
  
  let result = stn + ': ' + stnName;
  let listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}


//MDN Solution: 
const list = document.querySelector('.output ul');
list.innerHTML = '';
let stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (let i = 0; i < stations.length; i++) {
  let input = stations[i];
  let code = input.slice(0,3);
  let semiC = input.indexOf(';');
  let name = input.slice(semiC + 1);
  let result = code + ': ' + name;
  let listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}