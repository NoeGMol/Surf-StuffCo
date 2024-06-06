clima = document.getElementById("clima")

clima.addEventListener('click',function(){
    obtenerDatos();
})

function obtenerDatos() {
    console.log("diste click");

   
    let url ='http://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires,AR&lang=es&units=metric&appid=a3ef8e1c0a365bf45fbcc7b9fd768efd';
 
    const api = new XMLHttpRequest();

    api.open('GET',url,true);
    api.send();

    api.onreadystatechange = function() {
        if(this.status == 200 && this.readyState == 4){
            console.log(this.responseText);
            // vamos a poner el contenido del body en un json 

            let respuesta = JSON.parse(this.responseText)
            console.log(respuesta);
            clima = respuesta["weather"][0]["main"]// es un array de json, en la posicion 0 del array acceso a las filas
            descripcion=respuesta["weather"][0]["description"]
            temperatura =respuesta["main"]["temp"]
            sensacion_termica=respuesta["main"]["feels_like"]
            temperatura_minima = respuesta["main"]["temp_min"]
            temperatura_maxima = respuesta["main"]["temp_max"]
            humedad = respuesta["main"]["humidity"]
            nubes = respuesta["clouds"]["all"]
            presion = respuesta["main"]["pressure"]

            console.log(temperatura)
            console.log(clima)
            console.log(descripcion)
            console.log(sensacion_termica)
            console.log(temperatura_minima)
            console.log(temperatura_maxima)
            console.log(humedad)
            console.log( nubes)
            console.log(presion)

            let resultado2= document.getElementById("resultado2")
            resultado2.innerHTML = ""
            resultado2.innerHTML +='<li class="temp">'+Math.round(temperatura)+' °C</li>'
            resultado2.innerHTML +='<li class="desc">'+descripcion+'</li>'
            resultado2.innerHTML +='<hr>'
            resultado2.innerHTML +='<li class="data_extra">Sensación Térmica: <span class="sen_term">'+sensacion_termica+' °C</span></li>'
            resultado2.innerHTML +='<li class="data_extra">Nubes: '+nubes+'%</li>'
            resultado2.innerHTML +='<li class="data_extra">Humedad: '+humedad+'%</li>'
            resultado2.innerHTML +='<li class="data_extra">Presión: '+presion+'</li>'
        }
    }
}