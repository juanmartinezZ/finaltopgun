let slideIndex = 0;

// List resources
var resources = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg"];

var imgContainer = document.getElementById("img1");
img1.src = resources[0];

var mySlides = document.getElementById("mySlides");
mySlides.style.display = "block";

var numbertext = document.getElementById("numbertext");

function plusSlides(n) {
  if((n > 0 && slideIndex < 3) || (n < 0 && slideIndex > 0)){
    showSlides(slideIndex += n);
  }
}

function showSlides(n) {
    var resources = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg"];
    img1.src = resources[n];
    numbertext.innerHTML = slideIndex+1 + "/4"; 
}
