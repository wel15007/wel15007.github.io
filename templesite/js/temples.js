window.addEventListener('load',()=>{
    const templeURL = './json/temples.json';
    fetch(templeURL)
    .then((response)=>{
        return response.json();
    })
    .then((jsObject)=> {
        Object.entries(jsObject).forEach(([key, temples])=>{
            buildTempleDivs(temples);
        });
    });
});
function buildTempleDivs(temples) {
    console.log(temples);
    for (let i = 0; i < temples.length; i++) {
        if(temples[i].name != "Bismarck North Dakota Temple"){
        let header = document.createElement("section");
        let info = document.createElement("section");
        let h2 = document.createElement("h2");
        let image = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let email = document.createElement("p");
        let servicesTitle = document.createElement("h3");
        let historyTitle = document.createElement("h3");
        let ordinance = document.createElement("p");
        let session = document.createElement("p");
        let closureTitle = document.createElement("h3");

        header.setAttribute("id", "templeHeader");
        info.setAttribute("id", "templeInfo");
        
        h2.textContent = temples[i].name;
        image.setAttribute("src", "images/" + temples[i].image);
        image.setAttribute("alt", "Image of the" + temples[i].name);
        image.setAttribute("loading", "lazy");

        address.innerHTML=`<b>Address:</b>
                           <br>${temples[i].address1} 
                           <br>${temples[i].city}, ${temples[i].state} ${temples[i].zip}
                           <br>${temples[i].country}`;
        phone.innerHTML = `<b>Phone Number:</b> ${temples[i].phone}`;
        email.innerHTML = `<b>Email:</b> ${temples[i].email}`;
        servicesTitle.textContent = "Services";
        historyTitle.textContent = "History";
        closureTitle.textContent = "Closures";
        header.appendChild(h2);
        header.appendChild(image);
        info.appendChild(address);
        info.appendChild(phone);
        info.appendChild(email);
        info.appendChild(servicesTitle);
        for(let j = 0; j < temples[i].services.length; j++) {
            let services = document.createElement("li");
            services.textContent = temples[i].services[j];
            info.appendChild(services);
        }
        info.appendChild(historyTitle);
        for(let k = 0; k < temples[i].history.length; k++) {
            let history = document.createElement("li");
            history.textContent = temples[i].history[k];
            info.appendChild(history);
        }
        ordinance.innerHTML=`<b>Ordinance Schedule:</b> ${temples[i].ordinance}`;
        session.innerHTML=`<b>Session Schedule:</b>${temples[i].session}`;

        info.appendChild(ordinance);
        info.appendChild(session);

        info.appendChild(closureTitle);
        for (let l = 0; l < temples[i].closure.length; l++) {
            let closures = document.createElement("li");
            closures.textContent = temples[i].closure[l];
            info.appendChild(closures);
        }

        document.querySelector("#temple" + i).appendChild(header);
        document.querySelector("#temple" + i).appendChild(info);
    }
}
}