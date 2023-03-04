$(document).ready(function () {
  $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
  });
});
var abbrClick = document.getElementsByClassName("me");

  for (var i = 0; i < abbrClick.length; i++) {
    abbrClick[i].addEventListener("click", function() {
      alert(this.title);
    })
  }