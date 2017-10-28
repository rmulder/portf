// for news api json

"use strict";

$(document).ready(function()
{
  $(".field__input").change(function(e)
  {
    alert("Value")
    e.preventDefault();
    $(".field__input").val('');
  });
});

function getNews()
{
  // api key:

  const urlbase = "https://newsapi.org/v1/articles?source=";
  const rest = "&language=en&sortBy=latest"; // in english, and popular info.
  const apikey = "&apiKey=c70c8062d2544d5b8459796ca2707d7a";
  const tech = "techcrunch";

  // example:
  // https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=c70c8062d2544d5b8459796ca2707d7a

  const zipcode = $("#code-enter").val(); // zip coder entered by user
  console.log("The zip code entered: " + zipcode);

  $.getJSON(`${urlbase + tech + rest + apikey}`,function(json)
  {
    let tc = (JSON.stringify(json.name))
    console.log("News Source: " + tc.source);
    console.log("Article 1 Title: " + articles[0].title);
    console.log("Article 1 Description: " + articles[0].description);
    // let city = (JSON.stringify(json.name));
    // console.info("Name of city after slice: " + city);
    // console.info("Weather of city min: " + JSON.stringify(json.main.temp_min, null, ' ') + "°F");
    // $("#total-low").val((JSON.stringify(json.main.temp_min, null, ' ')) + "°F"); // assigning temp to read box
    // $("#total-high").val((JSON.stringify(json.main.temp_max, null, ' ')) + "°F"); // assigning temp to read box
    // let descr = (JSON.stringify(json.weather[0].description));

  });
}

function clear()
{
  $("#clear").click(function(e) // need to change class selector
  {
    e.preventDefault();
    $("#txt").val(''); // need to change input content box selector
    });
}
