import "./styles.css";
import * as weather from "./modules/getData";
import { clearContent, displayConditions, showGiphy } from "./modules/viewData";

document.addEventListener("DOMContentLoaded", () => {
  const currentBtn = document.querySelector(".current");
  const form = document.querySelector("form");
  const dataDiv = document.querySelector(".data");
  const giphyDiv = document.querySelector(".giphy");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    clearContent(dataDiv, giphyDiv);

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const json = await weather.fetchWeatherByLocation(data.location);
    const { currentConditions, description } = json;

    displayConditions(currentConditions, dataDiv);
    await showGiphy(description, giphyDiv);
  });

  currentBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    clearContent(dataDiv, giphyDiv);

    const currentLocationData = await weather.getUserWeather();
    const { currentConditions, description } = currentLocationData;

    displayConditions(currentConditions, dataDiv);
    await showGiphy(description, giphyDiv);
  });
});
