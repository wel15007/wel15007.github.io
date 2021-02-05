window.addEventListener('load', ()=>{
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', ()=> {mainnav.classList.toggle('responsive')}, false);

    window.onresize = ()=> {if(window.innerHeight>760) mainnav.classList.remove('responsive');};
const today = new Date();
const year = today.getFullYear();
const date = today.getDate();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthName = months[today.getMonth()];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayName = days[today.getDay()]

const formatedDate = `${dayName}, ${date} ${monthName} ${year}`;
document.getElementById("currentDate").innerHTML = formatedDate;
});