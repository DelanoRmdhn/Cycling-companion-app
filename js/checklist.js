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
