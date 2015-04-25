var myVariable = 'Izzy';

var stringPartLetters = 'letters';
var stringPartNumbers = 'numbers';
var stringPartCharacters = 'characters';

var myFullString = 'A string may contain as many '+stringPartLetters+', '+stringPartNumbers+' and '+stringPartCharacters+' as you want."; ';

console.log(myFullString);

var count = 10000000000000;
var multiplier = 20;

var calculateVariables = 'I have '+(count * multiplier)+" friends on 'facebook'.";
console.log(calculateVariables);

var stringYear = 'In the year ' + multiplier.toString() + count.toString() + ', most us of were over -100 years old.';
console.log(stringYear);

var myColorArray = ['Orange', 'Red', 'Yellow', 'Purple'];

var myColor = 'My favorite color is ' + myColorArray[3];
console.log(myColor);

var myFruitColorArray = [ ['Apples','Bananas','Grapes'],  ['Red', 'Yellow', 'Green'] ];

var myFruitColor = 'I like '+myFruitColorArray[0][1]+' because they are '+myFruitColorArray[1][1]
console.log(myFruitColor);

var gemString = 'Gem colors: ';

var myGemColorArray = [  ['Ruby','Saphire','Emerald'],['Red','Blue','Green'] ]; 
for(var i = 0; i < myGemColorArray[0].length; i++){
    gemString += 'The ' + myGemColorArray[0][i] +' is '+ myGemColorArray[1][i] + '. ';
}


























