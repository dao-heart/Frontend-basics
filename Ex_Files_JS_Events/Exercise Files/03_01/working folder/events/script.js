
document.querySelector("img.preview").addEventListener('click', function(e){
let overlay = e.target.parentElement.querySelector('div.overlay')
// Activate Spinner
overlay.style.display = "block";
let mySpinner = document.createElement('img')

mySpinner.src= "images/spinner.gif"
mySpinner.className = "spinner"
overlay.appendChild(mySpinner)



// Set time out util the images are append
var myNewPic = document.createElement("img") 
var oldImageSrc = e.target.src
myNewPic.src = oldImageSrc.substr(0,oldImageSrc.length-7) + ".jpg"
overlay.appendChild(myNewPic)

myNewPic.addEventListener("load", function(){
    mySpinner.parentNode.removeChild(mySpinner)
} )

},false)