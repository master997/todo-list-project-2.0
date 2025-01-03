"use strict";

//DOM Elements
const taskInput = document.querySelector(".task-input");
const taskBTN = document.querySelector(".add-task");
const taskList = document.querySelector(".task-list");

let inputValue; //global variable so can use in other fucntion

const addTask = function () {
  inputValue = taskInput.value;
  if (inputValue.trim() === "" || inputValue === null) {
    alert("Please enter a proper task");
    return;
  }
  createElement();
  taskInput.value = ""; //clears input
};

const createElement = function () {
  const spanElement = document.createElement("span");
  const newElement = document.createElement("li");
  spanElement.textContent = inputValue; //puts text input into a span
  newElement.appendChild(spanElement); //span into list item
  taskList.appendChild(newElement); //list item added to task list

  //adding delete btn
  const deleteBTN = document.createElement("button");
  deleteBTN.textContent = "Delete";
  deleteBTN.classList.add("delete-btn");
  newElement.appendChild(deleteBTN);

  //adding editbtn
  const editBTN = document.createElement("button");
  editBTN.textContent = "edit";
  editBTN.classList.add("editBTN");
  newElement.appendChild(editBTN);

  //adding complete btn
  const completeBTN = document.createElement("button");
  completeBTN.textContent = "Mark as Done";
  completeBTN.classList.add("complete-btn");
  newElement.appendChild(completeBTN);

  const deleteTask = function () {
    newElement.remove();
  };

  const editTask = function () {
    let newInput = prompt("Edit current task", inputValue);
    if (newInput && newInput.trim() !== "") {
      spanElement.textContent = newInput;
    } else {
      alert("Task cannot be empty!");
    }
  };

  //event listeners
  deleteBTN.addEventListener("click", function () {
    deleteTask();
  });

  editBTN.addEventListener("click", function () {
    editTask();
  });

  completeBTN.addEventListener("click", function () {
    spanElement.classList.toggle("completed");
  });
};

taskBTN.addEventListener("click", function () {
  addTask();
});
