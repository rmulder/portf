"use strict";

const checker = () =>
{
  if((regex1.test(input2) == true))
  {
    console.log("Binary number!");
  }
  else if (regex1.test(input2) == false)
  {
    console.log("Not a binary number");
  }
  else
  {
    console.error("error!");
  }
}

let input = "23";
let input2 = "1101000";

let regex1 = RegExp("[01]+");

if((regex1.test(input2) == true))
{
  console.log("Binary number!");
}
else
{
  console.log("Not a binary number");
}
