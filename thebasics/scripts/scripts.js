var myVariable = "value";

var stringPartLetters = "letters";
var stringPartNumbers = "numbers";
var stringPartCharacters = "characters";

var myFullString = " A string may contain as many "+stringPartLetters+", "+stringPartNumbers+" and "+stringPartCharacters+" as you want.";  

console.log(myFullString);

var count = 10;
var multiplier = 20;

var calculateVariables = "I have "+(count * multiplier)+" friends on 'facebook'.";

console.log(calculateVariables);

var stringYear = "In the year " + multiplier.toString() + count.toString() + ", most of us were over 3 years old.";

console.log(stringYear);

var myColorArray = ['orange', 'red' , 'yellow' , 'green'];

var myColor = "My favorite color is " + myColorArray[3]; 

console.log(myColor);

var myFruitColorArray = [ ['apples' , 'bananas' , 'grapes'], ['red', 'yellow' , 'green'] ];

var myFruitColor = "I like "+myFruitColorArray[0][1]+" because they are "+myFruitColorArray[1][1];

console.log(myFruitColor);

var gemString = " Gem colors: ";

var myGemColorArray = [ ['ruby' , 'saphire' , 'emerald'], ['red','blue','green'] ];

for(var i = 0; i < myGemColorArray[0].length; i++){

    gemString += "the " + myGemColorArray[0][i] +" is "+ myGemColorArray[1][i] +". ";
}

gemString += "Gems come in many colors";

console.log(gemString);

var myFriendCompare = "";
var myFriendName = "Brian";

var myAge = 9;
var myFriendAge = 43;

if(myAge > myFriendAge){
    myFriendCompare = "i am older than "+myFriendName+"."
}else{        
    myFriendCompare = myFriendName+" is older than me, but is also my dad";
}

console.log(myFriendCompare);

function myFirstFunction ( _myFriend, _myName, _status ) {
    console.log("Hello "+_myFriend+". It is me, "+_myName+" and this is my "+_status+" function!");
}

myFirstFunction('Brian','Chris','first');

function createGallery(element,path,file,alt){
    var liString = "";
    for (var j = 1; j <= 8; j++){
        liString += '<li><a href="#self" onclick="showImage(\'' +file+ j+ '.jpg\');"' +alt+ '-' + j+ '" src="' + path +file + j +'.jpg"></a></li>\n';
        
    }
    document.querySelector(element).innerHTML = liString;
}

var galleryContainer = ".photo-Gallery";
var imagePath = "/animals/germanshepherd/";   
var imageName = "german-shepherd";
var altName = "Sorry the picture didn't load. :(";

createGallery(galleryContainer, imagePath, imageName, altName);

function showImage(argument) {
    var img = "<img src='/animals/germanshepherd/" +argument +"'>";

document.querySelector(".gallery-main-image .image-container").innerHTML = img;

return false;

}





















