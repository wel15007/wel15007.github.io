const montanaWeatherAPI = "https://api.openweathermap.org/data/2.5/weather?id=5640350&appid=f52978192081aeebe70f896e1df97d9b&units=imperial";
const coloradoWeatherAPI = "https://api.openweathermap.org/data/2.5/weather?id=5419384&appid=f52978192081aeebe70f896e1df97d9b&units=imperial";
const idahoWeatherAPI = "https://api.openweathermap.org/data/2.5/weather?id=5596475&appid=f52978192081aeebe70f896e1df97d9b&units=imperial";
const utahWeatherAPI = "https://api.openweathermap.org/data/2.5/weather?id=5780026&appid=f52978192081aeebe70f896e1df97d9b&units=imperial";
fetch(montanaWeatherAPI)
  .then((response) => response.json())
  .then((montana) => {
    console.log(montana);

    document.getElementById('montanaCurrent').textContent = ~~montana.main.temp;
    document.getElementById('montanaWeather').textContent = montana.weather[0].description;
    document.getElementById('montanaHumidity').textContent = montana.main.humidity;
    document.getElementById('montanaWind').textContent = montana.wind.speed;

    const montanaTemp = document.getElementById('montanaCurrent').innerHTML;
    const montanaWind = document.getElementById('montanaWind').innerHTML;

    if (montanaTemp <= 50 && montanaWind > 3.0) {
        const montanaChillCalc = (35.74 + (0.6215 * montanaTemp) - (35.75 * Math.pow(montanaWind, 0.16)) + (0.4275 * montanaTemp * Math.pow(montanaWind, 0.16)));
        document.getElementById('montanaChill').innerHTML = ~~montanaChillCalc.toLocaleString() + "&#176;F";
    }
    else {
        document.getElementById('montanaChill').innerHTML = "N/A";
    }
});
fetch(coloradoWeatherAPI)
  .then((response) => response.json())
  .then((colorado) => {
    console.log(colorado);

    document.getElementById('coloradoCurrent').textContent = ~~colorado.main.temp;
    document.getElementById('coloradoWeather').textContent = colorado.weather[0].description;
    document.getElementById('coloradoHumidity').textContent = colorado.main.humidity;
    document.getElementById('coloradoWind').textContent = colorado.wind.speed;

    const coloradoTemp = document.getElementById('coloradoCurrent').innerHTML;
    const coloradoWind = document.getElementById('coloradoWind').innerHTML;

    if (coloradoTemp <= 50 && coloradoWind > 3.0) {
        const coloradoChillCalc = (35.74 + (0.6215 * coloradoTemp) - (35.75 * Math.pow(coloradoWind, 0.16)) + (0.4275 * coloradoTemp * Math.pow(coloradoWind, 0.16)));
        document.getElementById('coloradoChill').innerHTML = ~~coloradoChillCalc.toLocaleString() + "&#176;F";
    }
    else {
        document.getElementById('coloradoChill').innerHTML = "N/A";
    }
});
fetch(idahoWeatherAPI)
  .then((response) => response.json())
  .then((idaho) => {
    console.log(idaho);

    document.getElementById('idahoCurrent').textContent = ~~idaho.main.temp;
    document.getElementById('idahoWeather').textContent = idaho.weather[0].description;
    document.getElementById('idahoHumidity').textContent = idaho.main.humidity;
    document.getElementById('idahoWind').textContent = idaho.wind.speed;

    const idahoTemp = document.getElementById('idahoCurrent').innerHTML;
    const idahoWind = document.getElementById('idahoWind').innerHTML;

    if (idahoTemp <= 50 && idahoWind > 3.0) {
        const idahoChillCalc = (35.74 + (0.6215 * idahoTemp) - (35.75 * Math.pow(idahoWind, 0.16)) + (0.4275 * idahoTemp * Math.pow(idahoWind, 0.16)));
        document.getElementById('idahoChill').innerHTML = ~~idahoChillCalc.toLocaleString() + "&#176;F";
    }
    else {
        document.getElementById('idahoChill').innerHTML = "N/A";
    }
});
fetch(utahWeatherAPI)
  .then((response) => response.json())
  .then((utah) => {
    console.log(utah);

    document.getElementById('utahCurrent').textContent = ~~utah.main.temp;
    document.getElementById('utahWeather').textContent = utah.weather[0].description;
    document.getElementById('utahHumidity').textContent = utah.main.humidity;
    document.getElementById('utahWind').textContent = utah.wind.speed;

    const utahTemp = document.getElementById('utahCurrent').innerHTML;
    const utahWind = document.getElementById('utahWind').innerHTML;

    if (utahTemp <= 50 && utahWind > 3.0) {
        const utahChillCalc = (35.74 + (0.6215 * utahTemp) - (35.75 * Math.pow(utahWind, 0.16)) + (0.4275 * utahTemp * Math.pow(utahWind, 0.16)));
        document.getElementById('utahChill').innerHTML = ~~utahChillCalc.toLocaleString() + "&#176;F";
    }
    else {
        document.getElementById('utahChill').innerHTML = "N/A";
    }
});