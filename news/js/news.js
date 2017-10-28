// for news api json

"use strict";

$(document).ready(function()
{
  $(".field__input").change(function(e) // basically auto enter.
  {
    let kw = $(".field__input").val(); // zip coder entered by user
    kw = kw.toLowerCase().replace(/\s/g, '');
    console.log("Keyword entered: " + kw);

    if(kw.search('tech') !== -1 || kw.search('technology') !== -1)
    {
      console.log("Calling getTechNewsFunction");
      getTechNews();
    }
    else if (kw.search('sport') !== -1 || kw.search('sports') !== -1 || kw.search('sportz') !== -1)
    {
      console.log("Calling getSportsNewsFunction");
      getSportsNews();
    }
    else if (kw.search('business') !== -1 || kw.search('busi') !== -1 || kw.search('busines') !== -1 || kw.search('bus') !== -1 || kw.search('busin') !== -1)
    {
      console.log("Calling getBusinessNews");
      getBusinessNews();
    }
    else
    {
      console.log("Generally Popular News Called");
    }

    e.preventDefault();
    $(".field__input").val(''); // to remove text in input field
  });
});

function getTechNews()
{
  const urlbase = "https://newsapi.org/v1/articles?source=";
  const rest = "&sortBy=latest"; // in english, and popular info.
  const apikey = "&apiKey=c70c8062d2544d5b8459796ca2707d7a";
  const tech = "techcrunch";

  // example:
  // https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=c70c8062d2544d5b8459796ca2707d7a

  $.getJSON(`${urlbase + tech + rest + apikey}`,function(json)
  {
    let tcSource = (JSON.stringify(json.source))
    tcSource = tcSource.substr(1).slice(0, -1); // to remove the quote marks
    console.log("News Source: " + tcSource);

    let tcATitle = (JSON.stringify(json.articles[0].title))
    tcATitle = tcATitle.substr(1).slice(0, -1);
    console.log("News Title: " + tcATitle);

    let tcADesc = (JSON.stringify(json.articles[0].description))
    tcADesc = tcADesc.substr(1).slice(0, -1);
    console.log("News Description: " + tcADesc);

    let tcAUrl = (JSON.stringify(json.articles[0].url))
    tcAUrl = tcAUrl.substr(1).slice(0, -1);
    console.log("News URL: " + tcAUrl);

    // $("#total-low").val((JSON.stringify(json.main.temp_min, null, ' ')) + "°F"); // assigning temp to read box

  });
}


function getBusinessNews()
{
  const urlbase = "https://newsapi.org/v1/articles?source=";
  const rest = "&sortBy=top"; // in english, and popular info.
  const apikey = "&apiKey=c70c8062d2544d5b8459796ca2707d7a";
  const business = "business-insider";

  // example:
  // https://newsapi.org/v1/articles?source=business-insider&sortBy=latest&apiKey=c70c8062d2544d5b8459796ca2707d7a

  $.getJSON(`${urlbase + business + rest + apikey}`,function(json)
  {
    let bSource = (JSON.stringify(json.source))
    bSource = bSource.substr(1).slice(0, -1); // to remove the quote marks
    console.log("News Source: " + bSource);

    let b1Title = (JSON.stringify(json.articles[0].title))
    b1Title = b1Title.substr(1).slice(0, -1);
    console.log("News Title: " + b1Title);

    let b1Description = (JSON.stringify(json.articles[0].description))
    b1Description = b1Description.substr(1).slice(0, -1);
    console.log("News Description: " + b1Description);

    let b1Url = (JSON.stringify(json.articles[0].url))
    b1Url = b1Url.substr(1).slice(0, -1);
    console.log("News URL: " + b1Url);

  });
}

function getSportsNews()
{
  const urlbase = "https://newsapi.org/v1/articles?source=";
  const rest = "&sortBy=top"; // in english, and top info.
  const apikey = "&apiKey=c70c8062d2544d5b8459796ca2707d7a";
  const sports = "fox-sports";

  // example:
  // https://newsapi.org/v1/articles?source=fox-sports&sortBy=latest&apiKey=c70c8062d2544d5b8459796ca2707d7a

  $.getJSON(`${urlbase + sports + rest + apikey}`,function(json)
  {
    let sSource = (JSON.stringify(json.source))
    sSource = sSource.substr(1).slice(0, -1); // to remove the quote marks
    console.log("News Source: " + sSource);

    let s1Title = (JSON.stringify(json.articles[0].title))
    s1Title = s1Title.substr(1).slice(0, -1);
    console.log("News Title: " + s1Title);

    let s1Description = (JSON.stringify(json.articles[0].description))
    s1Description = s1Description.substr(1).slice(0, -1);
    console.log("News Description: " + s1Description);

    let s1Url = (JSON.stringify(json.articles[0].url))
    s1Url = s1Url.substr(1).slice(0, -1);
    console.log("News URL: " + s1Url);

  });
}

// http://jsfiddle.net/andrewwhitaker/q6eLV/ - clearing text
// http://jsfiddle.net/6bSX6/ - entering on change of text
