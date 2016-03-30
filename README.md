# bus-mall
## What it does:  
- displays three images (randomly selected) side by side  
- When an image is clicked, it clears the images and shows three new randomly selected images  
- Each time an image is displayed, it is tracked  
- Each time an image is clicked, it is tracked  
- Each time a user clicks an image, it is tracked  
- The images stop showing up after 25 total clicks  
## How:  
- Created an html file including an empty <div id = "userChooseImage"> element
- In JavaScript file, created an object constructor called ImageData. This gives every image its own object with properties for the image source, name, number of clicks, and number of times it was displayed  
- Included a function that randomizes parameters, a function that generates a random image, a function that displays three images to the page, and a function that removes three images from the page  
- Created a variable with an empty array to store all of the image objects  
- Push image data for each file into the object constructor and then push each object into the array  
- Find the 'userChooseImage' id and create three new <img> elements all in the same class  
- run function to display these new images  
- add event listener for users clicking on the images  
- run event handler which tracks total clicks overall and total clicks per image  
  -  For first 25 images, run function to delete the three images followed by function to generate three more images. Otherwise, alert that they have made 25 clicks.  
