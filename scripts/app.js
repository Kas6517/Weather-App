const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");
const forecast = new Forecast();

const updateUI = (data) => {
  const { cityDets, weather } = data;

  //update details template
  details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Imperial.Value}</span>
        <span>&deg;F</span>
    </div>
  `;

  //night and day icon image

  const iconSource = `/img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSource);

  let timeSource = weather.IsDayTime ? "/img/day.svg" : "/img/night.svg";
  time.setAttribute("src", timeSource);

  //remove the d-none class if present

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //update the ui with new City
  forecast
    .updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));

  //set local storage
  localStorage.setItem("city", city);
});

if (localStorage.getItem("city")) {
  forecast
    .updateCity(localStorage.getItem("city"))
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
}
