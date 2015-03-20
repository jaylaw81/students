var myVariable = "value";
var stringPartLetters = "letters";
var stringPartNumbers = "numbers";
var stringPartCharacters = "characters";

var myFullString = "A string may contain as many "+stringPartLetters+" "+stringPartNumbers+" "+stringPartCharacters+" asdf.";

console.log(myFullString);

var count = 10;
var multiplier = 20;

var calculateVariables = "I have "+(count * multiplier)+" friends on 'facebook'";
console.log(calculateVariables);

var stringYear = "In the year "+multiplier.toString() + count.toString()+", most of us were over 3 years old.";
console.log(stringYear);

var myColorArray = ['Orange','Red','Yellow','Green'];

var myColor = "My favorite color is " + myColorArray[2];
console.log(myColor);

var myFruitColorArray = [['Apples','Bannanas','Grapes'], ['Red','Yellow','Green']];

var myFruitColor = "I like "+myFruitColorArray[0][1]+" because they are "+myFruitColorArray[1][1];
console.log(myFruitColor);

var gemString = "Gem colors: ";
var myGemColorArray = [['Ruby','Saphire','Emerald'], ['Red','Blue','Green']];
for(var i = 0; i < myGemColorArray[0].length; i++){
gemString += "The "+myGemColorArray[0][i]+" is "+myGemColorArray[1][i]+".";
gemString += "Gems come in many colors.";
}

console.log(gemString);

var myFriendCompare = "";
var myFriendName = "Mike";
var myAge = 12;
var myFriendAge = 13;
if(myAge > myFriendAge){
    myFriend = "I am older than "+ myFriendName +".";
} else {
    myFriend = myFriendName + " is older than me.";
}

console.log(myFriend);

function myFirstFunction( _myFriend, _myName, _status) {
    console.log(" Hello " + _myFriend +". Its me, "+ _myName +" and this is my "+_status +" function!" );
}

myFirstFunction('Mike', 'ben', 'first');

function createGallery(element, file, alt) {
    var liString = "";
    for(var i = 1; i <= 8; i++) {
        liString += '<li><a href="#self" onclick="showImage(\'' + file + i + '\');"><img class="photo" alt="' + alt + '-' + i + '" src="' + path + file + i + '.jpg"></a></li>\n';
    }
    document.querySelector(element).innerHTML = liString;
}

var galleryContainer = ".photo-gallery";
var imagePath = "../assets/images/gallery/thumb/";
var imageName = "rhino";
var imagePath = "images/gallery/thumb/";