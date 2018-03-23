"use strict";

console.log("determinate calculator js linked");

// adds the data to array.
let add = () =>
{
  let deterStore = [];

  deterStore.push($('#1-enter').val());
  deterStore.push($('#2-enter').val());
  deterStore.push($('#3-enter').val());
  deterStore.push($('#4-enter').val());
  deterStore.push($('#5-enter').val());
  deterStore.push($('#6-enter').val());
  deterStore.push($('#7-enter').val());
  deterStore.push($('#8-enter').val());
  deterStore.push($('#9-enter').val());

  // // prints content to the console for debugging purposes.
  // for(let i = 0; i < deterStore.length; i++)
  // {
  //   console.info("Values in determinant:" + deterStore[i]);
  // }

  threeCalc(deterStore); // calls calculation function
}

let threeCalc = (deterStore) =>
{
  // Calcuation working
  let deterFinalVal = ((deterStore[0])*((deterStore[4]*deterStore[8]) - (deterStore[5]*deterStore[7])) - ((deterStore[1])*((deterStore[3]*deterStore[8]) - (deterStore[5]*deterStore[6]))) + ((deterStore[2])*((deterStore[3]*deterStore[7]) - (deterStore[6]*deterStore[4]))) );
  console.info("Determinant Value: " + deterFinalVal);

  document.getElementById('deter-value-final').value = (deterFinalVal);
  $('#deter-value-final').val();
}

module.exports.valueArray = deterStore;
