'use strict';

var productImages = [];
var clickChart = [];
var displayedChart = [];
var globalClicks = 0;
var totalClicks = 0;
var img1;
var img2;
var img3;
var productImageOne = document.getElementById('imageOne');
var productImageTwo = document.getElementById('imageTwo');
var productImageThree = document.getElementById('imageThree');
var imageSection = document.getElementById('hide');
var resultsButton = document.getElementById('resultsButton');
var thankYou = document.getElementById('appear');
var clearLS = document.getElementById('lsClear');
var chartData = localStorage.getItem('chartPersist');

function Products (productName, filePath) {
  this.productName = productName;
  this.filePath = filePath;
  this.clickTotal = 0;
  this.timesDisplayed = 0;
  productImages.push(this);
}
var bag = new Products('Star Wars Luggage', 'Images/bag.jpg');
var banana = new Products('Banana Slicer', 'Images/banana.jpg');
var bathroom = new Products('Bathroom', 'Images/bathroom.jpg');
var boots = new Products('Toe-less Rain Boots', 'Images/boots.jpg');
var breakfast = new Products('Breakfast', 'Images/breakfast.jpg');
var bubblegum = new Products('Bubblegum', 'Images/bubblegum.jpg');
var chair = new Products('Chair', 'Images/chair.jpg');
var cthulu = new Products('Cthulhu Toy', 'Images/cthulhu.jpg');
var dragon = new Products('Dragon Meat', 'Images/dragon.jpg');
var pen = new Products('Untensil Pens', 'Images/pen.jpg');
var petsweep = new Products('Pet Sweep', 'Image/pet-sweep.jpg')
var scissors = new Products('Pizza Scissors', 'Images/scissors.jpg');
var shark = new Products('Shark Sleeping Bag', 'Images/shark.jpg');
var sweep = new Products('Baby Broom Onesie', 'Images/sweep.png');
var tauntaun = new Products('Tauntaun', 'Images/tauntaun.jpg');
var unicorn = new Products('Unicorn Meat', 'Images/unicorn.jpg');
var usb = new Products('Tentacle USB', 'Images/usb.gif');
var waterCan = new Products('Watering Can', 'Images/water-can.jpg');
var wineGlass = new Products('Wine Glass', 'Images/wine-glass.jpg');

var imgRandom = function () {
  return Math.floor(Math.random() * productImages.length);
};
var imageAppear = function(){
  var productImageOne = document.getElementById('imageOne');
  var productImageTwo = document.getElementById('imageTwo');
  var productImageThree = document.getElementById('imageThree');
  img1 = imgRandom();
  productImageOne.src = productImages[img1].filePath;
  productImages[img1].timesDisplayed ++;
  img2 = imgRandom();
  while (img1 === img2) {
    img2 = imgRandom();
  }
  productImageTwo.src = productImages[img2].filePath;
  productImages[img2].timesDisplayed ++;
  img3 = imgRandom();
  while (img1 === img2 || img2 === img3 || img3 === img1) {
    img3 = imgRandom();
  }
  productImageThree.src = productImages[img3].filePath;
  productImages[img3].timesDisplayed ++;
};
function button() {
  if(globalClicks < productImages.length) {
    document.getElementById('resultsButton').style.visibility = 'hidden';
  } else {
    document.getElementById('resultsButton').style.visibility = 'visible';
  }
}

  function legendText(){
    if (globalClicks < productImages.length){
      document.getElementById('legend').style.display = 'none';
    } else {
      document.getElementById('legend').style.display = 'block';
    }
}
function dataSet1() {
  for (var i = 0; i < productImages.length; i++) {
    clickChart[i] = productImages[i].clickTotal;
  }
}
function dataSet2() {
  for (var i = 0; i < productImages.length; i++){
    displayedChart[i] = productImages[i].timesDisplayed;
  }
}
function chartOne() {
  var data = {
    labels : ['bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb', 'water can', 'wine glass'],
    datasets : [
      {
        label: 'Product Selection Chart',
        fillColor : '#152874',
        strokeColor : '#48A4D1',
        data : clickChart
      },
      {
        label: 'All Appearances',
        fillColor : '#cbb910',
        strokeColor : '#48A4D1',
        data : displayedChart
      }
    ]
  };
  var chartHere = document.getElementById('chartHere').getContext('2d');
  var myBarChart = new chartOne(chartHere).Bar(data);
}

function handleClick(image){
  image.clickTotal += 1;
  globalClicks += 1;
  localStorage.setItem('chartPersist', JSON.stringify(productImages));

}
if(chartData) {
  productImages = JSON.parse(chartData);
} else {
  localStorage.setItem('chartPersist', JSON.stringify(productImages));
}


var handleLSClear = function() {
  console.log('Clearing Local Storage');
  localStorage.clear();
};

imageOne.addEventListener('click', function(){
  handleClick(productImages[img1]);
});
imageTwo.addEventListener('click', function(){
  handleClick(productImages[img2]);
});
imageThree.addEventListener('click', function(){
  handleClick(productImages[img3]);
});

clearLS.addEventListener('click', handleLSClear);

handleClick();

dataSet1();
dataSet2();
imageAppear();
legendText();
canvas();
