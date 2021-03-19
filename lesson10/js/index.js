const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];

     let firstSection = document.createElement('section');
    let firstInfo = document.createElement('div');
    let firstHeader = document.createElement('h2');
    let firstMotto = document.createElement('p');
    let firstYear = document.createElement('p');
    let firstPopulation = document.createElement('p');
    let firstRain = document.createElement('p');
    let firstImage = document.createElement('img');

    let secondSection = document.createElement('section');
    let secondInfo = document.createElement('div');
    let secondHeader = document.createElement('h2');
    let secondMotto = document.createElement('p');
    let secondYear = document.createElement('p');
    let secondPopulation = document.createElement('p');
    let secondRain = document.createElement('p');
    let secondImage = document.createElement('img');

    let thirdSection = document.createElement('section');
    let thirdInfo = document.createElement('div');
    let thirdHeader = document.createElement('h2');
    let thirdMotto = document.createElement('p');
    let thirdYear = document.createElement('p');
    let thirdPopulation = document.createElement('p');
    let thirdRain = document.createElement('p');
    let thirdImage = document.createElement('img');

    firstHeader.textContent = towns[0].name;
    firstMotto.textContent = towns[0].motto;
    firstYear.textContent = "Year Founded: " + towns[0].yearFounded;
    firstPopulation.textContent = "Current Population: " + towns[0].currentPopulation;
    firstRain.textContent = "Annual Average Rainfall: " + towns[0].averageRainfall;
    firstInfo.setAttribute('id', "card1info");
    firstHeader.setAttribute('id', "firstHeader");
    firstMotto.setAttribute('class', "firstMotto");
    firstImage.setAttribute('src', "images/" + towns[0].photo);
    firstImage.setAttribute('alt', "Image of " + towns[0].name);

    secondHeader.textContent = towns[2].name;
    secondMotto.textContent = towns[2].motto;
    secondYear.textContent = "Year Founded: " + towns[2].yearFounded;
    secondPopulation.textContent = "Current Population: " + towns[2].currentPopulation;
    secondRain.textContent = "Annual Average Rainfall: " + towns[2].averageRainfall;
    secondInfo.setAttribute('id', "card2info");
    secondHeader.setAttribute('id', "secondHeader");
    secondMotto.setAttribute('class', "secondMotto");
    secondImage.setAttribute('src', "images/" + towns[2].photo);
    secondImage.setAttribute('alt', "Image of " + towns[2].name)

    thirdHeader.textContent = towns[6].name;
    thirdMotto.textContent = towns[6].motto;
    thirdYear.textContent = "Year Founded: " + towns[6].yearFounded;
    thirdPopulation.textContent = "Current Population: " + towns[6].currentPopulation;
    thirdRain.textContent = "Annual Average Rainfall: " + towns[6].averageRainfall;
    thirdInfo.setAttribute('id', "card3info");
    thirdHeader.setAttribute('id', "thirdHeader");
    thirdMotto.setAttribute('class', "thirdMotto");
    thirdImage.setAttribute('src', "images/" + towns[6].photo);
    thirdImage.setAttribute('alt', "Image of " + towns[6].name);

    firstInfo.appendChild(firstHeader);
    firstInfo.appendChild(firstMotto);
    firstInfo.appendChild(firstYear);
    firstInfo.appendChild(firstPopulation);
    firstInfo.appendChild(firstRain);
    firstSection.appendChild(firstImage);

    secondInfo.appendChild(secondHeader);
    secondInfo.appendChild(secondMotto);
    secondInfo.appendChild(secondYear);
    secondInfo.appendChild(secondPopulation);
    secondInfo.appendChild(secondRain);
    secondSection.appendChild(secondImage);

    thirdInfo.appendChild(thirdHeader);
    thirdInfo.appendChild(thirdMotto);
    thirdInfo.appendChild(thirdYear);
    thirdInfo.appendChild(thirdPopulation);
    thirdInfo.appendChild(thirdRain);
    thirdSection.appendChild(thirdImage);

    document.querySelector('div.townCards1').appendChild(firstInfo);
    document.querySelector('div.townCards1').appendChild(firstSection);
    document.querySelector('div.townCards2').appendChild(secondInfo);
    document.querySelector('div.townCards2').appendChild(secondSection);
    document.querySelector('div.townCards3').appendChild(thirdInfo);
    document.querySelector('div.townCards3').appendChild(thirdSection);
  });