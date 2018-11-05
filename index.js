// Future Diary

/*
Exchange a diary with my self. Allow a user to type a diary, store data (possibly, somewhere online like a server). After 14 diary stored, start to release their diary. 
Inputs are going to be date, text input, and also images. 
*/
/*var response = {
   "success": true,
   "forecast":[ 
      { "high": "88", "low": "72", "desc": "cloudy" },
      { "high": "95", "low": "70", "desc": "sunny" },
      { "high": "89", "low": "67", "desc": "rain" },
      { "high": "90", "low": "68", "desc": "cloudy" },
      { "high": "91", "low": "70", "desc": "partly cloudy" }
   ]
}; */

/*
Display the current temperature, the pressure in hPa, the humidity in %, the % of cloud cover, and the name of the city
*/

window.onload = function() {
    document.getElementById('search').addEventListener('click', function() {
        // Get ZIP Code from input
        var zipcode = document.getElementById('zip').value;

        // Make an Ajax request to https://wp.zybooks.com/weather.php
        // with the entered ZIP code passed in query string.
        // 1) Make a new request
        var xhr = new XMLHttpRequest(); 

        // 2) define an onload handler
        xhr.onload = function() {
          // check the response status - OK?

            // get the forecast from the response
            var response = xhr.response;
            var forecast = "";

            // Update Forecast with data
            var html = "";
            html += "<h1>Forecast</h1>";
            html += "<ol>";
            //var forecast = response.forecast;

            // build the list of forecasts
            forecast.forEach(function(response) {
                html += "<li>current temperature is " + response.main.temp + "</li>";
                html += "<li>pressure in hPa is " + response.main.pressure + "</li>";
                html += "<li>humidity in % is " + response.main.humidity + "</li>";
                html += "<li>% of cloud cover is " + response.clouds + "</li>";
                html += "<li>name of the city is " + response.name + "</li>";
            });
            // close the ordered list
            html += "</ol>";

            // put the data in the document
            document.getElementById('forecast').innerHTML = html;
          }
          else {
              // unsuccessful lookup of weather
              // handle the error reporting
              var html = '<h1>Error: ' + xhr.response.error + '</h1>';
              document.getElementById('forecast').innerHTML = html;
          }
        };

        // 3) open the XMLHTTP Request
        zipcpde = getElementsById("zip");
        xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?us&APPID=a6f9a3396fe56862e52a26fec6940a76&units=imperial&zip="+zipcode+",us");

        // 4) set the type of data the response contains
        xhr.responseType = 'json';

        // 5) send the response
        xhr.send();
    });
    
    document.getElementById("zip").addEventListener("change", function(){
        // remove the previous forecast
        document.getElementById("forecast").innerHTML = "";
    });
}
