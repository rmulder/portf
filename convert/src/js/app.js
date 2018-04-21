"use strict";

const add = () =>
{
  const inputVal = document.getElementById('inputOne').value;
  checker(inputVal); // checks input then runs appropriate function
}

const checker = (inputV) =>
{
  let regex1 = RegExp("[01]+");

  if((regex1.test(inputV) == true))
  {
    console.log("Binary number!");
    // console.log(parseInt(inputV, 2));
    const binV = parseInt(inputV, 2);
    console.log(binV);
    document.getElementById('outputOne').value = binV;
  }
  else if (regex1.test(inputV) != true)
  {
    console.log("Not a binary number");
    // console.log(parseInt(inputV, 10).toString(2));
    const decV = parseInt(inputV, 10).toString(2);
    console.log(decV);
    document.getElementById('outputOne').value = decV;
  }
  else
  {
    console.error("Error!");
  }
}
