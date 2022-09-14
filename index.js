function changeCity() {
  let city = prompt("What city do you live in?");
  let temperature = prompt("What temperature is it?");
  let currentCity = document.querySelector("h1");
  if (temperature < 0) {
    currentCity.innerHTML =
      "🥶<br />Currently " + temperature + "°C in " + city;
  } else {
    currentCity.innerHTML =
      "😄😃<br />Currently " + temperature + "°C in " + city;
  }
}
let changeButton = document.querySelector("button");
changeButton.addEventListener("click", changeCity);
