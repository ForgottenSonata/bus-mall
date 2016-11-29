'use_strict';

var productImages = [];

function Products (productName, filePath) {
    this.productName = productName;
    this.filePath = filePath;
    productImages.push(this);
}
var bag = new Products('Star Wars Luggage', 'Images/bag.jpg');
var banana = new Products('Banana Slicer', 'Images/banana.jpg');
var boots = new Products('Toe-less Rain Boots', 'Images/boots.jpg');
var chair = new Products('Chair', 'Images/chair.jpg');
var cthulu = new Products('Cthulu Toy', 'Images/cthulhu.jpg');
var dragon = new Products('Dragon Meat', 'Images/dragon.jpg');
var pen = new Products('Untensil Pens', 'Images/pen.jpg');
var scissors = new Products('Pizza Scissors', 'Images/scissors.jpg');
var shark = new Products('Shark Sleeping Bag', 'Images/shark.jpg');
var sweep = new Products('Baby Broom Onesie', 'Images/sweep.png');
var unicorn = new Products('Unicorn Meat', 'Images/unicorn.jpg');
var usb = new Products('Tentacle USB', 'Images/usb.gif');
var waterCan = new Products('Watering Can', 'Images/water-can.jpg');
var wineGlass = new Products('Wine Glass', 'Images/wine-glass.jpg');


var imgRandom = function () {
    return Math.floor(Math.random() * productImages.length);
}
var imageAppear = function(){
    var productImageOne = document.getElementById('imageOne');
    var img1 = imgRandom();
    productImageOne.src = productImages[img1].filePath;
    var productImageTwo = document.getElementById('imageTwo');
    var img2 = imgRandom();
    while (img1 === img2) {
        img2 = imgRandom();
    };
    productImageTwo.src = productImages[img2].filePath;
    var productImageThree = document.getElementById('imageThree');
    var img3 = imgRandom();
    while (img1 === img2 || img2 === img3 || img3 === img1) {
        img3 = imgRandom();
    };
    productImageThree.src = productImages[img3].filePath;
}
imageAppear();

var firstClick = 0;
var secondClick = 0;
var thirdClick = 0;

function handleClick(){
    imageAppear();
}

imageOne.addEventListener('click', handleClick);
imageTwo.addEventListener('click', handleClick);
imageThree.addEventListener('click', handleClick);
