
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
    let city = (JSON.stringify(json.name));
    city = city.substr(1).slice(0, -1); // to remove the quote marks
    console.log("Name of city after slice: " + city);
    // console.log("Name of city: " + city);
    console.log("Weather of city min: " + JSON.stringify(json.main.temp_min, null, ' ') + "°F");
    $("#total-low").val((JSON.stringify(json.main.temp_min, null, ' ')) + "°F"); // assigning temp to read box
    $("#total-high").val((JSON.stringify(json.main.temp_max, null, ' ')) + "°F"); // assigning temp to read box
    let descr = (JSON.stringify(json.weather[0].description));
    console.log(descr);
    console.log(JSON.stringify(json.clouds.all));

    if(descr.search('rain') !== -1 || descr.search('mist') !== -1 || descr.search('hail') !== -1 || descr.search('snow') !== -1 || descr.search('cloudy') !== -1)
    {
      // $("div.background").css({"background-color": "yellow", "-webkit-transition: background-color 1s ease-in-out"});
      $(".background").css("-webkit-transition",  "background-color 1s ease-in-out");
      $(".background").css('background-color', '#9a9a97');
      $("html").css("-webkit-transition",  "background-color 1s ease-in-out");
      $("html").css('background-color', '#9a9a97');

      $("div.button-spec button").css("-webkit-transition",  "background-color 1s ease-in-out");
      $("div.button-spec button").css('background-color', '#90908d'); // button darken 5% from original gray

      $("input[type='number']").css("-webkit-transition",  "background-color 1s ease-in-out");
      $("input[type='number']").css('background-color', '#81817d'); // button darken 10% from original gray

      $("input[type='string']").css("-webkit-transition",  "background-color 1s ease-in-out");
      $("input[type='string']").css('background-color', '#81817d'); // button darken 10% from original gray

    }
    else if (descr.search('clear') !== -1 || descr.search('partly') !== -1)
    {
      $(".background").css("-webkit-transition",  "background-color 1s ease-in-out");
      $(".background").css('background-color', '#8ebfdf');
      $("html").css("-webkit-transition",  "background-color 1s ease-in-out");
      $("html").css('background-color', '#8ebfdf');

      $("div.button-spec button").css("-webkit-transition",  "background-color 1s ease-in-out");
      $("div.button-spec button").css('background-color', '#a2cae5'); // button darken 5% from original blue

      $("input[type='number']").css("-webkit-transition",  "background-color 1s ease-in-out");
      $("input[type='number']").css('background-color', '#66a8d4'); // button darken 10% from original blue

      $("input[type='string']").css("-webkit-transition",  "background-color 1s ease-in-out");
      $("input[type='string']").css('background-color', '#72afd7'); // button darken 10% from original blue

      // ffdf0d yellow darken 10%
    }
    else
    {
      $(".background").css("-webkit-transition",  "background-color 1s ease-in-out");
      $(".background").css('background-color', '#8ebfdf');
      $("html").css("-webkit-transition",  "background-color 1s ease-in-out");
      $("html").css('background-color', '#8ebfdf');

      $("div.button-spec button").css("-webkit-transition",  "background-color 1s ease-in-out");
      $("div.button-spec button").css('background-color', '#a2cae5'); // button darken 5% from original blue

      $("input[type='number']").css("-webkit-transition",  "background-color 1s ease-in-out");
      $("input[type='number']").css('background-color', '#66a8d4'); // button darken 10% from original blue

      $("input[type='string']").css("-webkit-transition",  "background-color 1s ease-in-out");
      $("input[type='string']").css('background-color', '#72afd7'); // button darken 10% from original blue

    }


  });
}

module.exports.getWeather = getWeather;
