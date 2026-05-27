        const apiKey = "77d7150e27547cdd48315fe3d02a54a7";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


        const searchBox = document.querySelector(".card .card-top input");
        const searchBtn = document.querySelector(".card .card-top .search-img-button");
        // const WeatherIcon = document.querySelector(".weather_image");
        
        async function checkWeather(city){
            const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
            var data = await response.json();

            console.log(data)

            document.querySelector(".content_para").innerHTML = data.name;
            document.querySelector(".content_header").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
            
            

            if(data.weather[0].main == "Clouds"){  //weather condition in 0 index
                document.querySelector(".weather_image").src = "cloud.png";
                //WeatherIcon.src = "clouds.png"
            }
            else if(data.weather[0].main == "Clear"){
                document.querySelector(".weather_image").src = "clear.png";
            }
            else if(data.weather[0].main == "Rain"){
                document.querySelector(".weather_image").src = "rain.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                document.querySelector(".weather_image").src = "drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
                document.querySelector(".weather_image").src = "mist.png";
            }

            document.querySelector('.weather').style.display = "block";

        }
        searchBtn.addEventListener("click",()=>{
            checkWeather(searchBox.value);
        })

        // Changing background image -> it should be outside the function checkWeather
        function changebg(){
            document.body.classList.toggle("dark-theme");
            if(document.body.classList.contains("dark-theme")){
                document.getElementById("icon").src = "sun-solid-full.svg";
            }
            else{
                document.getElementById("icon").src = "moon-regular-full.svg";
            }
        }