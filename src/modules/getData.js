// get user current coordinates
function getCoordinates() {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        resolve({ latitude, longitude });
      },
      (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        reject(err);
      },
      options
    );
  });
}

// get weather from coordinates
export async function getUserWeather() {
  try {
    const coords = await getCoordinates();
    console.log("Got coordinates:", coords);
    const latitude = await coords.latitude;
    const longitude = await coords.longitude;
    const weatherData = await fetchWeatherByCoordinates(latitude, longitude);
    return weatherData;
  } catch (error) {
    console.error("Geolocation error:", error);
  }
}

// Get weather data based on location name
export async function fetchWeatherByLocation(location) {
  const API_KEY = "B4BU6ELN5B2YY8LE6KPNUN5ST";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`;

  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

// Get weather data based on location long,lat
export async function fetchWeatherByCoordinates(latitude, longitude) {
  const API_KEY = "B4BU6ELN5B2YY8LE6KPNUN5ST";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?key=${API_KEY}`;

  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

// get giphy based on search term
export async function fetchGiphyBySearch(term) {
  const API_KEY = "ENFeg3xG97uYBqoU2MeZpRV2JoWlaY1J";
  const url = `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${term}`;

  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
