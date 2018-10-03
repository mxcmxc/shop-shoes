$(document).ready(() => {

  $('.login-button').on('click', () => {
    $('.login-form').toggle();
    $('.login-button').toggleClass('button-active');
  });

  //make the individual product photos zoom in when someone hovers over them
  $('.product-photo').on('mouseenter', () => {
    $('.product-photo').addClass('photo-active');
  }).on('mouseleave', function() {
    $('.product-photo').removeClass('photo-active');
  });

  $('.menu-button').on('click', () => {
    $('.menu-button').toggleClass('button-active');
    $('.nav-menu').toggleClass('hide');
  });

  $('.shoe-details').show();

  $('.more-details-button').on('click', event => {
    $(event.currentTarget).closest('.product-details').next().toggle();
    $(event.currentTarget).find('img').toggleClass('rotate');
  });

  $('.shoe-details li').on('click', event => {
    $(event.currentTarget).addClass('active');
    $(event.currentTarget).siblings().removeClass('active');
    $(event.currentTarget).closest('.shoe-details').children().removeClass('disabled');
  });

});



