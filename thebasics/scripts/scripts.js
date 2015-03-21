var myVariable = "value";
var stringPartLetters ="Letters";
var stringPartNumbers ="Numbers";
var stringPartCharacters ="characters";
var myFullString = "A string may contian as many "+stringPartLetters+", "+stringPartNumbers+" and "+stringPartCharacters+" as you want.";
console.log(myFullString);
var count = 10;
var multiplier = 20;
var calculateVariables = "I have "+(count * multiplier)+" friends on 'facebook'.";
console.log(calculateVariables);
var stringYear = "In the year " + multiplier.toString() + count.toString() + ",most of us were over 3 years old.";
console.log(stringYear);
var myColorArray = ['orange', 'Red', 'Yellow', 'Green'];
var myColor = "My favorite color is " + myColorArray[2];
console.log(myColor);
var myFruitColorArray = [ ['Apples', 'Bannanas', 'Grapes'], ['Red', 'Yellow', 'Green'] ];
var myFruitColor = "I like "+myFruitColorArray[0][1]+" because they are "+myFruitColorArray[1][1];
console.log(myFruitColor);
var gemstring = 'Gem Colors: ';
var myGemColorArray = [ ['Ruby','saphire','Emerald'], ['Red','blue','Green'] ];
for(var i = 0; i < myGemColorArray[0].length; i++){
gemstring += "the " +myGemColorArray[0][i] +' is '+  myGemColorArray[1][i] +'.';
    };
gemstring +='gems come in many colors.';
console.log(gemstring);
var myFriendCompare ="";
var myFriendName ="Jack"
var myage =8;
var myFriendAge=9;
if(myage > myFriendAge){
    myFriendCompare = "I am older than " +myFriendName+".";
    }else{
        myFriendCompare = myFriendName+ " is older than me";
        }
    console.log(myFriendCompare);
    function myFirstFunction(_myFriend, _myname, _status) {
        console.log('Hello'+_myFriend +'. it is me,'+_myname+' and this is my' +_status+" function!");
}
myFirstFunction('poop','michael','first');

function createGallery(element,path,file,alt){
    var liString = "";
    for(var j = 1; j <= 8; j++) {
        liString += '<li><a href="#self" onclick="showImage(\'' + file + j + '.jpg\');"><img class="photo" alt="' + alt + '-' + j + '" src="' + path + file + j + '.jpg"></a></li>\n'; 
    }
    document.querySelector(element).innerHTML = liString;
}
var galleryContainer = '.photo-gallery';
var imagePath ="/animals/chicken/";
var imageName = 'chicken';
var altName ='chicken';

///animals/chicken/chicken1.jpg

createGallery(galleryContainer, imagePath,imageName,altName);
function showImage(argument) { };
var img = "<img src='/animals/chicken/" +argument + "'>";