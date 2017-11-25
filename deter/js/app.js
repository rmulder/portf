"use strict";

console.log("determinate calculator js linked");

function calc()
{
  let deterStore = []; // array for storage of rows and columns in deter

  deterStore.push(parseInt(document.getElementById('1-enter').value, 10))
  deterStore.push(parseInt(document.getElementById('2-enter').value, 10))
  deterStore.push(parseInt(document.getElementById('3-enter').value, 10))
  deterStore.push(parseInt(document.getElementById('4-enter').value, 10))
  deterStore.push(parseInt(document.getElementById('5-enter').value, 10))
  deterStore.push(parseInt(document.getElementById('6-enter').value, 10))
  deterStore.push(parseInt(document.getElementById('7-enter').value, 10))
  deterStore.push(parseInt(document.getElementById('8-enter').value, 10))
  deterStore.push(parseInt(document.getElementById('9-enter').value, 10))

  for(let i = 0; i < deterStore.length; i++)
  {
    console.info("Values in determinant:" + deterStore[i]);
  }

  // Calcuation working
  const deterFinalVal = ((deterStore[0])*((deterStore[4]*deterStore[8]) - (deterStore[5]*deterStore[7])) - ((deterStore[1])*((deterStore[3]*deterStore[8]) - (deterStore[5]*deterStore[6]))) + ((deterStore[2])*((deterStore[3]*deterStore[7]) - (deterStore[6]*deterStore[4]))) );
  console.info("Determinant Value: " + deterFinalVal);

  document.getElementById('deter-value-final').value = (deterFinalVal.toPrecision(1));

  // let pos1 = parseInt(document.getElementById('1-enter').value, 10);
  // console.log(pos1);
}
