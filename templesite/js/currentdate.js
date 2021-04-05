window.addEventListener('load', ()=>{
    const menubutton = document.querySelector('.menu');
    const mainnav = document.querySelector('#navigation');

    menubutton.addEventListener('click', ()=> {mainnav.classList.toggle('responsive')}, false);
const today = new Date();
const year = today.getFullYear();
const date = today.getDate();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthName = months[today.getMonth()];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayName = days[today.getDay()]

const formatedDate = `${dayName}, ${date} ${monthName} ${year}`;
document.getElementById("currentdate").innerHTML = formatedDate.toLocaleString();
});