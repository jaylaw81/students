var myVariable = "value";
var stringPartLetters = "letters";
var stringPartNumbers = "numbers";
var stringPartCharacters = "characters";
var myFullString = "A string may contain as many "+stringPartLetters+", "+stringPartNumbers+" and "+stringPartCharacters+" as you want.";
console.log(myFullString);

var count = 10;
var multiplier = 20;

var calculateVariables = "I have "+(count * multiplier)+" friends on 'facebook'.";  
console.log(calculateVariables);
var stringYear = "In the year " + multiplier.toString() + count.toString() + ", most of us were 3 years old.";
console.log(stringYear);

var myColorArray = ['Orange', 'Red', 'Blue', 'Green'];
var myColor = "My favorite color is " + myColorArray[2];
console.log(myColor);

var myFruitColorArray = [ ['Apples', 'Bannanas', 'Grapes'], ['Red', 'Blue', 'Green' ] ];
var myFruitColor = "I like "+myFruitColorArray[0][1]+" because they are "+myFruitColorArray[1][1];