function formatDate(timestamp) {
  let date = new Date(timestamp);
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = document.querySelector("#day").innerHTML = days[date.getDay()];

  return `${formatHours(timestamp)}`;
}
function  formatHours(timestamp){
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
}
  return `${hours}:${minutes}`;
}

function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
 document.querySelector("#temperature").innerHTML = Math.round (celsiusTemperature
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  
  document.querySelector("#description").innerHTML = response.data.weather[0].description;
  document.querySelector("#icon").setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  celsiusTemperature = response.data.main.temp;
  document.querySelector("#date").innerHTML = formatDate(response.data.dt * 1000);
 
}


function displayForecast(response) {
 
  let forecastElement = document.querySelector("#one");
   forecast = response.data.list[0];
 forecastElement.innerHTML = `
  <div class="col"><h5>${formatHours(forecast.dt * 1000)} </h5> <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"/>
  <strong class="number">${Math.round(forecast.main.temp_max)}°</strong> ${Math.round(forecast.main.temp_min)}°
 </div>`;
  
 let forecastElementTwo = document.querySelector("#two");
 forecast = response.data.list[1];
forecastElementTwo.innerHTML = `
<div class="col"><h5>${formatHours(forecast.dt * 1000)} </h5> <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"/>
<strong class="number">${Math.round(forecast.main.temp_max)}°</strong> ${Math.round(forecast.main.temp_min)}°
</div>`;
  
let forecastElementThree = document.querySelector("#three");
forecast = response.data.list[2];
forecastElementThree.innerHTML = `
<div class="col"><h5>${formatHours(forecast.dt * 1000)} </h5> <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"/>
<strong class="number">${Math.round(forecast.main.temp_max)}°</strong> ${Math.round(forecast.main.temp_min)}°
</div>`;
  
let forecastElementFour = document.querySelector("#four");
forecast = response.data.list[3];
forecastElementFour.innerHTML = `
<div class="col"><h5>${formatHours(forecast.dt * 1000)} </h5> <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"/>
<strong class="number">${Math.round(forecast.main.temp_max)}°</strong> ${Math.round(forecast.main.temp_min)}°
</div>`;
  
let forecastElementFive = document.querySelector("#five");
forecast = response.data.list[4];
forecastElementFive.innerHTML = `
<div class="col"><h5>${formatHours(forecast.dt * 1000)} </h5> <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"/>
<strong class="number">${Math.round(forecast.main.temp_max)}°</strong> ${Math.round(forecast.main.temp_min)}°
</div>`;
  
let forecastElementSix = document.querySelector("#six");
forecast = response.data.list[5];
forecastElementSix.innerHTML = `
<div class="col"><h5>${formatHours(forecast.dt * 1000)} </h5> <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"/>
<strong class="number">${Math.round(forecast.main.temp_max)}°</strong> ${Math.round(forecast.main.temp_min)}°
</div>`;
  }

function searchCity(city) {
let apiKey = "a812dde348aef759917fa847a384093f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
   apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(displayForecast);
}
function form(event){ 
  event.preventDefault()
 let city = document.querySelector("#inputPassword2").value;
searchCity(city);
}

function displayFahrenheitTemp(event) {
  event.preventDefault();
let fahrenheitTemp = (celsiusTemperature * 9) / 5 + 32;
  let temperatureElement = document.querySelector("#temperature");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  temperatureElement.innerHTML = Math.round(fahrenheitTemp);
} 

function displayCelsiusTemp(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}


let celsiusTemperature = null;

let searchButton = document.querySelector("#search-form");
searchButton.addEventListener("submit", form);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemp);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemp);







  