/*
=======================================
📘 JavaScript & Web APIs Lab
All tasks in one file (script.js)
=======================================
*/

/*  
=======================================
TODO1: Welcome Board
---------------------------------------
When the page loads, display a welcome message 
inside the <p> element with id="t1-msg".

✅ Task:
- Select the element with id "t1-msg".
- Change its text to "Hello, World!".

💡 Hint:
document.getElementById("t1-msg").innerHTML = "Hello, World!";
*/
document.addEventListener("DOMContentLoaded", function () {
  const welcomeMessage = document.getElementById("t1-msg");
  welcomeMessage.textContent = "Hello, World!";
/*  
=======================================
TODO2: Interaction Corner
---------------------------------------
There is a button with id="t2-btn".
When the button is clicked, change the text inside 
the <p> with id="t2-status" to:
    "You clicked the button!"

✅ Task:
- Get the button element.
- Add a click event listener.
- Inside the event, change the text of the status paragraph.

💡 Hint:
button.addEventListener("click", function () {
    // change text here
});
*/
  const interactionButton = document.getElementById("t2-btn");
  const interactionStatus = document.getElementById("t2-status");

  interactionButton.addEventListener("click", function () {
    interactionStatus.textContent = "You clicked the button!";
  });


/*  
=======================================
TODO3: Inspiring Quote Board
---------------------------------------
Use the Quotable API to display a random quote.

🌍 API Link:
https://dummyjson.com/quotes/random

✅ Task:
- When the button with id="t3-loadQuote" is clicked:
    - Fetch a random quote from the API.
    - Display the quote text inside the <p> with id="t3-quote".
    - Display the author inside the <p> with id="t3-author".

💡 Hint:
The API returns JSON like:
{
  "content": "Do not watch the clock. Do what it does. Keep going.",
  "author": "Sam Levenson"
}

Use:
data.content   // the quote text
data.author    // the author
*/
  const loadQuoteButton = document.getElementById("t3-loadQuote");
  const quoteText = document.getElementById("t3-quote");
  const quoteAuthor = document.getElementById("t3-author");
  loadQuoteButton.addEventListener("click", function () {
    fetch("https://dummyjson.com/quotes/random")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        quoteText.textContent = data.quote;
        quoteAuthor.textContent = "— " + data.author;
      })
      .catch(function (err) {
        console.error("Error fetching quote:", err);
        quoteText.textContent = "Error: Could not load quote.";
      });
  });


/*  
=======================================
TODO4: Dammam Weather Now
---------------------------------------
Use the OpenWeatherMap API to display live weather data.

🌍 API Link:
https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=API_KEY=metric

⚠️ Replace YOUR_API_KEY with your actual API key from:
https://openweathermap.org/api

✅ Task:
- When the button with id="t4-loadWx" is clicked:
    - Fetch current weather data for Dammam.
    - Show temperature in the element with id="t4-temp".
    - Show humidity in the element with id="t4-hum".
    - Show wind speed in the element with id="t4-wind".

💡 Hint:
data.main.temp      → temperature (°C)
data.main.humidity  → humidity (%)
data.wind.speed     → wind speed (m/s)
*/ 
 const loadWeatherButton = document.getElementById("t4-loadWx");
  const temperatureElement = document.getElementById("t4-temp");
  const humidityElement = document.getElementById("t4-hum");
  const windSpeedElement = document.getElementById("t4-wind");
  const weatherErrorMessage = document.getElementById("t4-err");
  loadWeatherButton.addEventListener("click", function () { 
      const base = "https://api.openweathermap.org/data/2.5/weather";
      const city = "Dammam";
      const units = "metric";
      const key = "20b733706f1fb1d1a1bcad6923fcacdb"; 
      const url = `${base}?q=${encodeURIComponent(city)}&appid=${key}&units=${units}`;
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        temperatureElement.textContent = data.main.temp + " °C";
        humidityElement.textContent = data.main.humidity + "%";
        windSpeedElement.textContent = data.wind.speed + " m/s";
        weatherErrorMessage.textContent = "";
      })
      .catch(function (err) {
        console.error("Error fetching weather:", err);
        weatherErrorMessage.textContent = "Could not load weather data.";
      });
  });

});