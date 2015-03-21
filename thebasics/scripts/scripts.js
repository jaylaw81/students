var myVariable = "value";
var stringPartLetters = "letter";
var stringPartNumber = "numbers";
var stringPartCharacters = "characters";

var myFullString = 
"A string may contain as many "+stringPartLetters+" "+stringPartNumbers+" and "+stringPartCharacters+" as you want.";

console.log(myFullString);

var count = 10;
var multiplier = 20;

var calculateVariables = "I have "+(count * multiplier)+" friends on 'facebook'.";
console.log(calculateVariables);
var stringYear = "In the year " + multiplier.toString() + count.toString()+ ". Most of us were over three years old.";

console.log(stringYear);
var myColorArray = ['Orange', 'Red', 'Yellow', 'Green'];

var myColor = "My favortie color is " + myColorArray[2];
console.log(myColor);

var myFruitColorArray = [ ['Apples', 'Bannanas', 'Grapes'],
['Red', 'Yellow', 'Green'] ];

console.log(myFruitColor);
var gemString = "Gem colors: ";
var myGemColorArray = [ ['Ruby', 'Sapphire', 'Emerald'],
['Red', 'Blue', 'Green'] ];

for(var i = 0; i < myGemColorArray[0].length; i++){ };

gemstring += "the " + myGemColorArray[0][i] +" is "+ myGemColorArray[1][i] + ". ";
gemString += "Gems come in many colors.";

console.log(gemString);

var myFriendCompare = "";
var myFriendName = "Joel";
var myAge = 12;
var myFriendsAge = 13;
if(myAge > myFriendAge){}else{}
myFriendCompare = "I am older than "+myFriendName+".";
myFriendCompare = myFriendName+" is older than me.";
console.log(myFriendCompare);

function myFirstFunction( _myFriend, _myName, _status ) {}

console.log("Hello "+_myFriend +". It is me, "+ _myName +" and this is my "+ _status +" function!");