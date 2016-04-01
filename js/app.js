function ImageData(imgSrc, imgName){
  this.imgSrc = imgSrc;
  this.imgName = imgName;
  this.numOfClicks = 0;
  this.numOfTimesDisplayed = 0;
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getThreeRandomIndexesArray(){
  var randomIndexOne = getRandomIntInclusive(0, imageDataArray.length - 1);

  var randomIndexTwo = randomIndexOne;
  while (randomIndexTwo === randomIndexOne){
    randomIndexTwo = getRandomIntInclusive(0, imageDataArray.length - 1);
  }

  var randomIndexThree = randomIndexOne;
  while (randomIndexThree === randomIndexOne || randomIndexThree === randomIndexTwo){
    randomIndexThree = getRandomIntInclusive(0, imageDataArray.length - 1);
  }
  return [randomIndexOne, randomIndexTwo, randomIndexThree];
}

function displayThreeImages() {
  var threeImageIndexes = getThreeRandomIndexesArray();
  for (var i = 0; i < threeImageIndexes.length; i++){
    var displayImage = document.createElement('img');
    displayImage.setAttribute('class', 'imagesClass');
    displayImage.setAttribute('id', imageDataArray[threeImageIndexes[i]].imgName);
    displayImage.setAttribute('src', imageDataArray[threeImageIndexes[i]].imgSrc);
    displayImage.addEventListener('click', userImageClickEvent);
    userChooseImage.appendChild(displayImage);
    imageDataArray[threeImageIndexes[i]].numOfTimesDisplayed++;
  }
}

function deleteImages(){
  userChooseImage.innerHTML = '';
}

function displayButtons(){
  createQuestions.textContent = 'You have chosen 25 images. Would you rather choose 10 more images or see your results?';
  createButtonContinue.textContent = '10 more questions';
  createButtonChart.textContent = 'Show my results';
  createButtonContinue.setAttribute('class', 'buttonsClass');
  createButtonChart.setAttribute('class', 'buttonsClass');
  createButtonContinue.setAttribute('id', 'continue');
  createButtonChart.setAttribute('id', 'chart');
  myButtons.appendChild(createQuestions);
  myButtons.appendChild(createButtonContinue);
  myButtons.appendChild(createButtonChart);
}

function deleteButtons(){
  myButtons.innerHTML = '';
}

function saveDataToStorage(){
  localStorage.setItem('imageData', JSON.stringify(imageDataArray));
}

function fetchDataFromStorage(){
  imageData = JSON.parse(localStorage.getItem('imageData'));
  if (imageData){
    console.log('user already has data');
    imageDataArray = imageData;
  }
  else {
    imageDataArray.push(new ImageData('img/bag.jpg', 'bag'));
    imageDataArray.push(new ImageData('img/banana.jpg', 'banana'));
    imageDataArray.push(new ImageData('img/bathroom.jpg', 'bathroom'));
    imageDataArray.push(new ImageData('img/boots.jpg', 'boots'));
    imageDataArray.push(new ImageData('img/breakfast.jpg', 'breakfast'));
    imageDataArray.push(new ImageData('img/bubblegum.jpg', 'bubblegum'));
    imageDataArray.push(new ImageData('img/chair.jpg', 'chair'));
    imageDataArray.push(new ImageData('img/cthulhu.jpg', 'cthulhu'));
    imageDataArray.push(new ImageData('img/dog-duck.jpg', 'dogDuck'));
    imageDataArray.push(new ImageData('img/dragon.jpg', 'dragon'));
    imageDataArray.push(new ImageData('img/pen.jpg', 'pen'));
    imageDataArray.push(new ImageData('img/pet-sweep.jpg', 'petSweep'));
    imageDataArray.push(new ImageData('img/scissors.jpg', 'scissors'));
    imageDataArray.push(new ImageData('img/shark.jpg', 'shark'));
    imageDataArray.push(new ImageData('img/sweep.png', 'sweep'));
    imageDataArray.push(new ImageData('img/tauntaun.jpg', 'tauntaun'));
    imageDataArray.push(new ImageData('img/unicorn.jpg', 'unicorn'));
    imageDataArray.push(new ImageData('img/usb.gif', 'usb'));
    imageDataArray.push(new ImageData('img/water-can.jpg', 'waterCan'));
    imageDataArray.push(new ImageData('img/wine-glass.jpg', 'wineGlass'));
    var userChooseImage = document.getElementById('userChooseImage');
  }
}

function displayChart(){
  var getCanvasChart = document.getElementById('canvasChartDisplay');
  var createCanvas = document.createElement('canvas');
  var createCanvasTitle = document.createElement('h1');
  createCanvasTitle.textContent = 'Your Data:';
  createCanvas.setAttribute('width', '700');
  createCanvas.setAttribute('height', '300');
  createCanvas.setAttribute('id', 'canvas');
  getCanvasChart.appendChild(createCanvasTitle);
  getCanvasChart.appendChild(createCanvas);
  var chartContext = createCanvas.getContext('2d');

  var labelArray = [];
  for (var i = 0; i < imageDataArray.length; i++){
    labelArray.push(imageDataArray[i].imgName);
  }
  var displayedDataArray = [];
  for (var i = 0; i < imageDataArray.length; i++){
    displayedDataArray.push(imageDataArray[i].numOfTimesDisplayed);
  }
  var clickedDataArray = [];
  for (var i = 0; i < imageDataArray.length; i++){
    clickedDataArray.push(imageDataArray[i].numOfClicks);
  }
  var percentClickedDataArray = [];
  for (var i = 0; i < imageDataArray.length; i++){
    var percentClick = Math.round((imageDataArray[i].numOfClicks / imageDataArray[i].numOfTimesDisplayed) * 100);
    if (isNaN(percentClick)){
      percentClickedDataArray.push(0);
    }else{
      percentClickedDataArray.push(percentClick);
    }
  };

  var data = {
    labels: labelArray,
    datasets: [
      {
        label: 'Times Displayed',
        fillColor: 'rgba(102,153,102,0.5)',
        strokeColor: 'rgba(102,153,102,0.8)',
        highlightFill: 'rgba(102,153,102,0.75)',
        highlightStroke: 'rgba(102,153,102,1)',
        data: displayedDataArray
      },
      {
        label: 'Times Clicked',
        fillColor: 'rgba(102,102,153,0.5)',
        strokeColor: 'rgba(102,102,153,0.8)',
        highlightFill: 'rgba(102,102,153,0.75)',
        highlightStroke: 'rgba(102,102,153,1)',
        data: clickedDataArray
      },
      {
        label: 'Percent of Time Clicked',
        fillColor: 'rgba(153,102,153,0.5)',
        strokeColor: 'rgba(153,102,153,0.8)',
        highlightFill: 'rgba(153,102,153,0.75)',
        highlightStroke: 'rgba(153,102,153,1)',
        data: percentClickedDataArray
      }
    ]
  };
  var myBarChart = new Chart(chartContext).Bar(data);
  saveDataToStorage();
}

var imageDataArray = [];
var myButtons = document.getElementById('buttonsHere');
var trackUserImageClicks = document.getElementsByClassName('imagesClass');
var createQuestions =  document.createElement('p');
var createButtonContinue = document.createElement('button');
var createButtonChart = document.createElement('button');

var globalTotalClicks = 0;
var imageData;

fetchDataFromStorage();
displayThreeImages();

function userImageClickEvent(event){
  globalTotalClicks++;
  console.log('event.target', event.target);
  for(var i = 0; i < imageDataArray.length; i++){
    if(imageDataArray[i].imgName === event.target.id){
      imageDataArray[i].numOfClicks++;
    }
  }
  deleteImages();
  displayThreeImages();
  if (globalTotalClicks === 25){
    deleteImages();
    displayButtons();
    var trackButtonResponses = document.getElementById('continue');
    trackButtonResponses.addEventListener('click', buttonsClickEvent);
    var trackButtonResponses = document.getElementById('chart');
    trackButtonResponses.addEventListener('click', buttonsClickEvent);
    console.log('total clicks: ' + globalTotalClicks);
  }
  if (globalTotalClicks === 35){
    deleteImages();
    displayChart();
  }
  saveDataToStorage();
}

function buttonsClickEvent(event){
  if (event.target.id === 'continue'){
    console.log('continue button working');
    deleteButtons();
    displayThreeImages();
  }
  if (event.target.id === 'chart'){
    console.log('chart button working');
    deleteButtons();
    displayChart();
  }
}
