var myVariable = "value";
var stringPartLetters = "reading";
var stringPartNumbers = "drawing";
var stringPartCharacters = "writing";
var myFullString = "Esha loves "+stringPartLetters+", "+stringPartNumbers+", and "+stringPartCharacters+" and coding."; 
console.log(myFullString);
var count = 10;
var multiplier = 20;
var calcVar = "I have "+(count * multiplier)+" friends at 'school'.";
console.log(calcVar);
var stringYear = "In the year " + multiplier.toString() + count.toString() + ", most of us were over 3 years old.";
console.log(stringYear);
var myColorArray = ['Orange', 'Purple', 'Sky Blue', 'Green'];
var myColor = "My favorite color is " + myColorArray[2];
console.log(myColor);
var myFCA = [ ['Apples', 'Oranges', 'Bananananananananananananananananananas'], ['Red', 'Orange', 'Yellow'] ];
var myFruitColor = "I like "+myFCA[0][2]+" because they are "+myFCA[1][2];
console.log(myFruitColor);
var gemString = "Gem colors: ";
var myGemColorArray = [ ['Ruby', 'Sapphire', 'Emerald'], ['Red', 'Blue', 'Green'] ];
for(var i = 0; i < myGemColorArray[0].length; i++){
    gemString += "The " + myGemColorArray[0][i] +" is "+ myGemColorArray[1][i] + ". ";
    };
gemString += "Gems come in many colors.";
console.log(gemString);
var myFriendCompare = "";
var myFriendName = "Alisa";
var myAge = 11.7;
var myFriendAge = 12.4;
if(myAge > myFriendAge){
         myFriendCompare = "I am older than "+myFriendName+"."; 
    }else{
       myFriendCompare = myFriendName+" is older than me."; 
        }
console.log(myFriendCompare);
function myFirstFunction( _myFriend, _myName, _status ) {
    console.log("Hello "+ _myFriend +". It is me, "+ _myName +" and this is my "+ _status +" function!");
    }
