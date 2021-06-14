$(document).ready(function(){
$('.slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  variableWidth: true,
  speed: 500,
  easing: 'ease',



});
});



var menuButton = document.querySelector(".burger");
menuButton.addEventListener("click", function (){
document
.querySelector(".drop-menu")
.classList.toggle("drop-menu--visible");
});

var closeButton = document.querySelector(".drop-menu__close");
closeButton.addEventListener("click", function (event){
  event.preventDefault();
document
var menuClose = $(".drop-menu");
menuClose.removeClass ("drop-menu--visible")
});

$('.hero__link').hover(
       function(){ $(this).addClass('hero__link--active') },
       function(){ $(this).removeClass('hero__link--active') }
);