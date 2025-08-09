"use strict";

const allItems = [
  { itemName: "Kacamata Sepeda" },
  { itemName: "Dompet" },
  { itemName: "Handphone" },
  { itemName: "TWS" },
  { itemName: "Jam Tangan" },
];

////////////////////////////
//SHOW ALL DATA
///////////////////////////

//Properties
const tableBody = document.getElementById("table-body");
const itemStatus = document.querySelector(".checklist-item-status");
const itemAction = document.querySelector(".checklist-item-action");

//Logic

const showItem = function () {
  tableBody.innerHTML = "";
  allItems.forEach((items, index) => {
    //reset

    const tableRow = document.createElement("tr");

    const itemNumber = document.createElement("th");
    itemNumber.textContent = index + 1;
    tableRow.appendChild(itemNumber);

    const item = document.createElement("td");
    item.textContent = items.itemName;
    tableRow.appendChild(item);

    const preparation = document.createElement("td");
    preparation.appendChild(itemStatus.content.cloneNode(true));
    tableRow.appendChild(preparation);

    const deleteItem = document.createElement("td");
    deleteItem.appendChild(itemAction.content.cloneNode(true));
    tableRow.appendChild(deleteItem);

    tableBody.appendChild(tableRow);
  });
};
showItem();

//Tambah Item
const addItemForm = document.getElementById("add-item-form");

function showAlertModal(item) {
  if (item === "") {
    alert("Harap Masukan Text!");
  } else {
    alert("Berhasil Menambah Item!");

    allItems.push({ itemName: item });
    showItem();
    addItemForm.reset();
  }
}
const addItem = function (e) {
  e.preventDefault();

  const item = document.getElementById("item-name").value.trim();

  showAlertModal(item);
};

addItemForm.addEventListener("submit", addItem);

//Progressive progress bar
const formCheck = document.querySelectorAll(".form-check");

const countProgressBar = function (checked) {
  const totalItems = allItems.length;
  const percentage = (checked / totalItems) * 100;
  return percentage;
};

let countChecked = 0;
formCheck.forEach((checkbox) => {
  checkbox.addEventListener("click", function () {
    checkbox.classList.toggle("checked");
    const progressBar = document.querySelector(".progress-bar");
    if (checkbox.classList.contains("checked")) {
      countChecked++;

      const progressBarPercentage = countProgressBar(countChecked);

      progressBar.style.width = `${progressBarPercentage}%`;
      progressBar.textContent = `${progressBarPercentage} %`;
    } else {
      countChecked--;
      const progressBarPercentage = countProgressBar(countChecked);
      progressBar.style.width = `${progressBarPercentage}%`;
      progressBar.textContent = `${progressBarPercentage} %`;
    }
  });
});
