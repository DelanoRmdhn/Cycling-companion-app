"use strict";

//Handling Open and Close features
const featuresBtn = document.querySelectorAll("button");
featuresBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    const pages = btn.dataset.page;
    const page = document.getElementById(`page-${pages}`);
    page.classList.toggle("hidden");
  });
});
