// for news api json

"use strict";

$(document).ready(function()
{
  // $(".overall-cards").css({'display': ' '});
  $(".field__input").change(function(e) // basically auto enter.
  {
    let kw = $(".field__input").val(); // zip coder entered by user
    kw = kw.toLowerCase().replace(/\s/g, '');
    console.log("Keyword entered: " + kw);

    $(".card__content").hide();

    if(kw.search('tech') !== -1 || kw.search('technology') !== -1 || kw.search('comp') !== -1 || kw.search('computer') !== -1 || kw.search('computers') !== -1 || kw.search('phones') !== -1 || kw.search('phone') !== -1 || kw.search('smart') !== -1)
    {
      console.log("Calling getTechNewsFunction");
      getTechNews();
    }
    else if (kw.search('sport') !== -1 || kw.search('sports') !== -1 || kw.search('sportz') !== -1)
    {
      console.log("Calling getSportsNewsFunction");
      getSportsNews();
    }
    else if (kw.search('business') !== -1 || kw.search('busi') !== -1 || kw.search('busines') !== -1 || kw.search('bus') !== -1 || kw.search('finance') !== -1 || kw.search('stock') !== -1 || kw.search('stocks') !== -1 || kw.search('market') !== -1 || kw.search('account') !== -1 || kw.search('accounting') !== -1)
    {
      console.log("Calling getBusinessNews");
      getBusinessNews();
    }
    else if(kw.search('silicon') !== -1 || kw.search('valley') !== -1 || kw.search('siliconvalley') !== -1 || kw.search('thevalley') !== -1 || kw.search('bay') !== -1 || kw.search('bayarea') !== -1 || kw.search('thebay') !== -1 || kw.search('sf') !== -1 || kw.search('sanfrancisco') !== -1 || kw.search('sv') !== -1)
    {
      console.log("Calling getSiliconValleyNewsFunction");
      getSVNews();
    }
    else
    {
      console.log("Generally Popular News Called");
      getGeneralNews();
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

    let t1Title = (JSON.stringify(json.articles[0].title))
    t1Title = t1Title.substr(1).slice(0, -1);
    console.log("News Title: " + t1Title);

    let t1Description = (JSON.stringify(json.articles[0].description))
    t1Description = t1Description.substr(1).slice(0, -1);
    console.log("News Description: " + t1Description);

    let t1Url = (JSON.stringify(json.articles[0].url))
    t1Url = t1Url.substr(1).slice(0, -1);
    console.log("News URL: " + t1Url);

    let t1UrlI = (JSON.stringify(json.articles[0].urlToImage)) // url of image
    t1UrlI = t1UrlI.substr(1).slice(0, -1);
    console.log("News URL Image: " + t1UrlI);


    $(".card__title").text(t1Title); // assigning the title to the card title

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

    let b1UrlI = (JSON.stringify(json.articles[0].urlToImage)) // url of image
    b1UrlI = b1UrlI.substr(1).slice(0, -1);
    console.log("News URL Image: " + b1UrlI);

    $(".card__title").text(b1Title); // assigning the title to the card title

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

    let s1UrlI = (JSON.stringify(json.articles[0].urlToImage)) // url of image
    s1UrlI = s1UrlI.substr(1).slice(0, -1);
    console.log("News URL Image: " + s1UrlI);

    $(".card__title").text(s1Title); // assigning the title to the card title

  });
}

function getGeneralNews()
{
  const urlbase = "https://newsapi.org/v1/articles?source=";
  const rest = "&sortBy=top"; // in english, and top info.
  const apikey = "&apiKey=c70c8062d2544d5b8459796ca2707d7a";
  const cnn = "cnn";

  // example:
  // https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=c70c8062d2544d5b8459796ca2707d7a

  $.getJSON(`${urlbase + cnn + rest + apikey}`,function(json)
  {
    let gSource = (JSON.stringify(json.source))
    gSource = gSource.substr(1).slice(0, -1); // to remove the quote marks
    console.log("News Source: " + gSource);

    let g1Title = (JSON.stringify(json.articles[0].title))
    g1Title = g1Title.substr(1).slice(0, -1);
    console.log("News Title: " + g1Title);

    let g1Description = (JSON.stringify(json.articles[0].description))
    g1Description = g1Description.substr(1).slice(0, -1);
    console.log("News Description: " + g1Description);

    let g1Url = (JSON.stringify(json.articles[0].url))
    g1Url = g1Url.substr(1).slice(0, -1);
    console.log("News URL: " + g1Url);

    let g1UrlI = (JSON.stringify(json.articles[0].urlToImage)) // url of image
    g1UrlI = g1UrlI.substr(1).slice(0, -1);
    console.log("News URL Image: " + g1UrlI);

    $(".card__title").text(g1Title); // assigning the title to the card title

  });
}

function getSVNews()
{
  const urlbase = "https://newsapi.org/v1/articles?source=";
  const rest = "&sortBy=top"; // in english, and top info.
  const apikey = "&apiKey=c70c8062d2544d5b8459796ca2707d7a";
  const recode = "recode";

  // example:
  // https://newsapi.org/v1/articles?source=recode&sortBy=top&apiKey=c70c8062d2544d5b8459796ca2707d7a

  $.getJSON(`${urlbase + recode + rest + apikey}`,function(json)
  {
    let svSource = (JSON.stringify(json.source))
    svSource = svSource.substr(1).slice(0, -1); // to remove the quote marks
    console.log("News Source: " + svSource);

    let sv1Title = (JSON.stringify(json.articles[0].title))
    sv1Title = sv1Title.substr(1).slice(0, -1);
    console.log("News Title: " + sv1Title);

    let sv1Description = (JSON.stringify(json.articles[0].description))
    sv1Description = sv1Description.substr(1).slice(0, -1);
    console.log("News Description: " + sv1Description);

    let sv1Url = (JSON.stringify(json.articles[0].url))
    sv1Url = sv1Url.substr(1).slice(0, -1);
    console.log("News URL: " + sv1Url);

    let sv1UrlI = (JSON.stringify(json.articles[0].urlToImage)) // url of image
    sv1UrlI = sv1UrlI.substr(1).slice(0, -1);
    console.log("News URL Image: " + sv1UrlI);

    $(".card__title").text(sv1Title); // assigning the title to the card title

  });
}

// http://jsfiddle.net/andrewwhitaker/q6eLV/ - clearing text
// http://jsfiddle.net/6bSX6/ - entering on change of text
