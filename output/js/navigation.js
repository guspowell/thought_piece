var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;

function clickLearnMore() {
  $('html, body').animate({
    scrollTop: $("#introduction-container").offset().top
  }, 1000);
};

$(document).ready(function() {

  $(".primary-button.learn-more").click(function() {
    clickLearnMore();
  });

  console.log(mywindow.width())

});

mywindow.scroll(function () {
    newscroll = mywindow.scrollTop();
    if (newscroll > mypos && !up) {
        $('.navbar').stop().fadeOut(500);
        up = !up;
    } else if(newscroll < mypos && up) {
        $('.navbar').stop().fadeIn(500);
        up = !up;
    }
    mypos = newscroll;
});
