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

//     $(".form-validate").each(function(){
//   $(this).validate({
//     errorClass: "invalid",
//     messages: {
//     name: { 
//      required: "Please enter your name",
//      minlength: "The name must be at least two letters"
//     },
//     email: {
//       required: "We need your email address to contact you",
//       email: "Your email address must be in the format of name@domain.com"
//     },
//     message: {
//       required: "This field is required",
//     },
//   },
//   });
// });















  // let validateForms = function (selector, rules, seccessModal, yaGoal) {
  //   new window.JustValidate(selector, {
  //     rules: rules,
  //     submitHandler: function(form){
  //       let formData = new FormData(form);
  //       let xhr = new XMLHttpRequest();

  //       xhr.onreadystatechange = function () {
  //         if (xhr.readyState === 4) {
  //           if (xhr.status === 200) {
  //             console.log('Отправлено');
  //           }
  //         }
  //       }

  //       xhr.open('POST', 'send.php', true);
  //       xhr.send(formData);

  //       form.reset();
  //     }
  //   });
  // }

  // validateForms('.about-form', {email:{required: true, email: true}, name: {required: true, minlength: 3}, comment: {required: true}}, )


});



