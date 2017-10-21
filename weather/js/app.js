
// getWeather function

function getWeather()
{
  // http://api.openweathermap.org/data/2.5/weather?zip=95129,us&units=imperial&APPID=db1edb185dafcf9893865ee1101d96a0
  // const format = "api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}";
  // const urlbase = "http://api.openweathermap.org/data/2.5/weather?zip=95129,us";
  // let zipcode = "95129";

  const country = ",us";
  const urlbase = "http://api.openweathermap.org/data/2.5/weather?zip=";
  const apikey = "APPID=db1edb185dafcf9893865ee1101d96a0";
  const add = "&";
  const units = "units=imperial"

  const zipcode = $("#code-enter").val(); // zip coder entered by user
  console.log("The zip code entered: " + zipcode);


  $.getJSON(`${urlbase + zipcode + country + add + units + add + apikey}`,function(json)
  {
    console.log("Name of city: " + JSON.stringify(json.name, null, ' '));
    console.log("Weather of city min: " + JSON.stringify(json.main.temp_min, null, ' ') + "F");
    $("#total").val((JSON.stringify(json.main.temp_min, null, ' '))); // assigning temp to read box
    console.log(JSON.stringify(json.weather[0].description));
  });
}
