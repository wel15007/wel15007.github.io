window.addEventListener('load', ()=>{
    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    fetch(requestURL)
        .then((response)=> {
            return response.json();
        })
        .then((jsObject)=> {
            Object.entries(jsObject).forEach(([key, sodaSprings])=> {
                buildEventsCard(sodaSprings);
            });
        });
});
function buildEventsCard(sodaSprings) {
    console.log(sodaSprings);
    for (let i = 0; i < sodaSprings.length; i++){
        if(sodaSprings[i].name === "Soda Springs"){
            let section = document.createElement("section");
            let div = document.createElement("div");
            let h2 = document.createElement("h2");
            let hr = document.createElement("hr");
            h2.textContent = "Events in " + sodaSprings[i].name;
            section.appendChild(h2);
            section.appendChild(hr);
            div.setAttribute('id', "eventInfo");
            for(let j = 0; j < sodaSprings[i].events.length; j++) {
                let p = document.createElement("p");
                p.textContent = sodaSprings[i].events[j];
                div.appendChild(p);
            }
            document.querySelector("#events").appendChild(section);
            document.querySelector("#events").appendChild(div);
        }
    }
}