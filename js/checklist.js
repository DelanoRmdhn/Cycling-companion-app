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

let countChecked;
const startingCondition = function () {
  tableBody.innerHTML = "";
  countChecked = 0;
  const progressBar = document.querySelector(".progress-bar");
  progressBar.style.width = "0%";
  progressBar.textContent = "0%";
};
const showItem = function () {
  startingCondition();
  allItems.forEach((items, index) => {
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
////////////////////////////
//Tambah Item
////////////////////////////
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

////////////////////////////
//Progressive progress bar
////////////////////////////

const countProgressBar = function (checked) {
  const totalItems = allItems.length;
  console.log(totalItems);
  const percentage = (checked / totalItems) * 100;
  return percentage;
};

tableBody.addEventListener("click", function (e) {
  if (e.target.classList.contains("form-check-input")) {
    const checkbox = e.target;
    checkbox.classList.toggle("checked");

    const progressBar = document.querySelector(".progress-bar");

    if (checkbox.classList.contains("checked")) {
      countChecked++;
    } else {
      countChecked--;
    }

    const progressBarPercentage = countProgressBar(countChecked);
    progressBar.style.width = `${progressBarPercentage}%`;
    progressBar.textContent = `${progressBarPercentage.toFixed(0)} %`;
  }
});

////////////////////////////
//Hapus Item
////////////////////////////
const deleteItemBtn = document.querySelectorAll(".delete-item-btn");

tableBody.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-item-btn")) {
    const row = e.target.closest("tr");
    console.log(row);
    const index = Array.from(tableBody.querySelectorAll("tr")).indexOf(row);
    // console.log(index);
    deleteItem(index);
    showItem();
  }
});

function deleteItem(index) {
  for (index; index < allItems.length; index++) {
    allItems[index] = allItems[index + 1];
  }

  allItems.length = allItems.length - 1;
}
