"use strict";

document.addEventListener('contextmenu', function(e)
{
    e.preventDefault();
});

  let image0 = document.images[0];
  let image1 = document.images[1];
  let image2 = document.images[2];
  let image3 = document.images[3];
  let image4 = document.images[4];
  let image5 = document.images[5];
  let image6 = document.images[6];
  let image7 = document.images[7];
  let bigImg0 = document.createElement("img");
  let bigImg1 = document.createElement("img");
  let bigImg2 = document.createElement("img");
  let bigImg3 = document.createElement("img");
  let bigImg4 = document.createElement("img");
  let bigImg5 = document.createElement("img");
  let bigImg6 = document.createElement("img");
  let bigImg7 = document.createElement("img");

  bigImg0.onload = function()
  {
    image0.src = this.src;
  }

  bigImg1.onload = function()
  {
    image1.src = this.src;
  }

  bigImg2.onload = function()
  {
    image2.src = this.src;
  }

  bigImg3.onload = function()
  {
    image3.src = this.src;
  }

  bigImg4.onload = function()
  {
    image4.src = this.src;
  }

  bigImg5.onload = function()
  {
    image5.src = this.src;
  }

  bigImg6.onload = function()
  {
    image6.src = this.src;
  }

  bigImg7.onload = function()
  {
    image7.src = this.src;
  }

  setTimeout(function()
  {
    bigImg0.src = "img/temp1.jpg";
    bigImg1.src = "img/temp2.jpg";
    bigImg2.src = "img/temp3.jpg";
    bigImg3.src = "img/temp4.jpg";
    bigImg4.src = "img/temp5.jpg";
    bigImg5.src = "img/temp6.jpg";
    bigImg6.src = "img/temp7.jpg";
    bigImg7.src = "img/temp8.jpg";
  }, 10);
