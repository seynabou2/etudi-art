$(document).ready(function () {
    $('.navbar-nav>li>a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
    });
  });
  
  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
    var slides = document.getElementsByClassName("slide");
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
   // setTimeout(showSlides, 2000); // Change image toutes les 2 secondes
  }
  
  function nextSlide() {
    var slides = document.getElementsByClassName("slide");
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }
  
  function previousSlide() {
    var slides = document.getElementsByClassName("slide");
    slideIndex--;
    if (slideIndex < 1) {slideIndex = slides.length}
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }
