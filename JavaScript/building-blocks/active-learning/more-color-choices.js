/*
In this example, you are going to take the ternary operator example we saw earlier and convert the 
ternary operator into a switch statement that will allow us to apply more choices to the simple website. 
Look at the <select> — this time you'll see that it has not two theme options, but five. You need to add 
a switch statement just underneath the // ADD SWITCH STATEMENT comment:

 - It should accept the choice variable as its input expression.
 - For each case, the choice should equal one of the possible values that can be selected, i.e. white, 
 black, purple, yellow, or psychedelic. Note that the values are case sensitive, and should equal the 
 <option> element value values rather than the visual labels.
 - For each case, the update() function should be run, and be passed two color values, the first one 
 for the background color, and the second one for the text color. Remember that color values are 
 strings, so need to be wrapped in quotes. 
If you make a mistake, you can always reset the example with the "Reset" button. If you get really 
stuck, press "Show solution" to see a solution.
*/

// MDN Solution: 
var select = document.querySelector('select');
var html = document.querySelector('.output');

select.onchange = function() {
 var choice = select.value;

 switch(choice) {
 case 'black':
 update('black','white');
 break;
 case 'white':
 update('white','black');
 break;
 case 'purple':
 update('purple','white');
 break;
 case 'yellow':
 update('yellow','darkgray');
 break;
 case 'psychedelic':
 update('lime','purple');
 break;
 }
}

function update(bgColor, textColor) {
 html.style.backgroundColor = bgColor;
 html.style.color = textColor;
}