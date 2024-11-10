const wheather = async () => {
    console.log(search.value);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=5fe36b192ffd1c36dffb6752bc1722b2`);
    response.json().then((item) => {
        console.log(item);

        const name = item.name;
        const country = item.sys.country;
        const tempCelsius = (item.main.temp - 273.15).toFixed(2);
        const feelsLikeCelsius = (item.main.feels_like - 273.15).toFixed(2);
        const tempMinCelsius = (item.main.temp_min - 273.15).toFixed(2);
        const tempMaxCelsius = (item.main.temp_max - 273.15).toFixed(2);
        const pressure = item.main.pressure;
        const humidity = item.main.humidity;
        const windSpeed = item.wind.speed;
        const weatherMain = item.weather[0].main;

        
        let backgroundImage = 'https://t3.ftcdn.net/jpg/08/39/84/40/360_F_839844051_savJkwrT8vhPaMcAqu96fA80rn9yKnAr.jpg';
        let weatherIcon = 'https://cdn.dribbble.com/users/2120934/screenshots/6193524/19_mostlysunny.gif';

        
        if (weatherMain === 'Clear') {
            backgroundImage = 'https://images.pexels.com/photos/96622/pexels-photo-96622.jpeg?cs=srgb&dl=pexels-asphotograpy-96622.jpg&fm=jpg';
            weatherIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Oxygen480-status-weather-clear.svg/800px-Oxygen480-status-weather-clear.svg.png';
        } else if (weatherMain === 'Clouds') {
            backgroundImage = 'https://support.janesweather.com/hc/article_attachments/4413920830991/mostly%252Bcloudy.jpeg';
            weatherIcon = 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png';
        } else if (weatherMain === 'Rain') {
            backgroundImage = 'https://i.pinimg.com/736x/71/a7/9b/71a79b564478b7ac1ce7ffdac6d14301.jpg';
            weatherIcon = 'https://i.pinimg.com/originals/77/90/79/77907906cb11350dc7348fe4293ebe82.png';
        } else if (weatherMain === 'Snow') {
            backgroundImage = 'https://example.com/snowy-background.jpg';
            weatherIcon = 'https://w7.pngwing.com/pngs/561/405/png-transparent-weather-forecasting-symbol-blue-snow-weather-symbol-blue-cloud-symmetry.png';
        } else if (weatherMain === 'Thunderstorm') {
            backgroundImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/FoggDam-NT.jpg/640px-FoggDam-NT.jpg';
            weatherIcon = 'https://i.pinimg.com/564x/87/89/92/878992db9d41b6f15291b9c1e59474ca.jpg';
        }else if (weatherMain==='Haze') {
            backgroundImage = 'https://media.istockphoto.com/id/1055906130/photo/foggy-rural-asphalt-highway-perspective-with-white-line-misty-road-road-with-traffic-and.jpg?s=612x612&w=0&k=20&c=NS_1x0gGJQkJ7RfC1J17bzu5PFj2xJGYoLA6L3BCZzg=';
            weatherIcon = 'https://cdn-icons-png.flaticon.com/512/1779/1779807.png';
        }

        // console.log(`Location: ${name}, ${country}`);
        // console.log(`Temperature: ${tempCelsius}°C`);
        // console.log(`Feels Like: ${feelsLikeCelsius}°C`);
        // console.log(`Minimum Temperature: ${tempMinCelsius}°C`);
        // console.log(`Maximum Temperature: ${tempMaxCelsius}°C`);
        // console.log(`Pressure: ${pressure} hPa`);
        // console.log(`Humidity: ${humidity}%`);

    
        display.innerHTML = `
            <div id="weatherContainer" class=" container-fluid text-dark border rounded p-4" style="background-size: cover; background-position: center; height: 400px; width: 800px; background-image:url('${backgroundImage}')">
                <div class="d-flex justify-content-between">
                    <div>
                        <h1 class="fw-bold">${tempCelsius} °C <span style="font-size: 20px;" class="fw-bold">${weatherMain}</span>
                            <img src="${weatherIcon}" class="ms-2" alt="Weather Icon" style="height: 60px; width: 60px;">
                        </h1>
                        <h5 class="fw-bold">temp-min- ${tempMinCelsius}°C</h5>
                        <h5 class="fw-bold">temp-max- ${tempMaxCelsius}°C</h5>
                    </div>
                    <div>
                        <p id="humidity" class="mb-2 fw-bold">Humidity: ${humidity}%</p>
                        <p id="pressure" class="mb-2 fw-bold">Pressure: ${pressure} hPa</p>
                        <p id="wind" class="mb-2 fw-bold">Wind Speed: ${windSpeed} m/s</p>
                    </div>
                </div>
                <h3 id="cityName" class="mb-3 fw-bold">${name}</h3>
                <h4 class="fw-bold">${country}</h4>
                <h5 class="fw-bold">Feels Like- ${feelsLikeCelsius}°C</h5>

                <button onclick="location.reload()" class="btn btn-dark mt-3">Refresh</button>
            </div>`;
    });
}
