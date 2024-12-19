"use strict";

//DOM Elements
const taskInput = document.querySelector(".task-input");
const taskBTN = document.querySelector(".add-task");
const taskList = document.querySelector(".task-list");

let tasks = []; //gloabl array for local storage
const addTask = function () {
  if (taskInput.value === "") {
    // if no value given alert is given to make sure a a proper task is added
    alert("Please input a task");
    return;
  } else {
    const taskValue = taskInput.value; //stores the input value
    const newElement = document.createElement("li"); //creates a new list element
    newElement.textContent = taskValue; //sets new element text to the value of the task input
    taskList.appendChild(newElement); //adds new list item to the to the task list
    tasks.push(taskValue); // push task inout value into array

    saveTask();
    console.log(tasks);
    taskInput.value = ""; //clears input

    const deleteBTN = document.createElement("button");
    deleteBTN.textContent = "Delete Task";
    deleteBTN.classList.add("delete-btn");
    newElement.appendChild(deleteBTN);
  }
};
const saveTask = function () {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
taskBTN.addEventListener("click", function () {
  addTask();
  console.log("button clicked");
});
