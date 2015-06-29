function setTitleContainerHeight() {
  var windowHeight = window.innerHeight;
  $('#title-container').css("height", windowHeight);
};

$(document).ready(function() {
  setTitleContainerHeight();
});

$(window).resize(function() {
  setTitleContainerHeight();
});
