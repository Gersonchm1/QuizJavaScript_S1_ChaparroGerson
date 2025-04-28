
function fetch(){
    let xhr = new XMLHttpRequest();
    let link =`http://api.weatherapi.com/v1/current.json?key=587e3ce13a5944f8a94115014252804&q=Floridablanca&lang=es`
    xhr.open("GET",link, true);
    xhr.onreadystatechange = function(){
        if (xhr.readyState=== 4 && xhr.status === 200){
            let data = JSON.parse(xhr.responseText);
            console.log(data);
            console.log(typeof data);
            let temp1= Math.round(data["current"]["temp_c"])
            country_name.innerHTML =`
            <p class="country-name">${data["location"]["name"]}, ${data["location"]["country"]}
            </span></p>
            `
        }
    
    }
    xhr.send();
} 
let country_name =document.getElementById("hola")
fetch();
