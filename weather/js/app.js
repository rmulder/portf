
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
    // const zipcodeE = $("#code-enter").val();
    // console.log("The zip code entered: " + zipcodeE);
    // document.write("Name of city: " + JSON.stringify(json.name, null, ' '));

    console.log("Name of city: " + JSON.stringify(json.name, null, ' '));


    // document.write(JSON.stringify(json.name));
    // document.write("Weather of city min: " + JSON.stringify(json.main.temp_min, null, ' ') + "F");

    console.log("Weather of city min: " + JSON.stringify(json.main.temp_min, null, ' ') + "F");

    // $("#total").val() = (JSON.stringify(json.main.temp, null, ' '));

    $("#total").val((JSON.stringify(json.main.temp_min, null, ' '))); // assigning temp to read box

    // document.write("Weather of city max: " + JSON.stringify(json.main.temp_max, null, ' ') + "F");


    // document.getElementById('total').value = (total + "%"); // total is the value being assigned
    // <input type="text" id = "total" value = " " readonly/> // html to which assigned to

  });
}
