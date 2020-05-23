const https = require("https");
const http = require("http");

const api_key = "94a487c9f8613eb4dfb34723886341c1"
const city = 'folkestone'

function printError(error) {
    console.error(error.message);
  }

function printWeather(weather){
    const message = `In ${weather.name} the current temperature is ${weather.main.temp} Kelvin`;
    console.log(message);
  }

const request = http.get(
  `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`,
  (response) => {
    let body = "";
    response.on("data", (data) => {
      body += data.toString();
    });

    response.on("end", () => {
            const weather = JSON.parse(body)
            console.log(weather)
            printWeather(weather)
    })
  } 
);

