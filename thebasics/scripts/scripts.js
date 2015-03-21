var myVariable = "value";
var stringPartLetters = "letters";
var stringPartNumbers = "numbers";
var stringPartCharacters = "characters";
var myFullString = "A string may contain as many " +stringPartLetters+", "+stringPartNumbers+" and "+stringPartCharacters+" as you want";
console.log(myFullString);
var count = 10;
var multiplier = 20;
var calculateVariables = "I have "+(count * multiplier)+" friends on 'facebook'.";
console.log(calculateVariables);
var stringYear = "In the year " + multiplier.toString() + count + ", most of us were 3 years old";
console.log(stringYear);
var myColorArray = ['Orange', 'Red', 'Yellow', 'Green'];
var myColor = "My favorite color is " +myColorArray[3];
console.log(myColor);
var myFruitColorArray = [ ['Apples', 'Bananas', 'Grapes'], ['Red', 'Yellow', 'Green'] ];
var myFruitColor = "I like "+myFruitColorArray[0][1]+" because they are "+myFruitColorArray[1][1];
console.log(myFruitColor);
var gemString = "Gem Colors: ";
var myGemColorArray = [ ['Ruby', 'Sapphire', 'Emerald'], ['Red', 'Blue', 'Green'] ];
for(var i = 0; i < myGemColorArray[0].length; i++){
    gemString += "The " + myGemColorArray[0][i] +" is "+myGemColorArray[1][i]+ ".";    };
    gemString += "Gems come in many colors.";
    console.log(gemString);
var myFriendCompare = "";
var myFriendName = "Mike";
var myAge = 12;
var myFriendAge =13;
if(myAge > myFriendAge){
    myFriendCompare = "I am older than "+myFriendName+".";
    }else{
         myFriendCompare = myFriendName+" is older than me.";
         }
console.log(myFriendCompare);
function myFirstFunction(_myFriend, _myName, _status){console.log("Hello "+_myFriend +". It is me, "+ _myName +" and this is my "+ _status +" function!");}
myFirstFunction('Mike','Ben','first');
function createGallery(element,path,file,alt){ 
    var liString = "";
    for (var j = 1; j <= 8; j++) {
        liString += '<li><a href="#self" onclick="showImage(\'' + file + j + '\');"><img class="photo" alt="' + alt + '-' + j + '" src="' + path + file + j + '.jpg"></a></li>\n';
        }
        document.querySelector(element).innerHTML = liString;
    }
var galleryContainer = ".photo-gallery";
var imagePath = "/animals/owls/"
var imageName = "owl";
var altName = "owls";
createGallery(galleryContainer, imagePath, imageName, altName);
function showImage(argument) { };