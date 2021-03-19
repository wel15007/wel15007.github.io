const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsObject) {
        console.table(jsObject);
        const towns = jsObject['towns'];

        count = 1;

        for (let i = 0; i < towns.length; i++) {
            for( let j = 0; j < towns[i].events.length; j++)
            if(towns[i].name === 'Preston') {
                let eventSection = document.createElement('section');
                let header = document.createElement('h2');

                const events = towns[i].events[j];
                let allEvents = document.createElement('p');
                header.textContent = "Upcoming Events in " + towns[i].name
                allEvents.textContent = events[i];

                eventSection.appendChild(header);
                eventSection.appendChild(allEvents);
                document.querySelector('div.events').appendChild(eventSection);
        }
    }
    });