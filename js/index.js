

function changePic () {

	//grab the entry from the input field
	var cityName = $('#city-type').val();

	//check city name
	if (cityName === "New York" || cityName === "New York City" || cityName === "NYC") {
		$('body').css("background", "url('images/nyc.jpg')");
	}else if (cityName === "San Francisco" || cityName === "Bay Area" || cityName === "SF") {
		$('body').css("background", "url('images/sf.jpg')");
	}

};


$('form').on('submit', function(event) {
	event.preventDefault();
	changePic();
});

		// window.alert(cityName);


