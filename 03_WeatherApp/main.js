const apiKey = "415392511723012aced504b10a399bfd";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?appid=" +
  apiKey +
  "&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector('.weather-icon')

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

      if(data.weather[0].main== 'Clouds'){
        weatherIcon.src = "image/clouds.png"
      }else if(data.weather[0].main== 'Rain'){
        weatherIcon.src = "image/rain.png"
      }else if(data.weather[0].main== 'Clear'){
        weatherIcon.src = "image/clear.png"
      }
      else if(data.weather[0].main== 'Drizzle'){
        weatherIcon.src = "image/drizzle.png"
      }
      else if(data.weather[0].main== 'Mist'){
        weatherIcon.src = "image/mist.png"
      }
      else if(data.weather[0].main== 'Snow'){
        weatherIcon.src = "image/snow.png"
      }
      else if(data.weather[0].main== 'Haze'){
        weatherIcon.src = "image/fog.png"
      }
document.querySelector(".weather").style.display = "block"


  } else {
    alert("City Name not found! Please Enter a valid city name");
  }
}

searchButton.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
