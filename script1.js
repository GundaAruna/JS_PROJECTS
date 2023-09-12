
async function WeatherData() {
    const apiKey = '724349c1ec803bfb3a82fff3c59861f1'; 
    const city = prompt("Enter the city");
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      const weatherContainer = document.querySelector('.weather-data');
      weatherContainer.innerHTML = `
        <h2>Weather in ${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      const weatherContainer = document.querySelector('.weather-data');
      weatherContainer.innerHTML = '<p>Unable to fetch weather data.</p>';
    }
  }
WeatherData();
