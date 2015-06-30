function setTitleContainerHeight() {
  var windowHeight = window.innerHeight;
  $('#title-container').css("height", windowHeight);
};

function setOtherArticleArrowHeight() {
  var leftTextHeight = $("#bottom-navigation .previous-article-text").height();
  var rightTextHeight = $("#bottom-navigation .next-article-text").height();
  console.log(leftTextHeight);
  if( leftTextHeight > rightTextHeight ) {
    $("#bottom-navigation.container img.arrow").css("height", leftTextHeight);
  } else {
    $("#bottom-navigation.container img.arrow").css("height", rightTextHeight);
  }
};

$(document).ready(function() {
  setTitleContainerHeight();
  setOtherArticleArrowHeight();
});

$(window).resize(function() {
  setTitleContainerHeight();
});
