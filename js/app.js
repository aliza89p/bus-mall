function ImageData(imgSrc, imgName){
  this.imgSrc = imgSrc;
  this.imgName = imgName;
  this.numOfClicks = 0;
  this.numOfTimesDisplayed = 0;
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomImage(imgVar) {
  var randomNumber = getRandomIntInclusive(0, imageDataArray.length - 1);
  imgVar.src = imageDataArray[randomNumber].imgSrc;
  imgVar.id = imageDataArray[randomNumber].imgName;
  imageDataArray[randomNumber].numOfTimesDisplayed++;
  userChooseImage.appendChild(imgVar);
  imgVar.setAttribute('id', imgVar.id);
}

function displayThreeImages(imgOne, imgTwo, imgThree){
  createRandomImage(imgOne);
  createRandomImage(imgTwo);
  createRandomImage(imgThree);
}

function deleteImages(imgOne, imgTwo, imgThree){
  userChooseImage.removeChild(imgOne);
  userChooseImage.removeChild(imgTwo);
  userChooseImage.removeChild(imgThree);
}
var myButtons;
var createQuestions;
var createButtonContinue;
var createButtonChart;

function displayButtons(){
  myButtons = document.getElementById('buttonsHere');
  createQuestions = document.createElement('p');
  createButtonContinue = document.createElement('button');
  createButtonChart = document.createElement('button');
  createQuestions.textContent = 'You have chosen 25 images. Would you like to choose 10 more or see your results?';
  createButtonContinue.textContent = '10 more questions';
  createButtonChart.textContent = 'show my results';
  createButtonContinue.setAttribute('class', 'buttonsClass');
  createButtonChart.setAttribute('class', 'buttonsClass');
  createButtonContinue.setAttribute('id', 'continue');
  createButtonChart.setAttribute('id', 'chart');
  myButtons.appendChild(createQuestions);
  myButtons.appendChild(createButtonContinue);
  myButtons.appendChild(createButtonChart);
}

function deleteButtons(){
  myButtons.removeChild(createQuestions);
  myButtons.removeChild(createButtonContinue);
  myButtons.removeChild(createButtonChart);
}

function displayChart(){
  var canvasChart = document.getElementById('chart');
  var chartContext = canvasChart.getContext('2d');
  var data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fillColor: 'rgba(220,220,220,0.5)',
        strokeColor: 'rgba(220,220,220,0.8)',
        highlightFill: 'rgba(220,220,220,0.75)',
        highlightStroke: 'rgba(220,220,220,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: 'My Second dataset',
        fillColor: 'rgba(151,187,205,0.5)',
        strokeColor: 'rgba(151,187,205,0.8)',
        highlightFill: 'rgba(151,187,205,0.75)',
        highlightStroke: 'rgba(151,187,205,1)',
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  };
  var myBarChart = new Chart(chartContext).Bar(data);
}

var imageDataArray = [];

var imageBag = imageDataArray.push(new ImageData('img/bag.jpg', 'bag'));
var imageBanana = imageDataArray.push(new ImageData('img/banana.jpg', 'banana'));
var imageBathroom = imageDataArray.push(new ImageData('img/bathroom.jpg', 'bathroom'));
var imageBoots = imageDataArray.push(new ImageData('img/boots.jpg', 'boots'));
var imageBreakfast = imageDataArray.push(new ImageData('img/breakfast.jpg', 'breakfast'));
var imageBubblegum = imageDataArray.push(new ImageData('img/bubblegum.jpg', 'bubblegum'));
var imageChair = imageDataArray.push(new ImageData('img/chair.jpg', 'chair'));
var imageCthulhu = imageDataArray.push(new ImageData('img/cthulhu.jpg', 'cthulhu'));
var imagedogDuck = imageDataArray.push(new ImageData('img/dog-duck.jpg', 'dogDuck'));
var imageDragon = imageDataArray.push(new ImageData('img/dragon.jpg', 'dragon'));
var imagePen = imageDataArray.push(new ImageData('img/pen.jpg', 'pen'));
var imagePetSweep = imageDataArray.push(new ImageData('img/pet-sweep.jpg', 'petSweep'));
var imageScissors = imageDataArray.push(new ImageData('img/scissors.jpg', 'scissors'));
var imageShark = imageDataArray.push(new ImageData('img/shark.jpg', 'shark'));
var imageSweep = imageDataArray.push(new ImageData('img/sweep.png', 'sweep'));
var imageTauntaun = imageDataArray.push(new ImageData('img/tauntaun.jpg', 'tauntaun'));
var imageUnicorn = imageDataArray.push(new ImageData('img/unicorn.jpg', 'unicorn'));
var imageUsb = imageDataArray.push(new ImageData('img/usb.gif', 'usb'));
var imageWaterCan = imageDataArray.push(new ImageData('img/water-can.jpg', 'waterCan'));
var imageWineGlass = imageDataArray.push(new ImageData('img/wine-glass.jpg', 'wineGlass'));

var userChooseImage = document.getElementById('userChooseImage');
var imgOne = document.createElement('img');
imgOne.setAttribute('class', 'imagesClass');
console.log(imgOne);
var imgTwo = document.createElement('img');
imgTwo.setAttribute('class', 'imagesClass');
console.log(imgTwo);
var imgThree = document.createElement('img');
imgThree.setAttribute('class', 'imagesClass');
console.log(imgThree);

displayThreeImages(imgOne, imgTwo, imgThree);

var globalTotalClicks = 0;
var moreQuestions;

function userImageClickEvent(event){
  globalTotalClicks++;
  console.log('event.target', event.target);
  for(var i = 0; i < imageDataArray.length; i++){
    if(imageDataArray[i].imgName === event.target.id){
      imageDataArray[i].numOfClicks++;
    }
  }
  deleteImages(imgOne, imgTwo, imgThree);
  displayThreeImages(imgOne, imgTwo, imgThree);
  if (globalTotalClicks === 5){
    deleteImages(imgOne, imgTwo, imgThree);
    displayButtons();
    var trackButtonResponses = document.getElementById('continue');
    trackButtonResponses.addEventListener('click', buttonsClickEvent);
    var trackButtonResponses = document.getElementById('chart');
    trackButtonResponses.addEventListener('click', buttonsClickEvent);
    console.log('total clicks: ' + globalTotalClicks);
  }
  if (globalTotalClicks === 10){
    deleteImages(imgOne, imgTwo, imgThree);
    displayChart();
  }
}

var trackUserImageClicks = document.getElementsByClassName('imagesClass');
for (var i = 0; i < trackUserImageClicks.length; i++){
  trackUserImageClicks[i].addEventListener('click', userImageClickEvent);
}

function buttonsClickEvent(event){
  if (event.target.id === 'continue'){
    console.log('continue button working?');
    deleteButtons();
    displayThreeImages(imgOne, imgTwo, imgThree);
  }
  if (event.target.id === 'chart'){
    console.log('chart button working?');
    deleteButtons();
    displayChart();
  }
}
