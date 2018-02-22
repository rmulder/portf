const request = require('request');
const cheerio = require('cheerio');
const URL = require('url-parse');
const fs = require("fs"); // node's file system (fs)


// request() used for making http requests.
// Cheerio used for parsing and selecting html elements in page.
request("https://www.reddit.com", function(error, response, body)
{
  if(error)
  {
    console.error("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  let $ = cheerio.load(body);

  $('div#siteTable > div.link').each(function( index )
  {
    let title = $(this).find('p.title > a.title').text().trim();
    let score = $(this).find('div.score.unvoted').text().trim();
    let user = $(this).find('a.author').text().trim();
    console.log("Title: " + title);
    console.log("Score: " + score);
    console.log("User: " + user);
    fs.appendFileSync('reddit.txt', title + '\n' + score + '\n' + user + '\n');
  });

});
