import * as weather from "./getData";

export function clearContent(dataContainer, giphyContainer) {
  dataContainer.innerHTML = "";
  giphyContainer.innerHTML = "";
}

export function displayConditions(conditions, container) {
  const ul = document.createElement("ul");
  ul.classList.add("conditions-list");
  ul.className = "mx-3";

  for (let key in conditions) {
    const li = document.createElement("li");
    li.textContent = `${key}: ${conditions[key]}`;
    ul.appendChild(li);
  }

  container.appendChild(ul);
}

export async function showGiphy(description, container) {
  const giphyJson = await weather.fetchGiphyBySearch(description);
  const image = document.createElement("img");
  image.className = "w-[100%] h-[100%]";
  image.src = giphyJson.data.images.original.url;
  image.alt = description;

  container.appendChild(image);
}
