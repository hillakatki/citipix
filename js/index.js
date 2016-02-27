
//setting up an array to build the dropdown
var cities = ["Pick a city!", "NYC", "SF", "LA", "ATX", "SYD"];
var cityName;

//using a loop to build the dropdown with each element of the array
for (var i = 0; i < cities.length; i++) {
	$("#city-options").append('<option value='+cities[i]+'>'+cities[i]+'</option>');
};

//when the dropdown item is selected, this function will run
$("#city-options").on('change', function() {
	//assigning a variable cityName to the dropdown option that is selected
	cityName = $("#city-options").find("option:selected").val();
	console.log(cityName);
	//running the function changePic
	changePic();
});

//changePic will change the background photo depending on the cityName
function changePic () {
	
	//check if city name is NYC and swap out background image to nyc.jpg
	if (cityName ===  "NYC") {
		$('body').css("background", "url('images/nyc.jpg')");

	//check if city name is SF and swap out background image to sf.jpg
	}else if (cityName === "SF") {
		$('body').css("background", "url('images/sf.jpg')");

	//check if city name is LA and swap out background image to la.jpg
	}else if (cityName === "LA") {
		$('body').css("background", "url('images/la.jpg')");

	//check if city name is ATX and swap out background image to austin.jpg
	}else if (cityName === "ATX") {
		$('body').css("background", "url('images/austin.jpg')");

	//check if city name is SYD and swap out background image to sydney.jpg
	}else if (cityName === "SYD") {
		$('body').css("background", "url('images/sydney.jpg')");
	
	//if city name is none of the above, swap out background image to original image
	}else
		$('body').css("background", "url('images/citipix_skyline.jpg')");

};

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



