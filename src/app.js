function displayWeather(response){
  document.querySelector("#city").innerHTML = response.data.name;
 document.querySelector("#temperature").innerHTML = Math.round (response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML = response.data.weather[0].main;
  document.querySelector("#icon").setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}
function searchCity(city) {
let apiKey = "a812dde348aef759917fa847a384093f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(displayWeather);
}
function form(event){ 
  event.preventDefault()
 let city = document.querySelector("#inputPassword2").value;
searchCity(city);
}

function displayFahrenheitTemp(event) {
  event.preventDefault();
  let fahrenheitTemp = (25 * 9) / 5 + 32;
  alert(fahrenheitTemp);
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = `${currentTime}`;

let searchButton = document.querySelector("#search-form");
searchButton.addEventListener("submit", form);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemp);







  