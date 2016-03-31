function ImageData(imgSrc, imgName){
  this.imgSrc = imgSrc;
  this.imgName = imgName;
  this.numOfClicks = 0;
  this.numOfTimesDisplayed = 0;
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayThreeImages() {
  for (var i = 0; i < 3; i++){
    var randomNumber;
    randomNumber = getRandomIntInclusive(0, imageDataArray.length - 1);
    var displayImage = document.createElement('img');
    displayImage.setAttribute('class', 'imagesClass');
    displayImage.setAttribute('id', imageDataArray[randomNumber].imgName);
    displayImage.setAttribute('src', imageDataArray[randomNumber].imgSrc);
    displayImage.addEventListener('click', userImageClickEvent);
    userChooseImage.appendChild(displayImage);
    imageDataArray[randomNumber].numOfTimesDisplayed++;
  }
}

function deleteImages(){
  userChooseImage.innerHTML = '';
}

function displayButtons(){
  createQuestions.textContent = 'You have chosen 25 images. Would you like to choose 10 more or see your results?';
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

function displayChart(){
  var canvasChart = document.getElementById('canvasChartDisplay');
  var chartContext = canvasChart.getContext('2d');
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
        fillColor: 'rgba(220,220,220,0.5)',
        strokeColor: 'rgba(220,220,220,0.8)',
        highlightFill: 'rgba(220,220,220,0.75)',
        highlightStroke: 'rgba(220,220,220,1)',
        data: displayedDataArray
      },
      {
        label: 'Times Clicked',
        fillColor: 'rgba(151,187,205,0.5)',
        strokeColor: 'rgba(151,187,205,0.8)',
        highlightFill: 'rgba(151,187,205,0.75)',
        highlightStroke: 'rgba(151,187,205,1)',
        data: clickedDataArray
      },
      {
        label: 'Percent of Time Clicked',
        fillColor: 'rgba(151,187,205,0.5)',
        strokeColor: 'rgba(151,187,205,0.8)',
        highlightFill: 'rgba(151,187,205,0.75)',
        highlightStroke: 'rgba(151,187,205,1)',
        data: percentClickedDataArray
      }
    ]
  };
  var myBarChart = new Chart(chartContext).Bar(data);
}
var imageDataArray = [];
var myButtons = document.getElementById('buttonsHere');
var trackUserImageClicks = document.getElementsByClassName('imagesClass');
var createQuestions =  document.createElement('p');
var createButtonContinue = document.createElement('button');
var createButtonChart = document.createElement('button');
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
var globalTotalClicks = 0;

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
