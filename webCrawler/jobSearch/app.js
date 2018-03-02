const request = require('request');
const cheerio = require('cheerio');
const URL = require('url-parse');
const opn = require('opn');

const START_URL = "https://www.oracle.com/careers";
const SEARCH_LIST = ['Student / Intern', 'bob', 'Engineering Intern', 'joe'];
const SEARCH_WORD = "Intern";
const MAX_PAGES_TO_VISIT = 500;

let pagesVisited = {};
let numPagesVisited = 0;
let pagesToVisit = [];
let url = new URL(START_URL);
let baseUrl = url.protocol + "//" + url.hostname;

pagesToVisit.push(START_URL);
crawl();

function crawl()
{
  if(numPagesVisited >= MAX_PAGES_TO_VISIT)
  {
    console.log("Reached max limit of number of pages to visit.");
    return;
  }
  let nextPage = pagesToVisit.pop();
  if (nextPage in pagesVisited)
  {
    // We've already visited this page, so repeat the crawl
    crawl();
  }
  else
  {
    // New page we haven't visited
    visitPage(nextPage, crawl);
  }
}

function visitPage(url, callback)
{
  // Add page to our set
  pagesVisited[url] = true;
  numPagesVisited++;

  // Make the request
  console.log("Visiting page " + url);
  request(url, function(error, response, body)
  {
     // Check status code (200 is HTTP OK)
     console.log("Status code: " + response.statusCode);
     if(response.statusCode !== 200)
     {
       callback();
       return;
     }
     // Parse the document body
     let $ = cheerio.load(body);
     let isWordFound = tagContentSearch($, SEARCH_WORD, SEARCH_LIST);
     if(isWordFound)
     {
       foundLoad();
       function foundLoad()
       {
         console.log("found the word!");
         // opn(url, {app: ['google chrome', '--incognito']});
         return 1;
       }
       console.log('Word ' + isWordFound + ' ' + ' found at page ' + url);
     }
     else
     {
       InternalLinkSearch($);
       // In this short program, our callback is just calling crawl()
       callback();
     }
  });
}


//searching for the word in the html body
function tagContentSearch($, word, listOfWords)
{
  console.log("inside tagContentSearch function");
  let bodyText = $('html > body').text().toLowerCase();

  let trav = 0;

  while (trav > 3)
  {
    console.log("Travesing through list of words for hit!");
    if(bodyText.toLowerCase().indexOf(listOfWords[e].toLowerCase()) !== -1)
    {
      return listOfWords[e];
    }
    trav++;
  }
  return false;

  // for(var e = 0; e <= listOfWords.length; e++)
  // {
  //   console.log("Travesing through list of words for hit!");
  //   if(bodyText.toLowerCase().indexOf(listOfWords[e].toLowerCase()) !== -1)
  //   {
  //     return listOfWords[e];
  //   }
  // }
  // return false;

  // if(bodyText.toLowerCase().indexOf(word.toLowerCase()) !== -1)
  // {
  //   return true;
  // }
  // else
  // {
  //   return false;
  // }
}

function InternalLinkSearch($)
{
    let relativeLinks = $("a[href^='/']");
    console.log("Found " + relativeLinks.length + " relative links on page");
    relativeLinks.each(function()
    {
        pagesToVisit.push(baseUrl + $(this).attr('href'));
    });
}
