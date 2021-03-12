const currentWeatherAPI = "https://api.openweathermap.org/data/2.5/weather?id=5605242&appid=f52978192081aeebe70f896e1df97d9b&units=imperial";
const forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?id=5605242&appid=f52978192081aeebe70f896e1df97d9b&units=imperial";
fetch(currentWeatherAPI)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const currentImage = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    document.getElementById('currentTemp').textContent = ~~jsObject.main.temp; 
    document.getElementById('condition').textContent = jsObject.weather[0].main;  
    document.getElementById('currentIcon').setAttribute('src', currentImage); 
});

fetch(forecastAPI)
  .then((response) => response.json())
  .then((jsObject1) => {
    console.log(jsObject1);

    const day1Img = 'https://openweathermap.org/img/w/' + jsObject1.list[7].weather[0].icon + '.png';
    const day2Img = 'https://openweathermap.org/img/w/' + jsObject1.list[15].weather[0].icon + '.png';
    const day3Img = 'https://openweathermap.org/img/w/' + jsObject1.list[23].weather[0].icon + '.png';
    const day4Img = 'https://openweathermap.org/img/w/' + jsObject1.list[31].weather[0].icon + '.png';
    const day5Img = 'https://openweathermap.org/img/w/' + jsObject1.list[39].weather[0].icon + '.png';
    document.getElementById('firstDay').textContent = ~~jsObject1.list[7].main.temp; 
    document.getElementById('secondDay').textContent = ~~jsObject1.list[15].main.temp; 
    document.getElementById('thirdDay').textContent = ~~jsObject1.list[23].main.temp; 
    document.getElementById('fourthDay').textContent = ~~jsObject1.list[31].main.temp; 
    document.getElementById('fifthDay').textContent = ~~jsObject1.list[39].main.temp;
    document.getElementById('firstImg').setAttribute('src', day1Img);
    document.getElementById('secondImg').setAttribute('src', day2Img);
    document.getElementById('thirdImg').setAttribute('src', day3Img);
    document.getElementById('fourthImg').setAttribute('src', day4Img);
    document.getElementById('fifthImg').setAttribute('src', day5Img); 
});