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

function createGallery(element, path, file, alt){ 
    var liString = '';
    for(var j = 1; j <= 8; j++) {
      liString += '<li><a href="#self" onclick="showImage(\'' + file + j + '.jpg\');"><img class="photo" alt="' + alt + '-' + j + '" src="' + path + file + j + '.jpg"></a></li>';  
    }
    document.querySelector(element).innerHTML = liString;
}

var galleryContainer = ".photo-gallery";
var imagePath = "/animals/cats/";
var imageName = "cats";
var altName = "cats are amazing";

createGallery(galleryContainer, imagePath, imageName, altName);

function showImage(argument) {
    var img = "<img src='/animals/cat/" + argument + "'>";
    document.querySelector(".gallery-main-image .image-container").innerHTML = img;
    return false;
}

























