var myVariable = "Uni McUnicorn";

var stringPartLetters = "letters";
var stringPartNumbers = "numbers";
var stringPartCharacters = "characters";

var myFullString = "A string may contain as many "+stringPartLetters+", "+stringPartNumbers+" and "+stringPartCharacters+" as you want.";
console.log(myFullString);

var count = 10;
var multiplier = 20;

var calculateVariables = "I have "+(count * multiplier)+" friends on 'facebook'.";
console.log(calculateVariables);

var stringYear = "In the year "+multiplier.toString() + count.toString()+", most of us were over 3 years old.";
console.log(stringYear);

var myColorArray = ['Orange','Red','Yellow','Green'];

var myColor = "My favorite color is " + myColorArray[0];
console.log(myColor);

var myFruitColorArray = [ ['Apples', 'Bannanas', 'Grapes'], ['Red', 'Yellow', 'Green'] ];

var myFruitColor = "I like "+myFruitColorArray[0][1]+" because they are "+myFruitColorArray[1][1];
console.log(myFruitColor);

var gemString = "Gem colors: ";

var myGemColorArray = [ ['Chicken','Bread','Soup'], ['Fried','Baked','Boiled'] ];

for(var i = 0; i < myGemColorArray[0].length; i++) {
    gemString += "The "+myGemColorArray[1][i]+" is "+myGemColorArray[0][i]+". ";
};

gemString += "Gems come in many colors.";
console.log(gemString);

var myFriendCompare = "";
var myFriendName = "Ben";

var myAge = 33;
var myFriendAge = 12;

if(myAge < myFriendAge){
    myFriendCompare = "I am older than "+myFriendName+".";    
}else{
    myFriendCompare = myFriendName+" is older than me.";    
}
console.log(myFriendCompare);

function myFirstFunction(_myFriend, _myName, _status){
    console.log("Hello "+_myFriend+". It is me, "+_myName+" and this is my "+_status+" function!");
}

myFirstFunction('Ben','Matt','first');

function createGallery(element, path, file, alt){
    var liString = "";
    for(var j = 1; j <= 8; j++){
        liString += '<li><a href="#self" onclick="showImage(\'' + file + j + '.jpg\');"><img class="photo" alt="' + alt + '-' + j + '" src="'+ path + file + j + '.jpg"></a></li>\n';    
    }
    document.querySelector(element).innerHTML = liString;
}

var galleryContainer = ".photo-gallery";
var imagePath = "/animals/unicorns/";
var imageName = "unicorns";
var altName = "unicorns are majestic hoove pounding beasts";

createGallery(galleryContainer, imagePath, imageName, altName);

function showImage(argument) {
    var img = "<img src='/animals/unicorns/" + argument + "'>";    
};






























