// Api keys
const api = {
  key: "816a810321c9d786d0a4035b1cb301fe",
  base: "https://api.openweathermap.org/data/2.5/"
}

// Input even listener
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);




// this function will capture the keyboard event
function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
    searchbox.value ="";
  }
}

// searchbox.addEventListener('click',function(){
//   searchbox.value = "";
// });

// This function fetch api for given query
function getResults (query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);
}



// This function will displayResultss weather report
function displayResults (weather) {
  console.log(weather);

  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;
  let now = new Date();
  let date =document.querySelector('.location .date');
  date.innerText = dateBuilder(now);
  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  let weatherEl = document.querySelector('.current .weather');
  weatherEl.innerText =`${weather.weather[0].description}`;
  let hi_low = document.querySelector('.current .hi-low');
  hi_low.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
  let humidity = document.querySelector('.current .humidity');
  humidity.innerText = `Humidity: ${weather.main.humidity}`;



}

// This function will return day weeks month and year
function dateBuilder(d){
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sun","Mon","Tues","Wed","thurs","Fri","Sat"];

let day = days[d.getDay()];
let date = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();


return `${day} ${date} ${month} ${year}`;







}














