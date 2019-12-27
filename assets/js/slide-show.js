var interval = 0;

$(document).ready(function(){

	slideShow();

});

function slideShow()
{
	var images = ['foo.jpg', 'bar.jpg', 'baz.jpg', 'dev.jpg', 'test.jpg', 'develop.jpg', 'ddd.jpg', 'img_forest.jpg', 'download1.jpg'];

	var imageCount = images.length;

	$("#image").remove();

	if( interval >= imageCount ){
		interval = 0;
	}

	if( interval < imageCount ){
		$("#slide-show-container").append('<img id="image" src="" width="800px" height="500px" class="fade" />');
		$("#image").attr("src", "/../assets/images/" + images[interval]);
		interval++;
	} 

	setTimeout(slideShow, 2000);
}