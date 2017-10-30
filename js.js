var $overlay = $('<div id="overlay"></div>');
var $img = $("<img>");
var $caption = $("<p></p>");
/* Lightbox Script */
$overlay.append($img);
$overlay.append($caption);
$("body").append($overlay);
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  $img.attr("src", imageLocation);
  $overlay.show();
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

$overlay.click(function(){
  $overlay.hide();
});