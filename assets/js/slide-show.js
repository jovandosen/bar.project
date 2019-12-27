var interval = 0;

var dotCount = 0;

$(document).ready(function(){

	slideShow();

});

function slideShow()
{
	var images = ['foo.jpg', 'bar.jpg', 'baz.jpg', 'dev.jpg', 'test.jpg', 'develop.jpg', 'ddd.jpg', 'img_forest.jpg', 'download1.jpg'];

	var imageCount = images.length;

	if( dotCount == 0 ){
		for(var i = 0; i < imageCount; i++){
			$("#image-dots").append('<div class="dot" id="div'+i+'"></div>');
		}
		dotCount++;
	}

	$("#image").remove();

	if( interval > 0 ){
		var x = interval - 1;
		$("#div"+x).removeClass("active");
	}

	if( interval >= imageCount ){
		interval = 0;
	}

	if( interval < imageCount ){
		$("#slide-show-container").append('<img id="image" src="" width="800px" height="500px" class="fade" />');
		$("#image").attr("src", "/../assets/images/" + images[interval]);
		$("#div"+interval).addClass("active");
		interval++;
	} 

	setTimeout(slideShow, 2000);
}