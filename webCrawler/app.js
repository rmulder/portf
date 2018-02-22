const request = require('request');
const cheerio = require('url-parse');
const url-parse = require('url-parse');

const START_URL = "http://www.arstechnica.com";
const SEARCH_WORD = "stemming";
const MAX_PAGES_TO_VISIT = 10;

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
