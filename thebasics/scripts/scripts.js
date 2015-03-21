var myVariable = "value";
var stringpartletters = "eggs";
var stringpartnumbers = "bacon";
var stringpartcharacters = "toast";
var myFullString = "A string may contain as much "+stringpartletters+", "+stringpartnumbers+" and "+stringpartcharacters+" as you want.";
console.log(myFullString);
var count = 10;
var multiplier = 20;
var calculateVariables = "I have "+(count * multiplier)+" pieces of 'toast'.";
console.log(calculateVariables);
var stringYear = "In the kitchen " + multiplier.toString() + count.toString() + ", most of us had 3 bacon strips.";
console.log(stringYear);
var myColorArray = ['pink','lightblue','bacon','gold']
var myColor = "My favorite color is "+ myColorArray[2];
console.log(myColor);
var myFruitColorArray = [ ['Pancakes','Luckycharms','Frenchtoast'], ['Brown', 'Green', 'Yellow'] ];
var myFruitColor = "I like"+myFruitColorArray[0][0]+" because they are "+myFruitColorArray[1][0];
console.log(myFruitColor)
var gemString = "Gem colors:";
var myGemColorArray = [ ['Bacon','Sausage','Ham'],['Red','Brown','Pink',]]

for(var i = 0; i < myGemColorArray[0].length; i++){
    gemString += "The " + myGemColorArray[0][i] +"is"+ myGemColorArray[1][i] + ". ";
};

gemString += "Breakfest comes in many varieties.";




