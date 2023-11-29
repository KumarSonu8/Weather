// let city = "delhi";
let url = "https://api.openweathermap.org/data/2.5/weather?appid=01719222f82c4cc5cfa25806f271e9f3&units=metric&q=";

let checkWeather = async function(url,city){
    
    let response = await fetch(url + city);
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity-percente").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/h";
    if(data.weather[0].main == "Mist"){
        document.querySelector(".weather-icon").src = "images/mist.png";
    }
    else if(data.weather[0].main == "Clear"){
        document.querySelector(".weather-icon").src = "images/clear.png";
    }
    else if(data.weather[0].main == "Clouds"){
        document.querySelector(".weather-icon").src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        document.querySelector(".weather-icon").src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Rain"){
        document.querySelector(".weather-icon").src = "images/rain.png";
    }
    else if(data.weather[0].main == "Snow"){
        document.querySelector(".weather-icon").src = "images/snow.png";
    }
    else if(data.weather[0].main == "Haze"){
        document.querySelector(".weather-icon").src = "images/haze.png";
    }

    // if ()

}

btn.addEventListener('click',async() =>{
    let city = document.querySelector("input").value.trim()
    let weatherReport = await checkWeather(url,city);
})

