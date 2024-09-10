const apiKey = "415392511723012aced504b10a399bfd";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?appid=" +
  apiKey +
  "&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city);
  const data = await response.json();
  console.log(data);

  if (data.cod === 200) {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
  } else {
    alert("City Name not found! Please Enter a valid city name");
  }
}

searchButton.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
