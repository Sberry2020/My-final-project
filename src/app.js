function displayWeather(response){
  document.querySelector("#city").innerHTML = response.data.name;
 document.querySelector("#temperature").innerHTML = Math.round (response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML = response.data.weather[0].main;
  
}
function searchCity(city) {
let apiKey = "1e983fc1289e5b13249048fafebff087";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
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

let searchButton = document.querySelector("#button");
searchButton.addEventListener("submit", form);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemp);







  