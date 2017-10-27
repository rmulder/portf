// for search js

"use strict";

let input = document.getElementById("theInput"),
    container = document.querySelector(".spec-search-container");

input.addEventListener("focus", function()
{
    container.classList.add("open");
});

input.addEventListener("blur", function()
{
    if(!input.value)
    {
        container.classList.remove("open");
    }
});
