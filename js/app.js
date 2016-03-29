var imageDataArray = [];

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
var imageSweep = imageDataArray.push(new ImageData('img/sweep.jpg', 'sweep'));
var imageTauntaun = imageDataArray.push(new ImageData('img/tauntaun.jpg', 'tauntaun'));
var imageUnicorn = imageDataArray.push(new ImageData('img/unicorn.jpg', 'unicorn'));
var imageWaterCan = imageDataArray.push(new ImageData('img/water-can.jpg', 'waterCan'));
var imagWineGlass = imageDataArray.push(new ImageData('img/wine-glass.jpg', 'wineGlass'));

















//
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
//
// function userImageClickEvent(event){
//
// }
//
// var trackUserImageClicks = document.getElementsByClassName('imageOption');
//
// for (var i = 0; i < trackUserImageClicks.length; i++){
//   trackUserImageClicks[i].addEventListener('click', userImageClickEvent);
// }
