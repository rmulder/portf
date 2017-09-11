// 'use strict';

calculate = function()
{
    let a = document.getElementById('current-percent').value;
    let b = document.getElementById('min-percent').value;
    let c = document.getElementById('final-percent').value;
    let total = parseInt(a)*parseInt(b)*parseInt(c);
    document.getElementById('total').value = parseInt(a)*parseInt(b)*parseInt(c);
    console.log("Total of the items entered: " + total);
}

checker = function()
{
  if(total == !NaN)
  {
    console.log("Everything was fine when calculating when user entered numbers!");
  }
  if( !isNaN(total) )
  {
    console.error("There was an error when calculating the numbers entered! Try Again!");
  }
}

// $(document).ready(function()
// {
//   function calculate()
//   {
//     let curr = $("current-percent").val();
//     let want = $("min-percent").val();
//     let final = $("final-percent").val();
//     let total = curr + want + final;
//     console.log("The total values added together: " + total);
//     $("#total").val(total);
//   }
//   $('#curr, #want, #final').change(calculate);
// });
