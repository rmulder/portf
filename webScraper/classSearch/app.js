const request = require('request');
const cheerio = require('cheerio');
const URL = require('url-parse');
const fs = require("fs"); // node's file system (fs)

// MTH 255 Spring 2018 Course Searching

// request() used for making http requests.
// Cheerio used for parsing and selecting html elements in page.
request("http://catalog.oregonstate.edu/CourseDetail.aspx?Columns=afghijklmnopqrstuvwyz{&SubjectCode=MTH&CourseNumber=255&Term=201803&Campus=corvallis", function(error, response, body)
{
  if(error)
  {
    console.error("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  let $ = cheerio.load(body);

  $('tr > tr').each(function(index)
  {
    let instructorName = $(this).find('th:nth-child(4)').text().trim();
//    let score = $(this).find('div.score.unvoted').text().trim();
//    let user = $(this).find('a.author').text().trim();
    console.log("InstructorName: " + instructorName);
//    console.log("Score: " + score);
//    console.log("User: " + user);
      fs.appendFileSync('MTH255-Test.txt', instructorName + '\n');
//    fs.appendFileSync('MTH255-18-ClassInfo.txt', instructorName + '\n' + score + '\n' + user + '\n');
  });

});
