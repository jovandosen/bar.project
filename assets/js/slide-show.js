var interval = 0;

$(document).ready(function(){

	slideShow();

});

function slideShow()
{
	var images = ['foo.jpg', 'bar.jpg', 'baz.jpg', 'dev.jpg', 'test.jpg'];

	var imageCount = images.length;

	$("#slide-show-container").css({"display":"none"});

	if( interval >= imageCount ){
		interval = 0;
	}

	if( interval < imageCount ){
		$("#slide-show-container").css({"display":"block"});
		$("#image").attr("src", "/../assets/images/" + images[interval]);
		interval++;
	} 

	setTimeout(slideShow, 2000);
}