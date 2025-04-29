
function fetch(){
    let xhr = new XMLHttpRequest();
    let link =`http://api.weatherapi.com/v1/forecast.json?key=587e3ce13a5944f8a94115014252804&q=Bucaramanga&lang=es`
    xhr.open("GET",link, true);
    xhr.onreadystatechange = function(){
        if (xhr.readyState=== 4 && xhr.status === 200){
            let data = JSON.parse(xhr.responseText);
            console.log(data);
            console.log(typeof data);
            let temp1= Math.round(data["current"]["temp_c"])
            country_name.innerHTML =`
            <h1 class="country-name">${data["location"]["name"]}, ${data["location"]["country"]}
            </h1>
            <h1 class="temperature">${data["current"]["temp_c"]}°C</h1>
            <h1 class="localtime">${data["location"]["localtime"]}</h1>
            <h1 class="condition">
            <p class="hour">${data.forecast.forecastday[0].hour[20].time.split(' ')[1]}</p>
           
           
           <p class="hour1">${data.forecast.forecastday[0].hour[20].temp_c}°C</p>
            <img class="nubecita" src="https:${data.forecast.forecastday[0].hour[20].condition.icon}" alt="Weather Icon">
            </h1>
            
             <p class="hour2">${data.forecast.forecastday[0].hour[22].time.split(' ')[1]}</p>
           
           
           <p class="hour3">${data.forecast.forecastday[0].hour[22].temp_c}°C</p>
            <img class="nubecita1" src="https:${data.forecast.forecastday[0].hour[22].condition.icon}" alt="Weather Icon">
            </h1>
            
             <p class="hour4">${data.forecast.forecastday[0].hour[14].time.split(' ')[1]}</p>
           
           
           <p class="hour5">${data.forecast.forecastday[0].hour[14].temp_c}°C</p>
            <img class="nubecita2" src="https:${data.forecast.forecastday[0].hour[14].condition.icon}" alt="Weather Icon">
            
            </h1>
            <p class="hour6">${data.forecast.forecastday[0].hour[16].time.split(' ')[1]}</p>
           
           
           <p class="hour7">${data.forecast.forecastday[0].hour[16].temp_c}°C</p>
            <img class="nubecita3" src="https:${data.forecast.forecastday[0].hour[16].condition.icon}" alt="Weather Icon">
            </h1>
            <p class="hour8">${data.forecast.forecastday[0].hour[18].time.split(' ')[1]}</p>
           
           
           <p class="hour9">${data.forecast.forecastday[0].hour[18].temp_c}°C</p>
            <img class="nubecita4" src="https:${data.forecast.forecastday[0].hour[18].condition.icon}" alt="Weather Icon">
            </h1>
            

            `
        }
    
    }
    xhr.send();
} 
let country_name =document.getElementById("hola")
fetch();
