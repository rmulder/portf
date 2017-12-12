"use strict";

console.info("Inside bart.js");

let overallCall = () =>
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

    firstCall(json);
    secondCall(json);

  });
}
overallCall();

let firstCall = (firstjson) =>
{
  // safety check for white trains:
  if((JSON.stringify(firstjson.root.station[0].etd[0].estimate[0].color)) == ' "WHITE" ')
  {
    console.log("Calling other function 1 for next newest train.");
    firstOtherCall(firstjson);
    return;
  }

  let firstDestinName = (JSON.stringify(firstjson.root.station[0].etd[0].destination))
  firstDestinName = firstDestinName.substr(1).slice(0, -1); // remove the quote marks
  console.info("1 Destination: " + firstDestinName);

  let firstDepTime = (JSON.stringify(firstjson.root.station[0].etd[0].estimate[0].minutes))
  firstDepTime = firstDepTime.substr(1).slice(0, -1); // remove the quote marks

  if(firstDepTime == "Leaving")
  {
    console.log("leaving train, updating info");
    console.info("1 dest. Depart Time: " + firstDepTime + " (0 mins)");
  }
  else if (firstDepTime !== "Leaving")
  {
    console.info("1 dest. Depart Time: " + firstDepTime + " mins");
  }

  $('.timeDepart').html(firstDepTime + " mins"); // changes the eta of departure on html side

  let firstplatform = (JSON.stringify(firstjson.root.station[0].etd[0].estimate[0].platform))
  firstplatform = firstplatform.substr(1).slice(0, -1); // remove the quote marks
  console.info("1 dest. Platform Number: " + firstplatform);

  $('.platformNum').html(firstplatform); // changes the value of the platform # on html side

  let firstcolor = (JSON.stringify(firstjson.root.station[0].etd[0].estimate[0].color))
  firstcolor = firstcolor.substr(1).slice(0, -1); // remove the quote marks
  console.info("1 Train Color: " + firstcolor);
}

let secondCall = (secondjson) =>
{
  // safety check for white trains:
  if((JSON.stringify(secondjson.root.station[0].etd[1].estimate[0].color)) === '"WHITE"')
  {
    console.log("Calling other function 2 for next newest train.");
    secondOtherCall(secondjson);
    return;
  }

  let secondDestinName = (JSON.stringify(secondjson.root.station[0].etd[1].destination))
  secondDestinName = secondDestinName.substr(1).slice(0, -1); // remove the quote marks
  console.info("2 Destination: " + secondDestinName);

  let secondDepTime = (JSON.stringify(secondjson.root.station[0].etd[1].estimate[0].minutes))
  secondDepTime = secondDepTime.substr(1).slice(0, -1); // remove the quote marks
  console.info("2 dest. Depart Time: " + secondDepTime + " mins");

  let secondplatform = (JSON.stringify(secondjson.root.station[0].etd[1].estimate[0].platform))
  secondplatform = secondplatform.substr(1).slice(0, -1); // remove the quote marks
  console.info("2 dest. Platform Number: " + secondplatform);

  let secondcolor = (JSON.stringify(secondjson.root.station[0].etd[1].estimate[0].color))
  secondcolor = secondcolor.substr(1).slice(0, -1); // remove the quote marks
  console.info("2 Train Color: " + secondcolor);
}

// if a train is white, need to display the next option and its eta departure time
let firstOtherCall = (firstOtherjson) =>
{
  console.log("Inside firstOtherCall function. Next closests train.");

  let firstOtherDestinName = (JSON.stringify(firstOtherjson.root.station[0].etd[0].destination))
  firstOtherDestinName = firstOtherDestinName.substr(1).slice(0, -1);
  console.info("1 Other Destination: " + firstOtherDestinName);

  let firstOtherDepTime = (JSON.stringify(firstOtherjson.root.station[0].etd[0].estimate[1].minutes))
  firstOtherDepTime = firstOtherDepTime.substr(1).slice(0, -1);
  console.info("1 Other dest. Depart Time: " + firstOtherDepTime + " mins");

  let firstOtherplatform = (JSON.stringify(firstOtherjson.root.station[0].etd[0].estimate[1].platform))
  firstOtherplatform = firstOtherplatform.substr(1).slice(0, -1);
  console.info("1 Other dest. Platform Number: " + firstOtherplatform);

  let firstOthercolor = (JSON.stringify(firstOtherjson.root.station[0].etd[0].estimate[1].color))
  firstOthercolor = firstOthercolor.substr(1).slice(0, -1);
  console.info("1 Other Other Train Color: " + firstOthercolor);
}


// if a train is white, need to display the next option and its eta departure time
let secondOtherCall = (secondOtherjson) =>
{
  console.log("Inside secondOtherCall function. Next closests train.");

  let secondOtherDestinName = (JSON.stringify(secondOtherjson.root.station[0].etd[1].destination))
  secondOtherDestinName = secondOtherDestinName.substr(1).slice(0, -1);
  console.info("2 Other Destination: " + secondOtherDestinName);

  let secondOtherDepTime = (JSON.stringify(secondOtherjson.root.station[0].etd[1].estimate[1].minutes))
  secondOtherDepTime = secondOtherDepTime.substr(1).slice(0, -1);
  console.info("2 Other dest. Depart Time: " + secondOtherDepTime + " mins");

  let secondOtherplatform = (JSON.stringify(secondOtherjson.root.station[0].etd[1].estimate[1].platform))
  secondOtherplatform = secondOtherplatform.substr(1).slice(0, -1);
  console.info("2 Other dest. Platform Number: " + secondOtherplatform);

  let secondOthercolor = (JSON.stringify(secondOtherjson.root.station[0].etd[1].estimate[1].color))
  secondOthercolor = secondOthercolor.substr(1).slice(0, -1);
  console.info("2 Other Train Color: " + secondOthercolor);
}
