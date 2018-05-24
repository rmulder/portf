"use strict";

console.log("determinate calculator js linked");

// adds data to array.
let add = () =>
{
  let deterStore = [];

  // in order of left to right entry
  deterStore.push($('#1-enter').val());
  deterStore.push($('#2-enter').val());
  deterStore.push($('#3-enter').val());
  deterStore.push($('#4-enter').val());
  deterStore.push($('#5-enter').val());
  deterStore.push($('#6-enter').val());
  deterStore.push($('#7-enter').val());
  deterStore.push($('#8-enter').val());
  deterStore.push($('#9-enter').val());

  // // prints content to console
  // for(let i of deterStore)
  // {
  //   console.info("Values in determinant:" + deterStore[i]);
  // }

  threeCalc(deterStore); // calls calculation function
}

let threeCalc = (deterStore) =>
{
  // Calcuation working
  let deterFinalVal = ((deterStore[0])*((deterStore[4]*deterStore[8]) - (deterStore[5]*deterStore[7])) - ((deterStore[1])*((deterStore[3]*deterStore[8]) - (deterStore[5]*deterStore[6]))) + ((deterStore[2])*((deterStore[3]*deterStore[7]) - (deterStore[6]*deterStore[4]))) );
  // let deterFinalVal = 352;
  return deterFinalVal;
  console.info("Determinant Value: " + deterFinalVal);

  document.getElementById('deter-value-final').value = (deterFinalVal);
  $('#deter-value-final').val();

  return deterFinalVal;
}

module.exports.threeCalc = threeCalc;
