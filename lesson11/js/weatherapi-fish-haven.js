const currentWeatherAPI = "https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=f52978192081aeebe70f896e1df97d9b&units=imperial";
const forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=f52978192081aeebe70f896e1df97d9b&units=imperial";
fetch(currentWeatherAPI)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('currentTemperature').textContent = ~~jsObject.main.temp;
    document.getElementById('currentWeather').textContent = jsObject.weather[0].description;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windSpeed').textContent = jsObject.wind.speed;
});
fetch(forecastAPI)
  .then((response) => response.json())
  .then((jsObject1) => {
    console.log(jsObject1);

    const list = jsObject1['list'];

    count = 1;

    for (let i = 0; i < list.length; i++) {
      var string = list[i].dt_txt;

      string1 = string.substr(string.indexOf(' ')+1);
      date = string.substr(0,string.indexOf(' '));
      date = new Date(date).toLocaleString('en-us', {weekday: 'long'});

      if (string1 == "18:00:00") {
        var iconurl = "https://openweathermap.org/img/w/" + list[i].weather[0].icon + ".png";
        document.getElementById("date" + count).innerHTML = date;
        document.getElementById("day" + count).innerHTML = ~~list[i].main.temp;
        document.getElementById("image" + count).setAttribute('src', iconurl);

        count++;
      }
    }
});