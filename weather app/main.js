// OpenWeather api 
const apiKey  = "" // add your api key
const apiUrl = ""

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

// fetch data from the API 
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
  var data = await response.json()

  document.querySelector('.weather').style.display = "flex"

  // display data 
  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
  document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

  // change weather icon 
  if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "./public/clouds.png"
  }else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "./public/rain.png"
  }else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "./public/drizzle.png"
  }else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "./public/mist.png"
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
})
