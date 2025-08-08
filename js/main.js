"use strict";

//Handling Open and Close features
const featuresBtn = document.querySelectorAll("#main-nav button");

featuresBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    const pagesName = btn.dataset.page;
    const page = document.getElementById(`page-${pagesName}`);
    page.classList.toggle("hidden");
  });
});
