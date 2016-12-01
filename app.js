'use_strict';

var productImages = [];

function Products (productName, filePath) {
    this.productName = productName;
    this.filePath = filePath;
    this.clickTotal = 0;
    this.timesDisplayed = 0;
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
  };

var imageAppear = function(){
    var productImageOne = document.getElementById('imageOne');
    var productImageTwo = document.getElementById('imageTwo');
    var productImageThree = document.getElementById('imageThree');
    img1 = imgRandom();
    productImageOne.src = productImages[img1].filePath;
    productImages[img1].timesDisplayed++;
    img2 = imgRandom();
    productImageTwo.src = productImages[img2].filePath;
    productImages[img2].timesDisplayed++;
    img3 = imgRandom();
    productImageThree.src = productImages[img3].filePath;
    productImages[img3].timesDisplayed++;

};



function renderChart () {
  var ctx = document.getElementById('my_chart');

  var myChart =
   new Chart(ctx, {
  type: 'bar',
    data: {
        labels: ["bag", "banana", "bathroom", "boots", "breakfast", "bubblegum","chair","cthulu","dog-duck", "dragon", "pen", "pet-sweep", "scissors", "shark", "sweep", "tauntaun", "unicorn", "usb", "water-can", "wine-glass"],
        datasets: [{
            label: '# of Votes',
            data: [5,3,6, 7, 5],
            backgroundColor: [
               'rgba(255, 99, 132, 0.2)',
               'rgba(54, 162, 235, 0.2)',
               'rgba(25, 200, 86, 0.2)',
               'rgba(75, 192, 192, 0.2)',
               'rgba(153, 103, 255, 0.2)',
               'rgba(255, 159, 64, 0.2)'
           ],
           borderColor: [
               'rgba(300, 25, 150, 1)',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 206, 86, 1)',
               'rgba(75, 192, 192, 1)',
               'rgba(153, 102, 255, 1)',
               'rgba(255, 159, 64, 1)'
           ],
           borderWidth: 5
       }]
   },
   options: {
       scales: {
           yAxes: [{
               ticks: {
                   beginAtZero:true
               }
           }]
       }
   }
});
}



var firstClick = 0;
var secondClick = 0;
var thirdClick = 0;

function handleClick(image){
  imageAppear();
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

renderChart();
handleClick();
