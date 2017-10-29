// for news api json

console.log(`I'm required by Webpack`);
import './es6code';

"use strict";

$(document).ready(function()
{
  $(".field__input").change(function(e) // basically auto enter.
  {
    let kw = $(".field__input").val();
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

    let t2Title = (JSON.stringify(json.articles[1].title))
    t2Title = t2Title.substr(1).slice(0, -1);
    console.log("News Title 2: " + t2Title);

    let t2Description = (JSON.stringify(json.articles[1].description))
    t2Description = t2Description.substr(1).slice(0, -1);
    console.log("News Description: " + t2Description);

    let t2Url = (JSON.stringify(json.articles[1].url))
    t2Url = t2Url.substr(1).slice(0, -1);
    console.log("News URL: " + t2Url);

    let t2UrlI = (JSON.stringify(json.articles[1].urlToImage)) // url of image
    t2UrlI = t2UrlI.substr(1).slice(0, -1);
    console.log("News URL Image: " + t2UrlI);


    let t3Title = (JSON.stringify(json.articles[2].title))
    t3Title = t3Title.substr(1).slice(0, -1);
    console.log("News Title 2: " + t3Title);

    let t3Description = (JSON.stringify(json.articles[2].description))
    t3Description = t3Description.substr(1).slice(0, -1);
    console.log("News Description: " + t3Description);

    let t3Url = (JSON.stringify(json.articles[2].url))
    t3Url = t3Url.substr(1).slice(0, -1);
    console.log("News URL: " + t3Url);

    let t3UrlI = (JSON.stringify(json.articles[2].urlToImage)) // url of image
    t3UrlI = t3UrlI.substr(1).slice(0, -1);
    console.log("News URL Image: " + t3UrlI);

    $(".overall-cards1").append('<ul class="cards">'
      +'<li class="cards__item">'
              +'<div class="card">'
                +'<div class="card__image card__image--flowers"></div>'
                +'<div class="card__content">'
                  +'<div class="card__title">'+ t1Title +'</div>'
                  +'<p class="card__text">'+ t1Description +'</p>'
                  +'<button id="t1link"  class="btn btn--block card__btn">' + 'Tech Crunch Link' +'</button>'
                +'</div>'
              +'</div>'
            +'</li>'
            +'<li class="cards__item">'
              +'<div class="card">'
                +'<div class="card__image card__image--flowers"></div>'
                +'<div class="card__content">'
                  +'<div class="card__title">'+ t2Title +'</div>'
                  +'<p class="card__text">'+ t2Description +'</p>'
                  +'<button id="t2link"  class="btn btn--block card__btn">'+ 'Tech Crunch Link' +'</button>'
                +'</div>'
              +'</div>'
            +'</li>'
            +'<li class="cards__item">'
              +'<div class="card">'
                +'<div class="card__image card__image--flowers"></div>'
                +'<div class="card__content">'
                  +'<div class="card__title">'+ t3Title +'</div>'
                  +'<p class="card__text">'+ t3Description +'</p>'
                  +'<button id="t3link" class="btn btn--block card__btn">'+ 'Tech Crunch Link' +'</button>'
                +'</div>'
              +'</div>'
            +'</li>'
          +'</ul>');

          $("#t1link").click(function()
          {
            window.open( t1Url ,'_blank');
          });

          $("#t2link").click(function()
          {
            window.open( t2Url ,'_blank');
          });

          $("#t3link").click(function()
          {
            window.open( t3Url ,'_blank');
          });

  });
};


function getBusinessNews()
{
  const urlbase = "https://newsapi.org/v1/articles?source=";
  const rest = "&sortBy=top"; // popular info.
  const apikey = "&apiKey=c70c8062d2544d5b8459796ca2707d7a";
  const business = "bloomberg";

  // example:
  // https://newsapi.org/v1/articles?source=bloomberg&sortBy=top&apiKey=c70c8062d2544d5b8459796ca2707d7a

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


    let b2Title = (JSON.stringify(json.articles[1].title))
    b2Title = b2Title.substr(1).slice(0, -1);
    console.log("News Title: " + b2Title);

    let b2Description = (JSON.stringify(json.articles[1].description))
    b2Description = b2Description.substr(1).slice(0, -1);
    console.log("News Description: " + b2Description);

    let b2Url = (JSON.stringify(json.articles[1].url))
    b2Url = b2Url.substr(1).slice(0, -1);
    console.log("News URL: " + b2Url);

    let b2UrlI = (JSON.stringify(json.articles[1].urlToImage)) // url of image
    b2UrlI = b2UrlI.substr(1).slice(0, -1);
    console.log("News URL Image: " + b2UrlI);

    let b3Title = (JSON.stringify(json.articles[2].title))
    b3Title = b3Title.substr(1).slice(0, -1);
    console.log("News Title: " + b3Title);

    let b3Description = (JSON.stringify(json.articles[2].description))
    b3Description = b3Description.substr(1).slice(0, -1);
    console.log("News Description: " + b3Description);

    let b3Url = (JSON.stringify(json.articles[2].url))
    b3Url = b3Url.substr(1).slice(0, -1);
    console.log("News URL: " + b3Url);

    let b3UrlI = (JSON.stringify(json.articles[2].urlToImage)) // url of image
    b3UrlI = b3UrlI.substr(1).slice(0, -1);
    console.log("News URL Image: " + b3UrlI);

    $(".overall-cards1").append('<ul class="cards">'
      +'<li class="cards__item">'
              +'<div class="card">'
                +'<div class="card__image card__image--bus"></div>'
                +'<div class="card__content">'
                  +'<div class="card__title">'+ b1Title +'</div>'
                  +'<p class="card__text">'+ b1Description +'</p>'
                  +'<button id="b1link" class="btn btn--block card__btn">' + 'Bloomberg Insider Link' +'</button>'
                +'</div>'
              +'</div>'
            +'</li>'
            +'<li class="cards__item">'
              +'<div class="card">'
                +'<div class="card__image card__image--bus"></div>'
                +'<div class="card__content">'
                  +'<div class="card__title">'+ b2Title +'</div>'
                  +'<p class="card__text">'+ b2Description +'</p>'
                  +'<button id="b2link" class="btn btn--block card__btn">'+ 'Bloomberg Insider Link' +'</button>'
                +'</div>'
              +'</div>'
            +'</li>'
            +'<li class="cards__item">'
              +'<div class="card">'
                +'<div class="card__image card__image--bus"></div>'
                +'<div class="card__content">'
                  +'<div class="card__title">'+ b3Title +'</div>'
                  +'<p class="card__text">'+ b3Description +'</p>'
                  +'<button id="b3link" class="btn btn--block card__btn">'+ 'Bloomberg Insider Link' +'</button>'
                +'</div>'
              +'</div>'
            +'</li>'
          +'</ul>');

          $("#b1link").click(function()
          {
            window.open( b1Url ,'_blank');
          });

          $("#b2link").click(function()
          {
            window.open( b2Url ,'_blank');
          });

          $("#b3link").click(function()
          {
            window.open( b3Url ,'_blank');
          });

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


    let s2Title = (JSON.stringify(json.articles[1].title))
    s2Title = s2Title.substr(1).slice(0, -1);
    console.log("News Title: " + s2Title);

    let s2Description = (JSON.stringify(json.articles[1].description))
    s2Description = s2Description.substr(1).slice(0, -1);
    console.log("News Description: " + s2Description);

    let s2Url = (JSON.stringify(json.articles[1].url))
    s2Url = s2Url.substr(1).slice(0, -1);
    console.log("News URL: " + s2Url);

    let s2UrlI = (JSON.stringify(json.articles[1].urlToImage)) // url of image
    s2UrlI = s2UrlI.substr(1).slice(0, -1);
    console.log("News URL Image: " + s2UrlI);


    let s3Title = (JSON.stringify(json.articles[2].title))
    s3Title = s3Title.substr(1).slice(0, -1);
    console.log("News Title: " + s3Title);

    let s3Description = (JSON.stringify(json.articles[2].description))
    s3Description = s3Description.substr(1).slice(0, -1);
    console.log("News Description: " + s3Description);

    let s3Url = (JSON.stringify(json.articles[2].url))
    s3Url = s3Url.substr(1).slice(0, -1);
    console.log("News URL: " + s3Url);

    let s3UrlI = (JSON.stringify(json.articles[2].urlToImage)) // url of image
    s3UrlI = s3UrlI.substr(1).slice(0, -1);
    console.log("News URL Image: " + s3UrlI);

    $(".overall-cards1").append('<ul class="cards">'
      +'<li class="cards__item">'
              +'<div class="card">'
                +'<div class="card__image card__image--sport"></div>'
                +'<div class="card__content">'
                  +'<div class="card__title">'+ s1Title +'</div>'
                  +'<p class="card__text">'+ s1Description +'</p>'
                  +'<button id="s1link" class="btn btn--block card__btn">' + 'Fox Sports Link' +'</button>'
                +'</div>'
              +'</div>'
            +'</li>'
            +'<li class="cards__item">'
              +'<div class="card">'
                +'<div class="card__image card__image--sport"></div>'
                +'<div class="card__content">'
                  +'<div class="card__title">'+ s2Title +'</div>'
                  +'<p class="card__text">'+ s2Description +'</p>'
                  +'<button id="s2link" class="btn btn--block card__btn">'+ 'Fox Sports Link' +'</button>'
                +'</div>'
              +'</div>'
            +'</li>'
            +'<li class="cards__item">'
              +'<div class="card">'
                +'<div class="card__image card__image--sport"></div>'
                +'<div class="card__content">'
                  +'<div class="card__title">'+ s3Title +'</div>'
                  +'<p class="card__text">'+ s3Description +'</p>'
                  +'<button id="s3link" class="btn btn--block card__btn">'+ 'Fox Sports Link' +'</button>'
                +'</div>'
              +'</div>'
            +'</li>'
          +'</ul>');

          $("#s1link").click(function()
          {
            window.open( s1Url ,'_blank');
          });

          $("#s2link").click(function()
          {
            window.open( s2Url ,'_blank');
          });

          $("#s3link").click(function()
          {
            window.open( s3Url ,'_blank');
          });

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

    let g2Title = (JSON.stringify(json.articles[1].title))
    g2Title = g2Title.substr(1).slice(0, -1);
    console.log("News Title: " + g2Title);

    let g2Description = (JSON.stringify(json.articles[1].description))
    g2Description = g2Description.substr(1).slice(0, -1);
    console.log("News Description: " + g2Description);

    let g2Url = (JSON.stringify(json.articles[1].url))
    g2Url = g2Url.substr(1).slice(0, -1);
    console.log("News URL: " + g2Url);

    let g2UrlI = (JSON.stringify(json.articles[1].urlToImage)) // url of image
    g2UrlI = g2UrlI.substr(1).slice(0, -1);
    console.log("News URL Image: " + g2UrlI);

    let g3Title = (JSON.stringify(json.articles[2].title))
    g3Title = g3Title.substr(1).slice(0, -1);
    console.log("News Title: " + g3Title);

    let g3Description = (JSON.stringify(json.articles[2].description))
    g3Description = g3Description.substr(1).slice(0, -1);
    console.log("News Description: " + g3Description);

    let g3Url = (JSON.stringify(json.articles[2].url))
    g3Url = g3Url.substr(1).slice(0, -1);
    console.log("News URL: " + g3Url);

    let g3UrlI = (JSON.stringify(json.articles[2].urlToImage)) // url of image
    g3UrlI = g3UrlI.substr(1).slice(0, -1);
    console.log("News URL Image: " + g3UrlI);

    $(".overall-cards1").append('<ul class="cards">'
      +'<li class="cards__item">'
              +'<div class="card">'
                +'<div class="card__image card__image--gnews"></div>'
                +'<div class="card__content">'
                  +'<div class="card__title">'+ g1Title +'</div>'
                  +'<p class="card__text">'+ g1Description +'</p>'
                  +'<button id="g1link" class="btn btn--block card__btn">' + 'CNN Link' +'</button>'
                +'</div>'
              +'</div>'
            +'</li>'
            +'<li class="cards__item">'
              +'<div class="card">'
                +'<div class="card__image card__image--gnews"></div>'
                +'<div class="card__content">'
                  +'<div class="card__title">'+ g2Title +'</div>'
                  +'<p class="card__text">'+ g2Description +'</p>'
                  +'<button id="g2link" class="btn btn--block card__btn">'+ 'CNN Link' +'</button>'
                +'</div>'
              +'</div>'
            +'</li>'
            +'<li class="cards__item">'
              +'<div class="card">'
                +'<div class="card__image card__image--gnews"></div>'
                +'<div class="card__content">'
                  +'<div class="card__title">'+ g3Title +'</div>'
                  +'<p class="card__text">'+ g3Description +'</p>'
                  +'<button id="g3link" class="btn btn--block card__btn">'+ 'CNN Link' +'</button>'
                +'</div>'
              +'</div>'
            +'</li>'
          +'</ul>');

          $("#g1link").click(function()
          {
            window.open( g1Url ,'_blank');
          });

          $("#g2link").click(function()
          {
            window.open( g2Url ,'_blank');
          });

          $("#g3link").click(function()
          {
            window.open( g3Url ,'_blank');
          });

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

    let sv2Title = (JSON.stringify(json.articles[1].title))
    sv2Title = sv2Title.substr(1).slice(0, -1);
    console.log("News Title: " + sv2Title);

    let sv2Description = (JSON.stringify(json.articles[1].description))
    sv2Description = sv2Description.substr(1).slice(0, -1);
    console.log("News Description: " + sv2Description);

    let sv2Url = (JSON.stringify(json.articles[1].url))
    sv2Url = sv2Url.substr(1).slice(0, -1);
    console.log("News URL: " + sv2Url);

    let sv2UrlI = (JSON.stringify(json.articles[1].urlToImage)) // url of image
    sv2UrlI = sv2UrlI.substr(1).slice(0, -1);
    console.log("News URL Image: " + sv2UrlI);

    let sv3Title = (JSON.stringify(json.articles[2].title))
    sv3Title = sv3Title.substr(1).slice(0, -1);
    console.log("News Title: " + sv3Title);

    let sv3Description = (JSON.stringify(json.articles[2].description))
    sv3Description = sv3Description.substr(1).slice(0, -1);
    console.log("News Description: " + sv3Description);

    let sv3Url = (JSON.stringify(json.articles[2].url))
    sv3Url = sv3Url.substr(1).slice(0, -1);
    console.log("News URL: " + sv3Url);

    let sv3UrlI = (JSON.stringify(json.articles[2].urlToImage)) // url of image
    sv3UrlI = sv3UrlI.substr(1).slice(0, -1);
    console.log("News URL Image: " + sv3UrlI);

    $(".overall-cards1").append('<ul class="cards">'
      +'<li class="cards__item">'
              +'<div class="card">'
                +'<div class="card__image card__image--sv"></div>'
                +'<div class="card__content">'
                  +'<div class="card__title">'+ sv1Title +'</div>'
                  +'<p class="card__text">'+ sv1Description +'</p>'
                  +'<button id="sv1link" class="btn btn--block card__btn">' + 'Recode Link' +'</button>'
                +'</div>'
              +'</div>'
            +'</li>'
            +'<li class="cards__item">'
              +'<div class="card">'
                +'<div class="card__image card__image--sv"></div>'
                +'<div class="card__content">'
                  +'<div class="card__title">'+ sv2Title +'</div>'
                  +'<p class="card__text">'+ sv2Description +'</p>'
                  +'<button id="sv2link" class="btn btn--block card__btn">'+ 'Recode Link' +'</button>'
                +'</div>'
              +'</div>'
            +'</li>'
            +'<li class="cards__item">'
              +'<div class="card">'
                +'<div class="card__image card__image--sv"></div>'
                +'<div class="card__content">'
                  +'<div class="card__title">'+ sv3Title +'</div>'
                  +'<p class="card__text">'+ sv3Description +'</p>'
                  +'<button id="sv3link" class="btn btn--block card__btn">'+ 'Recode Link' +'</button>'
                +'</div>'
              +'</div>'
            +'</li>'
          +'</ul>');

          $("#sv1link").click(function()
          {
            window.open( sv1Url ,'_blank');
          });

          $("#sv2link").click(function()
          {
            window.open( sv2Url ,'_blank');
          });

          $("#sv3link").click(function()
          {
            window.open( sv3Url ,'_blank');
          });

  });
}

// http://jsfiddle.net/andrewwhitaker/q6eLV/ - clearing text
// http://jsfiddle.net/6bSX6/ - entering on change of text
