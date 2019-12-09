$(document).ready(function(){

	var page = 1;

	var usersCount = 0;

	getAllUsers(page, usersCount);

});

function getAllUsers(page, usersCount)
{
	$.ajax({
		url: "External.php",
		method: "POST",
		data: {
			currentPage: page,
			currentCount: usersCount
		},
		beforeSend: function(){
			$("#load-more").remove();
			$("#wrapper table").append("<tr id='spiner'><td colspan='6'><i class='fa fa-refresh fa-spin' style='font-size:24px'></i></td></tr>");
		},
		error: function(){
			console.log('Error');
		},
		success: function(response){

			$("#spiner").remove();

			var users = [];

			users = JSON.parse(response);

			var totalRecords = users.total;

			var pageDetail = users.pageDetail;

			var usersCountDetail = users.usersCountDetail;

			pageDetail = parseInt(pageDetail);

			usersCountDetail = parseInt(usersCountDetail);

			users = users.data;

			var usersLength = users.length;

			usersCountDetail = usersCountDetail + usersLength;

			if( usersLength > 0 ){

				for(var i = 0; i < usersLength; i++){
					$("#wrapper table").append("<tr><td>"+users[i].id+"</td><td>"+users[i].firstName+"</td><td>"+users[i].lastName+"</td><td>"+users[i].email+"</td><td>"+users[i].created_at+"</td><td>"+users[i].updated_at+"</td></tr>");
				}

				if( usersCountDetail < totalRecords ){
					pageDetail = pageDetail + 1;
					$("#wrapper table").append("<tr><td colspan='6' id='load-more'><a href='javascript:void(0)' onclick='getAllUsers("+pageDetail+", "+usersCountDetail+")'>Load More</a></td></tr>");
				}

			}

		}
	});
}