"use strict";

console.info("Inside bart.js");

function fremontCall()
{
  // example:
  // http://api.bart.gov/api/etd.aspx?cmd=etd&orig=FRMT&key=MW9S-E7SL-26DU-VV8V&json=y

  const urlbase = "http://api.bart.gov/api/etd.aspx?";
  const begin = "cmd=etd";
  const origin = "&orig=FRMT"; // origin station for departure
  const apikey = "&key=Z6ZD-PPHS-97TT-DWE9";
  const jsonOut = "&json=y";

  $.getJSON(`${urlbase + begin + origin + apikey + jsonOut}`,function(json)
  {
    let DalyC = (JSON.stringify(json.source))
    console.info("Daly City Timings: " + DalyC);

    // DalyC = DalyC.substr(1).slice(0, -1); // to remove the quote marks
  });
}
fremontCall();
