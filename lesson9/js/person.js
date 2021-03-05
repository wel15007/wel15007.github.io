const requestURL = 'https://www.ahfx.com/person.php';
const imageurl = 'https://thispersondoesnotexist.com/image';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const person = jsonObject['person'];
    const education = jsonObject['education'];
    const marriage = jsonObject['marriage'];
    const online_info = jsonObject['online_info'];
    const personal = jsonObject['personal'];
    const work = jsonObject['work'];

    let card = document.createElement('section');
    let info = document.createElement('div');
    let h2 = document.createElement('h2');
    let password = document.createElement('p');
    let emailAddress = document.createElement('p');
    let eyeColor = document.createElement('p');
    let country = document.createElement('p');
    let children = document.createElement('p');
    let ipAddress = document.createElement('p');
    let picture = document.createElement('img');

    h2.textContent = person.personal.name + ' ' + person.personal.last_name;
    password.textContent = "Password: " + person.online_info.password;
    emailAddress.textContent = "Email: " + person.online_info.email;
    eyeColor.textContent = "Eye Color: " + person.personal.eye_color;
    country.textContent = "Country: " + person.personal.country;
    if (person.marriage.married == false) {
        children.textContent = "No Children";
    }
    else {
    children.textContent = "Children: " + person.marriage.children;
    }
    ipAddress.textContent = "IP Address: " + person.online_info.ip_address;
    
    info.setAttribute('class', 'info');
    picture.setAttribute('src', imageurl);
    password.setAttribute('class', "password");
    emailAddress.setAttribute('class', "emailAddress");
    eyeColor.setAttribute('class', "eyeColor");
    country.setAttribute('class', "country");
    children.setAttribute('class', "children");
    ipAddress.setAttribute('class', "ipAddress");
    picture.setAttribute('class', "picture");
    picture.setAttribute('alt', "Picutre of " + person.personal.name + ' ' + person.personal.last_name);
    
    info.appendChild(h2);
    info.appendChild(password);
    info.appendChild(emailAddress);
    info.appendChild(eyeColor);
    info.appendChild(country);
    info.appendChild(children);
    info.appendChild(ipAddress);
    card.appendChild(picture);

    document.querySelector('div.person').appendChild(info);
    document.querySelector('div.person').appendChild(card);
    
    });
