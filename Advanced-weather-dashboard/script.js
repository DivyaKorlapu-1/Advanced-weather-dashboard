
const API_KEY = "fd79a5c6576f22d15a26b27c5a7b5f97";

async function getWeather() {
  const city = document.getElementById("city").value.trim();
  const weatherCard = document.getElementById("weatherCard");

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  weatherCard.innerHTML = "Loading...";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    weatherCard.innerHTML = `
      <h2>${data.name}</h2>
      <p>🌡️ Temperature: ${data.main.temp}°C</p>
      <p>☁️ Weather: ${data.weather[0].main}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    weatherCard.innerHTML = `<p>${error.message}</p>`;
  }
}