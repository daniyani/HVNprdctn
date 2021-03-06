$(document).ready(function () {
  $('.slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    speed: 500,
    easing: 'ease',



  });



  var modalButton = $('.burger');
  var modalClose = $('.close');
  var closeOverlay = $('.overlay')
  modalButton.on("click", openModal);
  modalClose.on("click", closeModal);
  function openModal(event) {
    event.preventDefault();
    var modalOverlay = $(".overlay");
    var modalMenu = $(".drop-menu");
    var logoOpacity = $(".opacity-logo")
    var closeOpacity = $(".opacity-close")
    modalOverlay.addClass("overlay--visible");
    modalMenu.addClass("drop-menu--visible");
    logoOpacity.addClass("opacity-logo--visible")
    closeOpacity.addClass("opacity-close--visible")

  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".overlay");
    var modalMenu = $(".drop-menu");
    modalOverlay.removeClass("overlay--visible");
    modalMenu.removeClass("drop-menu--visible");
  }

  $(document).on('keydown', function (e) {
    if (e.which === 27) {
      var modalOverlay = $(".overlay");
      var modalDialog = $(".drop-menu");
      modalOverlay.removeClass("overlay--visible")
      modalDialog.removeClass("drop-menu--visible")

    }
  });

  $(document).click(function (event) {
    if (!$(event.target).closest(".drop-menu, [data-toggle=modal]").length) { $("body").find(".overlay").removeClass("overlay--visible"); $('body').removeClass("overflow") }
  });

  $(document).click(function (event) {
    if (!$(event.target).closest(".drop-menu, [data-toggle=modal]").length) { $("body").find(".drop-menu").removeClass("drop-menu--visible"); $('body').removeClass("overflow") }
  });


  $('.hero__link').hover(
    function () { $(this).addClass('hero__link--active') },
    function () { $(this).removeClass('hero__link--active') }
  );

$('.about-form').validate({
   success: function(label) {
    label.addClass("valid")
  }
});


});



