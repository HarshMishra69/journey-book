function getWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    ') // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
      .then(response => response.json())
      .then(data => {
        const weatherData = `
          <p><strong>Location:</strong> ${data.name}</p>
          <p><strong>Weather:</strong> ${data.weather[0].description}</p>
          <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
          <p><strong>Humidity:</strong> ${data.main.humidity} %</p>
        `;
        document.getElementById('weatherData').innerHTML = weatherData;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('weatherData').innerHTML = '<p>Weather data not available at the moment.</p>';
      });
  }
  