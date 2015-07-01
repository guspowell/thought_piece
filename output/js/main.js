function setTitleContainerHeight() {
  var windowHeight = window.innerHeight;
  var buttonHeight = 37;
  var setHeight = windowHeight - buttonHeight - 50;
  $('#title-container').css("height", setHeight);
  $('#title-container .overlay').css("height", setHeight);
};

function verticallyAlignTitleContent() {
    var containerHeight = $("#title-container").height();
    var contentHeight = $("#title-container .title-content").height();
    var topMargin = (containerHeight/2) - (contentHeight/2);
    console.log(topMargin);
    $("#title-container .title-content").css("margin-top", topMargin);
}

function setOtherArticleArrowHeight() {
  var leftTextHeight = $("#bottom-navigation .previous-article-text").height();
  var rightTextHeight = $("#bottom-navigation .next-article-text").height();
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
    $(this).find(".article-information-mobile").css("top", topMargin);
  });
}

function removePaddingForMobile() {
  $(".image-container .col-md-4").each(function() {
    $(this).removeAttr("style")
  });
};

$(document).ready(function() {
  setTitleContainerHeight();
  setOtherArticleArrowHeight();
  verticallyAlignOverlayText();
  verticallyAlignTitleContent();
  removePaddingForMobile()
});

$(window).resize(function() {
  setTitleContainerHeight();
  verticallyAlignTitleContent()
  removePaddingForMobile()
});
