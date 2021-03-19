window.addEventListener('load', ()=>{
    const temperature = document.getElementById('currentTemperature').innerHTML;
    const windSpeed = document.getElementById('windSpeed').innerHTML;

    if (temperature <= 50 && windSpeed > 3.0) {
    const windChillCalc = (35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16)));
    document.getElementById('windChill').innerHTML = ~~windChillCalc.toLocaleString() + "&#176;F";
    }
    else {
        document.getElementById('windChill').innerHTML = "N/A";
    }
});