var imageDataArray = [];
var globalTotalClicks = 0;
var globalImageDisplayedTotal = 0;

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ImageData(imgSrc, imgName){
  this.imgSrc = imgSrc;
  this.imgName = imgName;
  this.numOfClicks = 0;
  this.numOfTimesDisplayed = 0;
}

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

function createRandomImage(imgId) {
  var randomNumber = getRandomIntInclusive(0, imageDataArray.length - 1);
  // var randomImage = imageDataArray[randomNumber];
  imgId.src = imageDataArray[randomNumber].imgSrc;
  userChooseImage.appendChild(imgId);
}

function deleteImages(){
  userChooseImage.removeChild(imgOne);
  userChooseImage.removeChild(imgTwo);
  userChooseImage.removeChild(imgThree);
}

var userChooseImage = document.getElementById('userChooseImage');
var imgOne = document.createElement('img');
imgOne.className += 'userChooseImage';
var imgTwo = document.createElement('img');
imgTwo.className += 'userChooseImage';
var imgThree = document.createElement('img');
imgThree.className += 'userChooseImage';

function displayThreeImages(){
  createRandomImage(imgOne);
  createRandomImage(imgTwo);
  createRandomImage(imgThree);
}

displayThreeImages();

function userImageClickEvent(event){
  globalTotalClicks++;
  console.log(event.target);
  if (globalTotalClicks < 25) {
    deleteImages();
    displayThreeImages();
  }
  else {
    deleteImages();
    alert('you clicked 25 times');
  }
}

var trackUserImageClicks = document.getElementsByClassName('userChooseImage');

for (var i = 0; i < trackUserImageClicks.length; i++){
  trackUserImageClicks[i].addEventListener('click', userImageClickEvent);
}

// function addImages(){
//   var userChooseImage = document.getElementById('userChooseImage');
//   var createImgElement1 = document.createElement('imageClick');
//   var createImgElement2 = document.createElement('imageClick');
//   var createImgElement3 = document.createElement('imageClick');
//   for (var i = 0; i < allImages.length; i++){
//     createImgElement1.textContent = allImages[i];
//     createImgElement2.textContent = allImages[i];
//     createImgElement3.textContent = allImages[i];
//   }
//   userChooseImage.appendChild(createImgElement1);
//   userChooseImage.appendChild(createImgElement2);
//   userChooseImage.appendChild(createImgElement3);
// }
