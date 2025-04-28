
function fetch(){
    let xhr = new XMLHttpRequest();
    let link =`http://api.weatherapi.com/v1/current.json?key=587e3ce13a5944f8a94115014252804&q=Kharkiv&lang=es`
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
            <h1 class="temperature">${data["current"]["temp_c"]}</h1>

            `
        }
    
    }
    xhr.send();
} 
let country_name =document.getElementById("hola")
fetch();
