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
console.log(gemString);
var myFriendCompare = "";
var myFriendName = "Nathan";
var myAge = 12;
var myFriendAge = 2;
if(myAge > myFriendAge){
    myFriendCompare = "I am older than "+myFriendName+".";    
}else{
    myFriendCompare = myFriendName+" is older than me.";    
}

console.log(myFriendCompare);
function myFirstFunction( _myFriend, _myName, _status ) {
    console.log("Hello"+_myFriend +". It is me, "+_myName+" and this is my "+ _status +" function!!");
}
myFirstFunction('Nathan','Sam','first');
function createGallery(element,path,file,alt){
    var liString = "";
    for (var j = 1; j <= 8; j++) {
        liString += '<li><a href="#self" onclick="showImage(\''+ file + j + '.jpg\');"><img class="photo" alt="' + alt + '-' + j + '" src="' + path + file + j + '.jpg"></a></li>\n'
    }
document.querySelector(element).innerHTML = liString;
}

var galleryContainer = ".photo-gallery";
var imagePath = "/animals/dolphin1/";
var imageName = "dolphin";
var altName = "dolphin";
createGallery(galleryContainer, imagePath, imageName, altName);
function showImage(argument) {
    var img = "<img src='/animals/dolphin/" + argument + "'>";
    document.querySelector(".gallery-main-image .image-container").innerHTML = img;
    return false;
}
