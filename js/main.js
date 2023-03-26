$(function(){
  $('.menu-btn').on('click', function(){
    $('.menu').toggleClass('is-active');
  });
  $(".openbtn").click(function () {
    $(this).toggleClass('active');
});

  $("#sp-store").click(function () {
    $(".openbtn").toggleClass('active');
    $('.menu').toggleClass('is-active');
});
  $("#sp-item").click(function () {
    $(".openbtn").toggleClass('active');
    $('.menu').toggleClass('is-active');
});
  $("#sp-recipe").click(function () {
    $(".openbtn").toggleClass('active');
    $('.menu').toggleClass('is-active');
});
  $("#line-up").click(function () {
    $(".openbtn").toggleClass('active');
    $('.menu').toggleClass('is-active');
});
}());
