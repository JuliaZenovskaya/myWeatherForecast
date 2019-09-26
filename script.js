
function myButtonOnClickListener(){
    let city = document.getElementById("input-field").value;
    let request = new XMLHttpRequest();
    let requestURL = "https://api.openweathermap.org/data/2.5/weather?q="
        + city +
        "&appid=e972dcd233bab1ebce419c370711921f&units=metric&lang=en";

    request.open("GET", requestURL);
    request.responseType = "json";

    request.onload = function () {
        if (request.status == 200) {
            let data = extractForecast(request.response);
            displayWeather(data);
        }
        else {
            alert(request.response.message);
        }
    }
    request.send();
}


function displayWeather(forecast) {
    var source = document.getElementById("weather-template").innerHTML;
    var template = Handlebars.compile(source);

    var html = template(forecast);
    document.getElementById("weather-container").innerHTML = html;
}

function extractForecast(response) {
    let forecast =
    {
        "city": response.name,
        "main": response.weather[0].description,
        "parameters":
            [
                { "type": "Temperature", "value": response.main.temp, "units": "&deg;C"},
                { "type": "Pressure", "value": response.main.pressure, "units": "hPa"},
                { "type": "Wind speed", "value": response.wind.speed, "units": "m/s"},
                { "type": "Humidity", "value": response.main.humidity, "units": "%"},
                { "type": "Clouds", "value": response.clouds.all, "units": "%"},
                { "type": "Visibility", "value": response.visibility, "units": "m"},
            ],
    };

    return forecast;
}
