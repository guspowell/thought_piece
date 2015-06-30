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

function verticallyAlignOverlayText() {
  $("#bottom-navigation .article").each(function() {
    var containerHeight = $(this).height();
    var textHeight = $(this).find(".article-information-mobile").height();
    var padding = 20;
    var topMargin = (containerHeight/2) - (textHeight/2) - padding;
    console.log(textHeight);
    console.log(containerHeight);
    $(this).find(".article-information-mobile").css("top", topMargin);
  });
}

$(document).ready(function() {
  setTitleContainerHeight();
  setOtherArticleArrowHeight();
  verticallyAlignOverlayText();
});

$(window).resize(function() {
  setTitleContainerHeight();
});
