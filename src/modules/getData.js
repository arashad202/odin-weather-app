export async function getWeather(location) {
  const API_KEY = "B4BU6ELN5B2YY8LE6KPNUN5ST";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`;

  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

export async function getGiphy(term) {
  const API_KEY = "ENFeg3xG97uYBqoU2MeZpRV2JoWlaY1J";
  const url = `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${term}`;

  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

// export async function getLocation() {
//   //   const geolocation = Navigator.geolocation;

//   const options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0,
//   };

//   function success(pos) {
//     const crd = pos.coords;

//     console.log("Your current position is:");
//     console.log(`Latitude : ${crd.latitude}`);
//     console.log(`Longitude: ${crd.longitude}`);
//     console.log(`More or less ${crd.accuracy} meters.`);
//   }

//   function error(err) {
//     console.warn(`ERROR(${err.code}): ${err.message}`);
//   }

//   navigator.geolocation.getCurrentPosition(success, error, options);
// }
