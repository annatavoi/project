let now = new Date();

let currentDate = document.querySelector(".date");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

currentDate.innerHTML = `${days[now.getDay()]}`;

let currentTime = document.querySelector(".time");
let hour = now.getHours();
let minutes = now.getMinutes();

currentTime.innerHTML = `${hour}:${minutes}`;

function getTemp(response) {
  document.querySelector(".currentCity").innerHTML = response.data.name;
  document.querySelector(".temperatureResult").innerHTML = `${Math.round(
    response.data.main.temp
  )} °C`;
}

function searchCity(city) {
  let apiKey = "273346a7322f8fd8336a2edf5af47985";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getTemp);
}

function submitCity(event) {
  event.preventDefault();
  let city = document.querySelector("#cityname").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "273346a7322f8fd8336a2edf5af47985";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(getTemp);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let form = document.querySelector("#weather-form");
form.addEventListener("submit", submitCity);

//function convertToCelsius() {
//let currentTemp = document.querySelector(".temperatures");
//currentTemp.innerHTML = "24°";
//}

//let celsiusTemp = document.querySelector("#celsius");
//celsiusTemp.addEventListener("click", convertToCelsius);

//function convertToFahrenheit() {
//let currentTemp = document.querySelector(".temperatures");
//currentTemp.innerHTML = "67°";
//}

//let fahrenheitTemp = document.querySelector("#fahrenheit");
//fahrenheitTemp.addEventListener("click", convertToFahrenheit);
//

//function submitCity(event) {
//  event.preventDefault();
//  let apiKey = `273346a7322f8fd8336a2edf5af47985`;
//  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//  let city = document.querySelector("#cityname").value;
//  axios.get(apiUrl).then(getTemp);
//}

//
//function getTemp(response) {
//console.log(response.data);
//let tempresult = document.querySelector(".temperatureResult");
//let temp = Math.round(response.data.main.temp);
//tempresult.innerHTML = `${temp}.`;
//}
