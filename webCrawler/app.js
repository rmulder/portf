const request = require('request');
const cheerio = require('url-parse');
const url-parse = require('url-parse');
let pageToVisit = "http://www.arstechnica.com";


console.log("Visiting page " + pageToVisit);
request(pageToVisit, function(error, response, body)
{
   if(error)
   {
     console.error("Error: " + error);
   }
   // Check status code (200 is HTTP OK)
   console.log("Status code: " + response.statusCode);
   if(response.statusCode === 200)
   {
     // Parse the document body
     let $ = cheerio.load(body);
     console.log("Page title:  " + $('title').text());
   }
});
