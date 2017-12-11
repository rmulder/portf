"use strict";

console.info("Inside bart.js");

let fremontCall = () =>
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
    let localTime = (JSON.stringify(json.root.time))
    localTime = localTime.substr(1).slice(0, -1); // remove the quote marks
    console.info("Local Time: " + localTime);

    let firstDestinName = (JSON.stringify(json.root.station[0].etd[0].destination))
    firstDestinName = firstDestinName.substr(1).slice(0, -1); // remove the quote marks
    console.info("1 Destination: " + firstDestinName);

    let firstDestinDep = (JSON.stringify(json.root.station[0].etd[0].destination))
    firstDestinDep = firstDestinDep.substr(1).slice(0, -1); // remove the quote marks
    console.info("1 dest. Depart Time: " + firstDestinDep);

  });
}
fremontCall();
