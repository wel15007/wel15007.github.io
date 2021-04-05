window.addEventListener('load',()=>{
    const templeURL = './json/temples.json';
    fetch(templeURL)
    .then((response)=>{
        return response.json();
    })
    .then((jsObject)=> {
        Object.entries(jsObject).forEach(([key, temple])=>{
            buildExampleTemple(temple);
        });
    });
});
function buildExampleTemple(temple) {
    console.log(temple);
    for (let i = 0; i < temple.length; i++) {
        if(temple[i].name === "Bismarck North Dakota Temple"){
            let header = document.createElement("section");
            let info = document.createElement("section");
            let h2 = document.createElement("h2");
            let image = document.createElement("img");
            let address = document.createElement("p");
            let phone = document.createElement("p");
            let email = document.createElement("p");

            h2.textContent = temple[i].name;
            image.setAttribute("src", "images/" + temple[i].image);
            image.setAttribute("alt", "Image of the" + temple[i].name);
            image.setAttribute("loading", "lazy");

            address.innerHTML=`<b>Address:</b> 
                               <br>${temple[i].address1} 
                               <br>${temple[i].city}, ${temple[i].state} ${temple[i].zip}
                               <br>${temple[i].country}`;
            phone.innerHTML = `<b>Phone Number:</b> ${temple[i].phone}`;
            email.innerHTML = `<b>Email:</b> ${temple[i].email}`;

            header.appendChild(h2);
            header.appendChild(image);
            info.appendChild(address);
            info.appendChild(phone);
            info.appendChild(email);

            document.querySelector("#exampleTemple").appendChild(header);
            document.querySelector("#exampleTemple").appendChild(info);
        }
    }
}