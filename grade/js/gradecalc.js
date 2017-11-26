
function calculate()
{
    let a = parseInt(document.getElementById('current-percent').value, 10);
    let b = parseInt(document.getElementById('min-percent').value, 10);
    let c = parseInt(document.getElementById('final-percent').value, 10);
    // let total = a + b + c;
    let total = (( (b/100) - (1 - (c/100) ) * (a/100) ) / (c/100) * 100);
    document.getElementById('total').value = (total.toPrecision(5) + "%");

    if( !isNaN(total) )
    {
      console.log("Everything was fine when calculating when user entered numbers!");
    }
    if( isNaN(total) )
    {
      console.error("There was an error when calculating the numbers entered! Try Again!");
    }

    if(total > 100)
    {
      alert("Won't be able to get that desired score without extra credit! Sorry!")
      console.error("Sorry, but is not possible to get your desired grade without extra credit being on the final!");
    }
}
