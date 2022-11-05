/*
* Title: JavaScript basic to-do application
* Descripttion: This project work with html, css, and vanilla JavaScript. It's just simple JavaScript to-do application
* Author: Jakir Hossain
* Date: 05/11/2022
*
*/


// Declare all variable

let inputBox = document.querySelector('#inputBox');
let addTaskBtn = document.querySelector('#addtask');
let incompleteList = document.querySelector('#incomplete-list');
let completeList = document.querySelector('#complete-list');


// functions

createTask = (inputText) => {
    let newTask = document.createElement('li');
    let cb = document.createElement('input');
    cb.type = 'checkbox';
    newTask.append(cb);
    newTask.append(" ",inputText.value);
    return newTask;
}

addTask = (e) => {
    e.preventDefault();
    newItem = createTask(inputBox);
    incompleteList.append(newItem);
    
    bindIncompleteTask(newItem, completeTask);
}

// bind incomplete task function
function bindIncompleteTask(item, checkBoxClick) {
    let checkBox = item.querySelector('input[type=checkbox]');
    checkBox.onchange = checkBoxClick;
}

function completeTask (){
    listitem = this.parentNode;
    checkBox = listitem.querySelector('input[type=checkbox]');
    checkBox.remove();
    deleteBtn = document.createElement('a');
    deleteBtn.className = 'delete';
    deleteBtn.innerText = 'Delete';
    listitem.append(' ',deleteBtn);
    completeList.append(listitem);

    // bind complete items
    bindCompleteTask(listitem, deleteTask);
}

// bind incomplete items function

function bindCompleteTask(item, deleteClick) {
    deleteBtn = item.querySelector('.delete');
    deleteBtn.onclick = deleteClick;

}

function deleteTask(e) {
    e.preventDefault();
    listItem = this.parentNode;
    itemParent = listItem.parentNode;
    itemParent.removeChild(listItem);
}

// bind initial task item
let incomLength = incompleteList.children.length;
for(let i = 0; i < incomLength; i++) {
    bindIncompleteTask(incompleteList.children[i], completeTask);
}

let comLength = completeList.children.length;
for(let i = 0; i < comLength; i++) {
    bindCompleteTask(completeList.children[i], deleteTask);
    console.log(completeList.children[i]);
}


addTaskBtn.addEventListener('click', addTask);