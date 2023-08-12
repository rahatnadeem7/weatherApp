const apiKey = "9f38765a330782812bce09c07ce51013";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWheather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);



            if(response.status ==404){
                document.querySelector(".error").style.display= 'block';
                document.querySelector(".weather").style.display= 'none';
            }else{
                var data = await response.json();
            
            
                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round( data.main.temp) + "°c";
                document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
    
                // weather conditions
    
                if(data.weather[0].main == "Clouds"){
                    weatherIcon.src = "images/clouds.png";
                }
                else if(data.weather[0].main == "Clear"){
                    weatherIcon.src = "images/clear.png";
                } 
                else if(data.weather[0].main == "Rain"){
                    weatherIcon.src = "images/rain.png";
                }
                else if(data.weather[0].main == "Drizzle"){
                    weatherIcon.src = "images/drizzle.png";
                }
                else if(data.weather[0].main == "Mist"){
                    weatherIcon.src = "images/mist.png";
                }
    
                document.querySelector(".weather").style.display = "block";
                document.querySelector(".error").style.display="none";   
            }
            
        }
        
        searchBtn.addEventListener("click", ()=>{
            checkWheather(searchBox.value);
        })

        // const findLocationBtn = document.getElementById('findLocationBtn');
        // const locationInfo = document.getElementById('locationInfo');
    
        // findLocationBtn.addEventListener('click', function() {
        //   if ("geolocation" in navigator) {
        //     navigator.geolocation.getCurrentPosition(function(position) {
        //       const latitude = position.coords.latitude;
        //       const longitude = position.coords.longitude;
    
        //       fetch(`https://api.opencagedata.com/geocode/v1/json?key=7189f9f899b04c9e92dd83cd1fcfde2f&q=${latitude}+${longitude}`)
        //         .then(response => response.json())
        //         .then(data => {
        //           const city = data.results[0].components.city;
        //           const country = data.results[0].components.country;
        //           locationInfo.textContent = `${city}, ${country}`;
        //         })
        //         .catch(error => {
        //           locationInfo.textContent = `Error getting location: ${error.message}`;
        //         });
        //     }, function(error) {
        //       locationInfo.textContent = `Error getting location: ${error.message}`;
        //     });
        //   } else {
        //     locationInfo.textContent = "Geolocation is not available in this browser.";
        //   }
        // });