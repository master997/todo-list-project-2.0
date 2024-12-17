"use strict";

//DOM Elements
const taskInput = document.querySelector(".task-input");
const taskBTN = document.querySelector(".add-task");
const taskList = document.querySelector(".task-list");

const addTask = function () {
  const taskValue = taskInput.value; //gets value from input
  const newElement = document.createElement("li"); //creates new element list item
  newElement.textContent = taskValue; //gets task content from task value
  taskList.appendChild(newElement); //adds element to the task list
  taskInput.value = ""; //clears input
};
taskBTN.addEventListener("click", function () {
  console.log("button clicked");
  addTask();
});
