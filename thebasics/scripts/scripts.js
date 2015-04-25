var myVariable = 'Izzy';

var stringPartLetters = 'letters';
var stringPartNumbers = 'numbers';
var stringPartCharacters = 'characters';

var myFullString = 'A string may contain as many '+stringPartLetters+', '+stringPartNumbers+' and '+stringPartCharacters+' as you want."; ';

console.log(myFullString);

var count = 1000000;
var multiplier = 20;

var calculateVariables = 'I have '+(count * multiplier)+" friends on 'facebook'.";
console.log(calculateVariables);

var stringYear = 'In the year ' + multiplier.toString() + count.toString() + ', most us of were over -100 years old.';
console.log(stringYear);

var myColorArray = ['Orange', 'Red', 'Yellow', 'Purple'];

var myColor = 'My favorite color is ' + myColorArray[3];
console.log(myColor);

var myFruitColorArray = [ ['Apples','Chicken Nuggets','Grapes'],  ['Red', 'delicious', 'Green'] ];

var myFruitColor = 'I like '+myFruitColorArray[0][1]+' because they are '+myFruitColorArray[1][1]
console.log(myFruitColor);

var gemString = 'Dinner: ';

var myGemColorArray = [  ['food','chicken','mac n cheese'],['delicious','yummy','amazing'] ]; 
for(var i = 0; i < myGemColorArray[0].length; i++) {
    gemString += 'The ' + myGemColorArray[0][i] +' is '+ myGemColorArray[1][i] + '. ';
}

gemString += 'I love this food.';
console.log(gemString);

var myFriendCompare = '';
var myFriendName = 'Sydnee';

var myAge = 11;
var myFriendAge = 11;

if(myAge > myFriendAge) {
    myFriendCompare = "I am the same age as "+myFriendName+".";
}else{
    myFriendCompare = myFriendName+" is the same age as me.";
}
console.log(myFriendCompare);

function myFirstFunction(_myFriend, _myName, _status ) {
    console.log('Hello '+_myFriend +'. It is me, '+_myName +' and this is my '+ _status +' function!');
}

myFirstFunction('Sydnee','Izzy','first');



























