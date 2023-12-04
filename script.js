const countriesInfo = fetch("https://restcountries.com/v3.1/all");
countriesInfo
  .then((data) => data.json())
  .then((values) => {
    for (let value of values) {
      const div = document.createElement("div");
      div.innerHTML = `<div class="container">
              
           <div class="card">
           <div class="card-header">${value.name.common}</div>
             <img src="${value.flags.png}" class="card-img-top" alt="country-flag">
             <div class="card-body">
               <p ><b>Capital: ${value.capital}</b></p>
               <p ><b>Region: ${value.region}</b></p>
               <p ><b>Country Code: ${value.cca3}</b></p>
               <button class="btn btn-primary" id="data"  onclick="getWeatherData('${value.name.common}')">Click for Weather</button>
               </div>
             </div>
           </div>
       
        </div>`;
      document.body.append(div);
    }
  });

let getWeatherData = (restCountryName) => {
  let apiKey = "0989568a7ed0f9a70c84a0aec922f089";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${restCountryName}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((weatherData) => {
      let weatherCountryName = weatherData.name;
      let climate = document.querySelector("#data");
      if (weatherCountryName === restCountryName) {
        climate.innerHTML = `${weatherData.name}: ${weatherData.main.temp_min}:${weatherData.main.temp_max} `;
      }
    })
    .catch((error) => {
      alert(`Error fetching weather data.${error}`);
    });
};
