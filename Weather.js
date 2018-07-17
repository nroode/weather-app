// User Story: I can see the weather in my current location.
// User Story: I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.
// User Story: I can push a button to toggle between Fahrenheit and Celsius.




$(getWeather);
$('#c').addClass('selected');

function getWeather() {

    navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        var apiUrl = "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139";
        var url2 = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + long ;

        console.log(lat);
        console.log(long);
        console.log(url2);

        $.getJSON(url2, function (response) {

            console.log(response)

            var tempResponse = response.main.temp
            var location = response.name;

            console.log(tempResponse)
            var tempCel = Math.floor(tempResponse) + "&#176;";
            console.log(tempCel)
           
            var tempFar = Math.floor(tempResponse*(9 / 5) + 32) + "&#176;";
            console.log(tempFar);
            
            $('#location').html(location);



            var weatherIcon = "wi-owm-" + response.weather[0].id;
            var imgUrl = "<i class='wi " + weatherIcon + "'></i>"
            $('#icon').html(imgUrl);


            $('#temp').html(tempCel);
            $('#type').html(response.weather[0].main);
            $('#description').html(response.weather[0].description);


            $('#f').on('click', fahrenheit)
            $('#c').on('click', celcius)

            function fahrenheit() {
                $('#temp').html(tempFar)
                $('#c').removeClass('selected');
                $('#f').addClass('selected');
            }

            function celcius() {
                $('#temp').html(tempCel)
                $('#f').removeClass('selected');
                $('#c').addClass('selected');
            }


        });

    });

};






