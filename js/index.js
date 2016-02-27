
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
var cityName;

for (var i = 0; i < cities.length; i++) {
	$("#city-options").append('<option value='+cities[i]+'>'+cities[i]+'</option>');
};


$("#city-options").on('change', function() {
	cityName = $("#city-options").find("option:selected").text();
	console.log(cityName);
	changePic();
});

function changePic () {


	if (cityName ===  "NYC") {
	$('body').css("background", "url('images/nyc.jpg')");

	//check if city name is San Francisco or Bay Area or SF and swap out background image to sf.jpg
	}else if (cityName === "SF") {
		$('body').css("background", "url('images/sf.jpg')");

	//check if city name is Los Angeles or LA or LAX and swap out background image to la.jpg
	}else if (cityName === "LA") {
		$('body').css("background", "url('images/la.jpg')");

	//check if city name is Austin or ATX and swap out background image to austin.jpg
	}else if (cityName === "ATX") {
		$('body').css("background", "url('images/austin.jpg')");

	//check if city name is Sydney or SYD and swap out background image to sydney.jpg
	}else if (cityName === "SYD") {
		$('body').css("background", "url('images/sydney.jpg')");
	};

	$('#city-type').val('');
}

// function changePic () {

// 	//grab the entry from the input field
// 	var cityName = $('#city-type').val();

// 	//check if city name is New York or New York City or NYC and swap out background image to nyc.jpg
// 	if (cityName === "New York" || cityName === "New York City" || cityName === "NYC") {
// 		$('body').css("background", "url('images/nyc.jpg')");

// 	//check if city name is San Francisco or Bay Area or SF and swap out background image to sf.jpg
// 	}else if (cityName === "San Francisco" || cityName === "Bay Area" || cityName === "SF") {
// 		$('body').css("background", "url('images/sf.jpg')");

// 	//check if city name is Los Angeles or LA or LAX and swap out background image to la.jpg
// 	}else if (cityName === "Los Angeles" || cityName === "LA" || cityName === "LAX") {
// 		$('body').css("background", "url('images/la.jpg')");

// 	//check if city name is Austin or ATX and swap out background image to austin.jpg
// 	}else if (cityName === "Austin" || cityName === "ATX") {
// 		$('body').css("background", "url('images/austin.jpg')");

// 	//check if city name is Sydney or SYD and swap out background image to sydney.jpg
// 	}else if (cityName === "Sydney" || cityName === "SYD") {
// 		$('body').css("background", "url('images/sydney.jpg')");
// 	};

// 	$('#city-type').val('');
// };



//when the form is submitted, prevent the form from submitting and also call a function to change the picture

// $('form').on('submit', function(event) {
// 	event.preventDefault();
// 	changePic();
// });



