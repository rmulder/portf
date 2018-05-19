"use strict";

console.info("external app.js");

const weather = () =>
{
  console.log("Inside weather json parsing function!");

  let request = new XMLHttpRequest();
  request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?zip=95129,us&units=imperial&APPID=db1edb185dafcf9893865ee1101d96a0', true);

  request.onload = function()
  {
    if(this.status >= 200 && this.status < 400)
    {
      let data = JSON.parse(this.response); // Success!
      console.log("Name of city after slice: " + data.name); //testing if it works
      document.body.innerHTML = "<h1>Name of city of weather: " + data.name + "</h1>"
    }
    else
    {
      console.log("Connection made to server, however, error returned.");
    }
  };
  request.onerror = function()
  {
    console.log("There is some error");
  };
  request.send(); // sending info request
}

weather();
